const resumeUrl = new URL("../assets/Jay-Alvin-CV.pdf", import.meta.url).href;

export const profile = {
  greeting: "Hi, I'm",
  subtitle: ["JaySub", "next"],
  name: "Jay Alvin",
  title: "Title",
  headline: "Software Engineer",

  roles: [
    "Automation Builder",
    "React/Vite/Angular/Vue Developer",
    "Street Photographer",
  ],

  description:
    "Building cloud infrastructure, AI-powered automations, web applications, and sharing stories through photography.",

  github: "https://github.com/jayalvinco",
  linkedin: "",
  email: "",
  resume: resumeUrl,
};