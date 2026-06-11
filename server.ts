import express from 'express';
import { createServer as createViteServer } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { GoogleGenAI } from '@google/genai';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());

let ai: GoogleGenAI | null = null;
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
                systemInstruction: `You are the polite and professional AI receptionist for "توب ليفل باربر شوب " (Top Level BarberShop) in Saudi Arabia. 
CRITICAL RULE: You MUST speak to the user in the EXACT SAME LANGUAGE they use to talk to you. If they type in English, reply entirely in English. If they type in Arabic, reply entirely in Arabic.
Your job is to provide short, helpful answers, and to book appointments for clients with emojies to make the converstation live. 
If a client wants to book an appointment, ask for their preferred time, date, name, and phone number.
Once they provide all this information, thank them and say you will send a message to the boss to confirm it.
Use this JSON format whenever an appointment is fully confirmed by issuing exactly this string: "[BOOKING_CONFIRMED: {\"name\": \"name\", \"time\": \"time\"}]".
Maintain a welcoming and sophisticated tone.`,
            },
        });
    }
    return chatSession;
};

app.post('/api/chat', async (req, res) => {
    try {
        const { message, reset } = req.body;
        if (reset) {
            chatSession = null;
            return res.json({ response: "Chat reset" });
        }
        
        const chat = getChatSession();
        const apiRes = await chat.sendMessage({ message });
        
        res.json({ response: apiRes.text });
    } catch (e: any) {
        console.error("Chat error:", e);
        res.status(500).json({ error: e.message || "Failed to generate response" });
    }
});

app.post('/api/notify-boss', (req, res) => {
    const { name, time, phone } = req.body;
    console.log(`[BOSS NOTIFICATION] New appointment booked for ${name} at ${time}. Phone: ${phone}`);
    res.json({ success: true, message: "Boss notified" });
});

async function startServer() {
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    try {
      let template = '';
      if (process.env.NODE_ENV === 'production') {
          return res.sendFile(resolve(__dirname, 'dist', 'index.html'));
      } else {
         const fs = await import('fs/promises');
         const indexHtmlPath = resolve(__dirname, 'index.html');
         const indexHtml = await fs.readFile(indexHtmlPath, 'utf-8');
         template = await vite.transformIndexHtml(req.originalUrl, indexHtml);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      }
    } catch (e: any) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
