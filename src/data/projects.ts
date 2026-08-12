export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  technologies: string[];
  category: string;
  status: "In Progress" | "Completed" | "Experiment";
  featured?: boolean;
  github?: string;
  liveDemo?: string;
};

export type FeaturedProject = {
  title: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string[];
  technologies: string[];
  features: string[];
  challenges: string[];
  github: string;
  liveDemo: string;
  description: string;
};

export const featuredProject: FeaturedProject = {
  title: "Lyzr AI Contact Agent",

  tagline:
    "An AI assistant embedded directly into this portfolio’s contact experience.",

  overview:
    "A Lyzr-powered AI agent that lives inside the website itself, allowing visitors to ask quick questions from the Contact page and receive contextual replies in the browser.",

  problem:
    "The site needed a lightweight way to answer common questions without forcing visitors to switch to email or call manually. It also needed a conversational experience that felt personal and responsive.",

  solution:
    "I built a browser-to-Cloudflare Worker flow where the Contact form submits the prompt to a backend endpoint, the Worker forwards it to a Lyzr agent, and the answer is rendered directly inside the page with session-aware behavior.",

  architecture: [
    "React",
    "Cloudflare Worker",
    "Lyzr Agent",
    "Session Storage",
    "JSON API",
    "AI Response",
  ],

  technologies: [
    "React",
    "TypeScript",
    "Cloudflare Workers",
    "Lyzr",
    "AI Agents",
    "REST API",
    "Tailwind CSS",
  ],

  features: [
    "Quick question chips",
    "Session-based conversation flow",
    "Frontend message rendering",
    "Backend AI orchestration via Worker",
    "Context-aware answer generation",
    "Embedded website experience",
  ],

  challenges: [
    "Ensuring the Worker route matched the browser request correctly.",
    "Maintaining a stable session between questions.",
    "Handling API errors and showing helpful UI feedback.",
    "Balancing conversational UX with a clean portfolio design.",
  ],

  github: "#",
  liveDemo: "/contact",
  description:
    "A Lyzr-powered AI assistant integrated into the Contact page so visitors can ask questions directly on the site.",
};

export const projects: Project[] = [
  {
    id: "lyzr-ai-contact-agent",

    title: "Lyzr AI Contact Agent",

    tagline:
      "An AI assistant embedded directly into the portfolio contact experience.",

    description:
      "A Lyzr-powered contact assistant integrated into this website itself. Visitors can tap quick questions or type their own prompt and receive a response directly in the Contact page via a Cloudflare Worker.",

    technologies: [
      "React",
      "TypeScript",
      "Cloudflare Workers",
      "Lyzr",
      "AI Agents",
      "Tailwind CSS",
    ],

    category: "AI / Web / Cloud",

    status: "Completed",

    featured: true,

    github: "#",
    liveDemo: "/contact",
  },

  {
    id: "ai-voice-expense-tracker",

    title: "AI Voice Expense Tracker",

    tagline:
      "Making expense tracking as easy as having a conversation.",

    description:
      "A voice-first expense tracker using React Native, AI, and n8n to capture and organize financial transactions.",

    technologies: [
      "React Native",
      "TypeScript",
      "n8n",
      "OpenAI",
      "SQLite",
      "Google Sheets",
    ],

    category: "AI / Mobile / Automation",

    status: "In Progress",

    featured: true,

    github: "#",
    liveDemo: "#",
  },

  {
    id: "n8n-automation-lab",

    title: "n8n Automation Lab",

    tagline:
      "Experiments in workflow automation and AI integration.",

    description:
      "A collection of automation experiments involving webhooks, APIs, AI agents, and data processing.",

    technologies: [
      "n8n",
      "Webhooks",
      "REST APIs",
      "AI",
      "Automation",
    ],

    category: "Automation / AI",

    status: "Experiment",

    featured: true,

    github: "#",
  },
];