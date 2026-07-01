<div align="center">

# 🍳 What the Cook?

### AI-powered recipe generator that turns whatever's in your fridge into dinner.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-f3a683?style=for-the-badge&logo=vercel)](https://what-the-cook.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-f3d2c1?style=for-the-badge)](LICENSE)
[![Groq](https://img.shields.io/badge/Powered%20by-Groq%20%2B%20Llama%203-black?style=for-the-badge)](https://groq.com)

<br/>

> *"I have eggs, rice, and half a lime... what do I even make?"*
>  you, at 7pm, every night

<br/>

</div>

---

## ✨ What It Does

You type in whatever random ingredients you have lying around. The AI thinks for a second. Then boom: a complete recipe with a title, ingredient list, and step-by-step instructions, built specifically around what you actually have.

No scrolling through food blogs. No "this recipe requires 14 specific spices." Just real, cookable suggestions from your actual fridge.

---

## 🛠️ Built With

| | |
|---|---|
| **Frontend** | HTML, CSS, Vanilla JavaScript |
| **Backend** | Vercel Serverless Functions |
| **AI** | [Groq API](https://console.groq.com) (Llama 3.1 8B) |
| **Hosting** | Vercel |

> 💡 The Groq API is **100% free** to use no credit card needed. It runs open-source Llama 3 models at ridiculous speed.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (v18+)
- A free [Groq API key](https://console.groq.com) (takes 30 seconds to get)

### 1. Clone the repo

```bash
git clone https://github.com/tanishaf28/What-the-cook-.git
cd What-the-cook-
```

### 2. Add your API key

Create a `.env` file in the project root:

```bash
GROQ_API_KEY=your_key_here
```

> ⚠️ Never commit this file. It's already in `.gitignore`.

### 3. Run locally

```bash
npm install -g vercel
vercel dev
```

Open [http://localhost:3000](http://localhost:3000) and start cooking. 🎉

---

## 📁 Project Structure

```
what-the-cook/
├── api/
│   └── generate-recipe.js   # Serverless function calls Groq API
├── index.html               # Entire frontend (HTML + CSS + JS)
└── .gitignore
```

It's intentionally minimal. One frontend file. One backend function. That's it.

---

## 🔮 How It Works

```
User types ingredients
        ↓
Browser sends POST to /api/generate-recipe
        ↓
Serverless function calls Groq (Llama 3) with a structured prompt
        ↓
AI returns recipe in TITLE / INGREDIENTS / STEPS format
        ↓
JavaScript parses the response and renders it on the page
```

The API key lives only on the server side, so it's never exposed in the browser's source code.

---

## 🧑‍🍳 Example

**Input:**
```
chicken breast, rice, broccoli, soy sauce, garlic, sesame oil
```

**Output:**
> **Garlic Sesame Chicken Bowl**
>
> *Ingredients:* chicken breast, rice, broccoli, soy sauce, garlic, sesame oil, cornstarch, ginger
>
> *Steps:* Marinate the chicken in soy sauce, garlic, and sesame oil for 15 minutes...

---

## 🌱 Roadmap / Stretch Goals

- [ ] Dietary filters (vegan 🌱, gluten-free, keto)
- [ ] Save favorite recipes with `localStorage`
- [ ] Swap models try `mixtral-8x7b-32768` for different vibes
- [ ] Mobile-responsive layout improvements

---

## 🚢 Deploy Your Own

1. Push to GitHub
2. Import repo at [vercel.com](https://vercel.com)
3. Add `GROQ_API_KEY` under Environment Variables
4. Deploy → done ✅

Your own live app in about 2 minutes, free forever on Vercel's hobby tier.

---

## 📖 Tutorial

This project was built as a [Codédex](https://codedex.io) tutorial. If you want to build it from scratch and understand every line of code, check out the full write-up:

👉 **[Build a Recipe Generator with HTML, CSS, JS & the Groq API](https://codedex.io)**

---

## 📄 License

MIT © [tanishaf28](https://github.com/tanishaf28)

---

<div align="center">
  <sub>Made with ❤️ and questionable fridge contents</sub>
</div>
