import { skills } from "../../data/skills";

function Skills() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold">What I Do</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-950/50 p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
                {skill.icon} {skill.title}
              </p>

              <div className="mt-4 space-y-2 text-sm text-zinc-300">
                {skill.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;