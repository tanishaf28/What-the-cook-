export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { ingredients } = req.body;
  if (!ingredients) {
    return res.status(400).json({ error: "ingredients is required" });
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.1-8b-instant",
      messages: [
        {
          role: "user",
          content: `You are a helpful cooking assistant. Based on these ingredients: ${ingredients}, suggest one creative recipe. Format your response exactly like this:

TITLE: [recipe name]
INGREDIENTS:
- [ingredient 1]
- [ingredient 2]
STEPS:
1. [step one]
2. [step two]

Keep it realistic and only use common pantry staples in addition to what was listed.`,
        },
      ],
    }),
  });

  if (!response.ok) {
    const errBody = await response.text();
    console.error("Groq error", response.status, errBody);
    return res.status(502).json({ error: "AI API error", detail: errBody });
  }

  const data = await response.json();
  const recipe = data.choices[0].message.content;
  res.status(200).json({ recipe });
}
