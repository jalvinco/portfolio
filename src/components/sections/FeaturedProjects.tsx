import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";

import { projects } from "../../data/projects";

function FeaturedProject() {
  const featuredProjects = projects.filter(
    (project) => project.id === "setsales" || project.id === "doomsday-tva-case"
  );

  if (featuredProjects.length === 0) {
    return null;
  }

  return (
    <Section>
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
          Featured Projects
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

export default FeaturedProject;