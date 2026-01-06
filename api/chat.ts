
import { GoogleGenAI } from "@google/genai";

export const config = {
  maxDuration: 30, // Gemini can take a few seconds
};

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, history, systemInstruction } = req.body;
  const apiKey = process.env.GOOGLE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Server configuration error: GOOGLE_API_KEY is missing.' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: systemInstruction,
        tools: [{ googleSearch: {} }]
      }
    });

    const text = response.text || "I'm sorry, I couldn't process that.";
    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];

    return res.status(200).json({ text, sources });
  } catch (error: any) {
    console.error('API Error:', error);
    return res.status(500).json({ error: error.message || 'An error occurred during generation' });
  }
}
