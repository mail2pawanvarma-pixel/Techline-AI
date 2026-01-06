
# 🚀 Simple Deployment Guide: GitHub + Vercel

Follow these steps to get your Techline Studio website live with a working AI Chatbot.

### 1. Upload your code to GitHub
1. Go to [GitHub.com](https://github.com) and create a new repository named `techline-studio`.
2. Upload all the files (including `App.tsx`, `index.html`, etc.) to this repository.

### 2. Connect to Vercel
1. Go to [Vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **Add New** > **Project**.
3. Click **Import** next to your `techline-studio` repository.

### 3. Make the Chatbot Work (Crucial)
Vercel needs your API Key to talk to the Gemini AI. 
1. On the Vercel "Configure Project" page, open the **Environment Variables** section.
2. **Key:** `API_KEY`
3. **Value:** [Paste your API Key from Google AI Studio here]
4. Click **Add**.

### 4. Finish
1. Click **Deploy**.
2. Once finished, Vercel will provide a URL like: `https://techline-studio.vercel.app`

---

## ❓ Common Questions

**How will my domain look?**
*   **Free Domain:** Vercel gives you one for free, like `techline-studio.vercel.app`.
*   **Custom Domain:** If you buy a domain (like `techlinestudio.in`), you can connect it easily in Vercel's "Domains" settings.

**Why is the Chatbot not replying?**
*   Ensure you added the Environment Variable named exactly `API_KEY` in Vercel.
*   Ensure your API Key is active in [Google AI Studio](https://aistudio.google.com/).

**Is this safe?**
*   Yes. By putting the key in Vercel's Environment Variables instead of the code, your key stays secret and protected.
