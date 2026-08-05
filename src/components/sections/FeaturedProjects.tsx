import { projects } from "../../data/projects";

function FeaturedProjects() {
  return (
    <section>
      <h2>Featured Projects</h2>

      {projects.map((project) => (
        <article key={project.id}>
          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <p>{project.technologies.join(" • ")}</p>
        </article>
      ))}
    </section>
  );
}

export default FeaturedProjects;