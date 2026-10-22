import Section from "../ui/Section";
import ProjectCard from "../ui/ProjectCard";

import { projects } from "../../data/projects";

function FeaturedProject() {
  const project = projects.find(
    (project) => project.id === "setsales"
  );

  if (!project) {
    return null;
  }

  return (
    <Section>
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-400">
          Featured Project
        </p>
      </div>
      <ProjectCard project={project} />
    </Section>
  );
}

export default FeaturedProject;