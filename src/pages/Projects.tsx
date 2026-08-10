import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <Section>
      <SectionTitle
        eyebrow="Projects"
        title="Things I've built."
        description="A collection of applications, automations, experiments, and technical projects."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </Section>
  );
}

export default Projects;