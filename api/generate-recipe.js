export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { ingredients } = req.body;
  if (!ingredients) {
    return res.status(400).json({ error: "ingredients is required" });
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `You are a helpful cooking assistant. Based on these ingredients: ${ingredients}, suggest one creative recipe. Format your response exactly like this:

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
          },
        ],
      }),
    }
  );

  if (!response.ok) {
    return res.status(502).json({ error: "Gemini API error" });
  }

  const data = await response.json();
  const recipe = data.candidates[0].content.parts[0].text;
  res.status(200).json({ recipe });
}
