// api/chat.js
import Groq from "groq-sdk";
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const { message, type, solutionContext } = req.body;

    let systemPrompt = "";
    let responseFormat = {};

    if (type === "CREATE_STORY") {
      systemPrompt = `Du bist ein Meister der 'Black Stories' (Laterales Denken). 
      Erstelle eine neue, makabre Geschichte. 
      Antworte NUR im JSON-Format: {"title": "...", "mystery": "...", "solution": "..."}.
      Das 'mystery' ist kurz und rätselhaft. Die 'solution' ist die logische, aber abwegige Erklärung.`;
      responseFormat = { "type": "json_object" };
    } else {
      systemPrompt = `Du bist der Spielleiter einer Black Story. 
      Der Spieler versucht das Rätsel zu lösen. Die Lösung ist: ${solutionContext}.
      Antworte NUR mit 'Ja', 'Nein' oder 'Irrelevant'. Gib NIEMALS Tipps, es sei denn, der Spieler ist völlig verzweifelt.`;
    }

    const completion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      model: "mixtral-8x7b-32768",
      response_format: responseFormat,
    });

    return res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}