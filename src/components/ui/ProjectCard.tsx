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
              <div className="aspect-[9/16] overflow-hidden rounded-xl border border-orange-950 bg-[#120c08] p-2">
                <div className="flex h-full flex-col rounded-lg border border-orange-950/70 bg-zinc-950 p-2">
                  <div className="flex items-center justify-between text-[8px] text-zinc-500">
                    <span>9:41</span>
                    <span>•••</span>
                  </div>
                  <p className="mt-3 text-[9px] font-semibold text-orange-400">
                    SetSales
                  </p>
                  <p className="mt-3 text-[10px] font-medium leading-tight text-zinc-100">
                    {screenshot.title}
                  </p>
                  <p className="mt-1 text-[8px] text-zinc-500">
                    {screenshot.detail}
                  </p>
                  <div className="mt-3 rounded-md bg-orange-950/50 p-2">
                    <div className="h-1 w-1/2 rounded bg-zinc-700" />
                    <div className="mt-2 h-2 w-3/4 rounded bg-orange-500/70" />
                  </div>
                  <div className="mt-2 space-y-1.5">
                    <div className="h-5 rounded border border-zinc-800 bg-zinc-900" />
                    <div className="h-5 rounded border border-zinc-800 bg-zinc-900" />
                    <div className="h-5 rounded border border-zinc-800 bg-zinc-900" />
                  </div>
                  <div className="mt-auto h-1 rounded-full bg-orange-900/60" />
                </div>
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
