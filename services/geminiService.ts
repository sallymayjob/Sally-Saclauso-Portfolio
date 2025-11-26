import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
You are an AI assistant representing ${PORTFOLIO_DATA.name}, a ${PORTFOLIO_DATA.title}.
Your goal is to answer questions from visitors about Alex's portfolio, skills, experience, and projects.

Here is the context about Alex:
${JSON.stringify(PORTFOLIO_DATA, null, 2)}

Guidelines:
1. Be professional, friendly, and concise.
2. Only answer questions related to Alex's professional life.
3. If asked about contact info, provide the email or mention the social links.
4. If asked about a specific skill not listed, say you aren't sure but Alex is always learning.
5. Keep responses under 3-4 sentences unless detailed technical explanation is asked.
6. Speak in the first person ("I") or third person ("Alex") as you see fit, but being an "AI assistant for Alex" is clearest.
`;

export const getGeminiChatResponse = async (userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Error: API Key is missing. Please configure the environment.";
  }

  try {
    if (!chatSession) {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      chatSession = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });
    }

    const response: GenerateContentResponse = await chatSession.sendMessage({ message: userMessage });
    return response.text || "I'm sorry, I couldn't generate a response at the moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a temporary error. Please try again later.";
  }
};

export const resetChat = () => {
  chatSession = null;
};