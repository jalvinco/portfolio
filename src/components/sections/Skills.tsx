import { skills } from "../../data/skills";

function Skills() {
  return (
    <section>
      <h2>What I Do</h2>

      <div>
        {skills.map((skill) => (
          <div key={skill.title}>
            <h3>
              {skill.icon} {skill.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;