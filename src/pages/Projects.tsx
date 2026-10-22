import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <Section className="my-8 rounded-3xl border border-orange-900/50 bg-gradient-to-br from-orange-950/70 via-[#1c120d] to-[#0c0806]">
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