import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const projectUrl =
    project.liveDemo && project.liveDemo !== "#"
      ? project.liveDemo
      : project.github && project.github !== "#"
        ? project.github
        : undefined;

  return (
    <article className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm text-orange-400">
            {project.category}
          </p>

          <h3 className="mt-2 text-2xl font-semibold">
            {project.title}
          </h3>
        </div>

        <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-400">
          {project.status}
        </span>
      </div>

      <p className="mt-4 text-zinc-400">
        {project.tagline}
      </p>

      <p className="mt-4 text-sm leading-6 text-zinc-500">
        {project.description}
      </p>

      {project.screenshots && (
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {project.screenshots.map((screenshot) => (
            <div key={screenshot.title} className="min-w-0">
              <div className="aspect-[9/16] overflow-hidden rounded-xl border border-orange-950 bg-white">
                <img
                  src={screenshot.image}
                  alt={`${project.title} ${screenshot.title}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </div>
              <p className="mt-2 truncate text-center text-[11px] text-zinc-500">
                {screenshot.title}
              </p>
            </div>
          ))}
        </div>
      )}

      {project.highlights && (
        <ul className="mt-5 grid gap-2 text-sm text-zinc-400 sm:grid-cols-2">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="text-orange-400" aria-hidden="true">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
          >
            {technology}
          </span>
        ))}
      </div>

      {projectUrl && (
      <div className="mt-8">
        <a
          href={projectUrl}
          className="inline-flex items-center gap-2 text-sm font-medium text-white transition-colors hover:text-orange-300"
        >
          {project.liveDemo && project.liveDemo !== "#"
            ? "View Demo"
            : "View Project"}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>
      </div>
      )}
    </article>
  );
}

export default ProjectCard;
