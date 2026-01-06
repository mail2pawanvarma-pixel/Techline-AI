
import { TECHLINE_INFO } from "../constants";

export const askAI = async (prompt: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const systemInstruction = `You are the official AI assistant for Techline Studio. Your goal is to answer questions about our AI and Cybersecurity training program based on the following info: ${TECHLINE_INFO}. 
  If a user asks a question not covered by the program details but related to technology, AI, or cybersecurity, use Google Search to provide an accurate answer. 
  Always be professional, encouraging, and helpful. You can respond in both Hindi and English as requested by the user.`;

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt, history, systemInstruction }),
  });

  if (!response.ok) {
    const errData = await response.json();
    throw new Error(errData.error || 'Failed to connect to AI server');
  }

  return await response.json();
};

export const generateSpeech = async (text: string) => {
  const response = await fetch('/api/speech', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) throw new Error('Speech generation failed');
  
  const data = await response.json();
  return data.audioData;
};

// Audio Decoding logic (remains client-side)
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
