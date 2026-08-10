import { Link } from "react-router-dom";

import Section from "../ui/Section";
import ArchitectureFlow from "../ui/ArchitectureFlow";

import { projects } from "../../data/projects";

function FeaturedProject() {
  const project = projects.find(
    (project) => project.id === "ai-voice-expense-tracker"
  );

  if (!project) {
    return null;
  }

  return (
    <Section>
      <div className="max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-500">
          Featured Project
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          {project.title}
        </h2>

        <p className="mt-4 text-xl text-zinc-400">
          {project.tagline}
        </p>

        <p className="mt-8 leading-8 text-zinc-300">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-zinc-700 px-4 py-2 text-sm"
            >
              {technology}
            </span>
          ))}
        </div>

        <ArchitectureFlow
          steps={[
            "React Native",
            "Voice Recording",
            "n8n",
            "AI",
            "Confirmation",
            "SQLite",
            "Google Sheets",
          ]}
        />

        <div className="mt-12 flex gap-4">
          <Link
            to="/projects"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            View Case Study
          </Link>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-700 px-6 py-3 transition hover:bg-zinc-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}

export default FeaturedProject;