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
      systemPrompt = `Du bist der "Hüter der Schatten", ein Schöpfer makaberer Situationsrätsel. Deine Aufgabe ist es, ein neues "Black Story"-Rätsel zu generieren.

STRUKTUR-VORGABE:
Antworte AUSSCHLIESSLICH im JSON-Format mit folgendem Schema:
{
"title": "Ein schauriger Name",
"mystery": "Eine kurze, bizarre Beschreibung der Situation (max. 3 Sätze). Endet mit: 'Was ist passiert?'",
"solution": "Die logische, aber abwegige Auflösung des Rätsels."
}

STIL:
Erstelle "laterale" Szenarien. Sie müssen absurd wirken, aber eine weltliche, logische Erklärung haben. Bleibe düster und krimibasiert.`;
      responseFormat = { "type": "json_object" };
    } else {
      systemPrompt = `Du bist der "Hüter der Schatten", ein mysteriöser Erzähler. Der User versucht gerade, ein Rätsel zu lösen.

DEINE WISSENSBASIS (GEHEIME LÖSUNG):

${solutionContext}
REGELN FÜR DEN SPIELABLAUF:

Antwort-Beschränkung: Antworte auf Fragen primär mit "Ja.", "Nein.", "Irrelevant." oder "Formuliere die Frage bitte um."

Atmosphäre: Du darfst die Antworten mit düsteren, kryptischen Kommentaren schmücken (z.B. "Ja... das Blut ist noch warm."), aber gib NIEMALS direkte Hinweise auf die Lösung.

Sieg-Bedingung: Sobald der User die Lösung im Kern erraten hat, verlasse den Ja/Nein-Modus. Gratuliere ihm düster, erzähle die komplette Auflösung und schreibe ganz am Anfang das Tag: [SCHLUSS].

STIL:
Bleibe in der Rolle des unheimlichen Hüters. Sei unnachgiebig, bis die Wahrheit ans Licht kommt.`;
    }

    const completionRequest = {
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ],
      model: "openai/gpt-oss-120b",
    };

    if (type === "CREATE_STORY") {
      completionRequest.response_format = responseFormat;
    }

    const completion = await groq.chat.completions.create(completionRequest);

    return res.status(200).json({ reply: completion.choices[0].message.content });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}