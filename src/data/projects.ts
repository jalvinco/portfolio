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
  title: "AI Voice Expense Tracker",

  tagline:
    "Making expense tracking as easy as having a conversation.",

  overview:
    "A voice-first expense tracker that uses AI and automation to capture financial transactions naturally.",

  problem:
    "Most expense trackers require manual typing, making them slow and inconvenient. The goal was to allow users to simply speak their expenses.",

  solution:
    "The application records voice, sends it to an n8n workflow, extracts structured data with AI, confirms it with the user, stores it locally, and synchronizes it with Google Sheets.",

  architecture: [
    "React Native",
    "Webhook",
    "n8n",
    "OpenAI",
    "Confirmation",
    "SQLite",
    "Google Sheets",
  ],

  technologies: [
    "React Native",
    "TypeScript",
    "Expo",
    "n8n",
    "OpenAI",
    "SQLite",
    "Google Sheets",
    "Cloudflare",
  ],

  features: [
    "Voice recording",
    "AI transaction extraction",
    "User confirmation",
    "Offline local storage",
    "Google Sheets synchronization",
    "Monthly summaries",
  ],

  challenges: [
    "Understanding natural language input.",
    "Supporting Taglish voice commands.",
    "Handling incomplete expense details.",
    "Keeping local data synchronized with Google Sheets.",
  ],

  github: "#",
  liveDemo: "#",
  description:
    "A voice-first expense tracker that uses AI and automation to capture financial transactions naturally.",
};

export const projects: Project[] = [
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