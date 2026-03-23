// api/chat.js
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY, // In den Vercel Settings unter 'Environment Variables' eintragen
});

export default async function handler(req, res) {
  // CORS Header (damit Flutter zugreifen darf)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Nur POST erlaubt' });
  }

  try {
    const { message } = req.body;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Du bist eine hilfreiche KI. Antworte extrem kurz und prägnant, ideal für Sprachausgabe.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      model: "mixtral-8x7b-32768",
    });

    const aiReply = chatCompletion.choices[0]?.message?.content || "";

    return res.status(200).json({ reply: aiReply });
  } catch (error) {
    console.error("Groq Error:", error);
    return res.status(500).json({ error: 'Groq API Fehler' });
  }
}