
import { GoogleGenAI, Modality } from "@google/genai";
import { TECHLINE_INFO } from "../constants";

const getAIClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const askAI = async (prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: [
      ...history,
      { role: 'user', parts: [{ text: prompt }] }
    ],
    config: {
      systemInstruction: `You are the official AI assistant for Techline Studio. Your goal is to answer questions about our AI and Cybersecurity training program based on the following info: ${TECHLINE_INFO}. 
      If a user asks a question not covered by the program details but related to technology, AI, or cybersecurity, use Google Search to provide an accurate answer. 
      Always be professional, encouraging, and helpful. You can respond in both Hindi and English as requested by the user.`,
      tools: [{ googleSearch: {} }]
    }
  });

  const text = response.text || "I'm sorry, I couldn't process that.";
  const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  
  return { text, sources };
};

export const generateSpeech = async (text: string) => {
  const ai = getAIClient();
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-tts",
    contents: [{ parts: [{ text: `Read this response clearly and naturally in a friendly tone: ${text}` }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName: 'Kore' } // 'Kore' is good for multi-lingual clarity
        }
      }
    }
  });

  const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  return base64Audio;
};

// Audio Decoding logic
export async function playPCM(base64Data: string) {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  const binaryString = atob(base64Data);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  const dataInt16 = new Int16Array(bytes.buffer);
  const buffer = audioContext.createBuffer(1, dataInt16.length, 24000);
  const channelData = buffer.getChannelData(0);
  for (let i = 0; i < dataInt16.length; i++) {
    channelData[i] = dataInt16[i] / 32768.0;
  }

  const source = audioContext.createBufferSource();
  source.buffer = buffer;
  source.connect(audioContext.destination);
  source.start();
}
