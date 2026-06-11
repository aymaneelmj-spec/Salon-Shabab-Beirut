import { GoogleGenAI } from '@google/genai';

let ai: any = null;
let chatSession: any = null;

const getChatSession = () => {
    if (!process.env.GEMINI_API_KEY) {
        throw new Error("GEMINI_API_KEY is not set in the environment variables.");
    }
    if (!ai) {
        ai = new GoogleGenAI({
            apiKey: process.env.GEMINI_API_KEY,
            httpOptions: {
                headers: {
                    'User-Agent': 'aistudio-build',
                }
            }
        });
    }
    if (!chatSession) {
        chatSession = ai.chats.create({
            model: "gemini-2.5-flash",
            config: {
                systemInstruction: `You are the polite and professional AI receptionist for "CUT AND FUN BarberShop" (Professional Razor) in Saudi Arabia. 
CRITICAL RULE: You MUST speak to the user in the EXACT SAME LANGUAGE they use to talk to you. If they type in English, reply entirely in English. If they type in Arabic, reply entirely in Arabic.
Your job is to provide short, helpful answers, and to book appointments for clients using emojies to make it live. 
If a client wants to book an appointment, ask for their preferred time, date, name, and phone number.
Once they provide all this information, thank them and say you will send a message to the boss to confirm it.
Use this JSON format whenever an appointment is fully confirmed by issuing exactly this string: "[BOOKING_CONFIRMED: {\\"name\\": \\"name\\", \\"time\\": \\"time\\"}]".
Maintain a welcoming and sophisticated tone.`,
            },
        });
    }
    return chatSession;
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, reset } = req.body;
    if (reset) {
        chatSession = null;
        return res.status(200).json({ response: "Chat reset" });
    }
    
    const chat = getChatSession();
    const apiRes = await chat.sendMessage({ message });
    
    res.status(200).json({ response: apiRes.text });
  } catch (e) {
    console.error("Chat error:", e);
    res.status(500).json({ error: e.message || "Failed to generate response" });
  }
}
