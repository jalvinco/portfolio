import { skills } from "../../data/skills";

function Technologies() {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold">Technologies</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-3xl border border-orange-950/80 bg-[#21150f] p-6 transition-colors hover:border-orange-800/70"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
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

export default Technologies;