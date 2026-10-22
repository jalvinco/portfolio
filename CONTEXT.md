# Jay Alvin Co Portfolio — Project Context

## Project

I am building a personal portfolio website for Jay Alvin Co.

Main domain:

https://jayalvin.co

The website is a React + Vite + TypeScript project using Tailwind CSS.

The project is being developed locally in Visual Studio Code on Windows.

The website is deployed through Cloudflare.

---

# Frontend Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Cloudflare Pages / Workers ecosystem

The portfolio repository is called:

portfolio

---

# Current Website

The portfolio contains pages/components including:

- Home
- About
- Projects
- Photography / Gallery
- Contact

The photography gallery uses local/imported images and Cloudflare R2 for production image hosting.

---

# Photography / R2

Cloudflare R2 bucket:

photopport

Custom R2 domain:

https://photos.jayalvin.co

Photos are organized approximately like:

assets/
  photos/
    portrait/
      1.jpg
      2.jpg
      3.jpg
    landscape/
      1.jpg
      2.jpg
      3.jpg
    travel/
      1.jpg
      2.jpg
      3.jpg

Photo sizes are generally around 500 KB to 1 MB.

Photocard images use lazy loading:

<img
  src={photo.image}
  alt={photo.title}
  loading="lazy"
  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
/>

---

# Contact Page

The Contact page was changed from a simple contact message into an AI question interface.

The greeting is:

"Hello! I'm Jay Alvin Co"

"Co" is displayed in blue to match the navigation styling.

Subtitle:

"Ask me a question! Any question, my AI me will answer!"

The user enters a question in a textarea and submits it.

The page displays:

- User question
- Loading state
- AI response
- Error state

The frontend sends requests to:

https://api.jayalvin.co/api/chat

Current Contact.tsx structure uses:

const API_URL = "https://api.jayalvin.co";

and:

fetch(`${API_URL}/api/chat`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    message: trimmedMessage,
    session_id: sessionId,
  }),
});

A browser session ID is generated with crypto.randomUUID() and stored in localStorage.

Storage key:

jayalvin-ai-session

---

# Backend API

There is a separate Cloudflare Worker project:

portfolio-api

Directory:

portfolio-api/

Main Worker file:

src/index.ts

Wrangler configuration:

wrangler.jsonc

Production API domain:

https://api.jayalvin.co

Cloudflare Worker name:

portfolio-api

Cloudflare custom domain:

api.jayalvin.co

---

# Backend Architecture

The architecture is:

Browser
    ↓
jayalvin.co
    ↓
Contact.tsx
    ↓
POST https://api.jayalvin.co/api/chat
    ↓
Cloudflare Worker
    ↓
Lyzr AI API
    ↓
AI response
    ↓
Cloudflare Worker
    ↓
Website

The Lyzr API endpoint is:

https://agent-prod.studio.lyzr.ai/v3/inference/chat/

The Lyzr API key MUST remain inside Cloudflare Worker secrets.

It must NEVER be placed in React/frontend code.

---

# Cloudflare Worker Environment Variables

The Worker uses:

LYZR_API_KEY
LYZR_AGENT_ID
LYZR_USER_ID
LYZR_SESSION_ID

Do not expose LYZR_API_KEY in frontend code.

The known Lyzr agent ID is:

6a7ae219966e20983445deec

The original Lyzr user ID used was:

jalbinco@gmail.com

The original session ID was:

6a7ae219966e20983445deec-vgplnmm0

---

# Important API Debugging History

We previously had an "Invalid API Key" problem.

The problem was eventually discovered to be the Cloudflare secret itself.

The Worker diagnostic showed:

exists: true
length: 1
firstCharCode: 22
lastCharCode: 22

This meant LYZR_API_KEY was incorrectly stored as a one-character control character.

We replaced the Cloudflare secret using:

npx.cmd wrangler secret put LYZR_API_KEY

After replacing it, the direct production API test succeeded.

Therefore:

Cloudflare Worker → Lyzr API

is currently working.

---

# Current Problem

The direct production API test works.

However, the website Contact page currently receives:

HTTP 404 Not Found

for:

POST https://api.jayalvin.co/api/chat

Chrome DevTools showed:

Request URL:
https://api.jayalvin.co/api/chat

Request Method:
POST

Status Code:
404 Not Found

The response included:

Access-Control-Allow-Origin: https://jayalvin.co

Therefore:

- Browser can reach api.jayalvin.co
- Cloudflare is responding
- CORS is functioning
- The frontend is using the correct API URL
- The current problem appears to be Worker routing / deployed Worker behavior

---

# Current Worker Routing

The Worker should recognize:

GET /
POST /api/chat
OPTIONS /api/chat

There is currently a routing check similar to:

const url = new URL(request.url);

if (
  request.method === "POST" &&
  url.pathname === "/api/chat"
) {
  ...
}

We were planning to make this more robust using:

const pathname = url.pathname.replace(/\/+$/, "");

console.log("Incoming request:", {
  method: request.method,
  pathname: url.pathname,
  normalizedPath: pathname,
  host: url.host,
});

Then:

if (
  request.method === "POST" &&
  pathname === "/api/chat"
) {
  ...
}

This change belongs in:

portfolio-api/src/index.ts

NOT in Contact.tsx.

---

# Current Debugging Plan

1. Modify portfolio-api/src/index.ts.
2. Normalize the pathname.
3. Add temporary Worker logging.
4. Deploy:

npx.cmd wrangler deploy

5. Run:

npx.cmd wrangler tail portfolio-api

6. Submit a question from:

https://jayalvin.co

7. Check the Worker log.

Expected debug output:

Incoming request:
{
  method: "POST",
  pathname: "/api/chat",
  normalizedPath: "/api/chat",
  host: "api.jayalvin.co"
}

If the Worker still returns 404 despite the path being correct, investigate the deployed Worker/custom-domain routing.

---

# CORS

The Worker allows:

http://localhost:5173
https://jayalvin.co
https://www.jayalvin.co

CORS methods:

POST
OPTIONS

CORS headers:

Content-Type

The browser currently receives:

Access-Control-Allow-Origin: https://jayalvin.co

So CORS is not currently the main problem.

---

# Important Security Rules

Never put:

LYZR_API_KEY

inside React, Vite, TypeScript frontend code, or .env files that are exposed to the browser.

The Lyzr API key belongs only in Cloudflare Worker secrets.

Never print the full API key in logs.

Never commit API keys to GitHub.

The API key was previously exposed during debugging and should eventually be rotated/revoked.

---

# Development Commands

Frontend:

npm run dev

Backend:

npx.cmd wrangler dev

Deploy backend:

npx.cmd wrangler deploy

Login:

npx.cmd wrangler login

Worker logs:

npx.cmd wrangler tail portfolio-api

Cloudflare secrets:

npx.cmd wrangler secret put SECRET_NAME

---

# Current Goal

Get the Contact page working end-to-end:

User enters question
    ↓
Contact.tsx
    ↓
https://api.jayalvin.co/api/chat
    ↓
Cloudflare Worker
    ↓
Lyzr
    ↓
AI response
    ↓
Display response under "AI Me"

Once this works, continue with the next portfolio milestone.

Do not redesign unrelated parts of the portfolio while debugging the API.