
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

## 🔒 Security: How to lock your API Key
To ensure your API Key **only** works on your Techline Studio website:

1. Go to [Google Cloud Credentials](https://console.cloud.google.com/apis/credentials).
2. Click on your API key name.
3. Under **"Application restrictions"**, select **Websites**.
4. Add your website URL: `https://techline-studio.vercel.app/*`
5. If you buy a custom domain (e.g., `techlinestudio.in`), add `https://techlinestudio.in/*` as well.
6. Click **Save**.

*This ensures that even if someone finds your key, they cannot use it on any other website.*

---

## 🔑 How to get your API Key (Troubleshooting)

If you are stuck on the **"Select a Cloud Project"** screen in Google AI Studio:

1. **If the dropdown is empty:** 
   * Go to the [Google Cloud Console](https://console.cloud.google.com/).
   * Click the project selector at the top and click **"New Project"**.
   * Give it a name (e.g., `techline-ai`) and click **Create**.
   * Return to AI Studio, **Refresh the page**, and you can now select that project from the list.

2. **The "One-Click" Method:**
   * On the main [AI Studio API Keys page](https://aistudio.google.com/app/apikey), simply click the button that says **"Create API key in new project"**. This is the easiest way as it skips the manual project selection.
