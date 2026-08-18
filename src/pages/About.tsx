import cvFile from "../assets/Jay-Alvin-CV.pdf";

const experience = [
  {
    role: "Software Engineer",
    period: "July 2017 – Present",
    company: "RealPage Philippines, Inc.",
    bullets: [
      "Led UI migration of the Eviction Management module from a legacy system to Angular, including document review, email workflows, and 3rd-party API integration.",
      "Delivered Rent Stabilization Renewal features covering single and bulk renewal-offer selection for exempt and non-exempt units.",
      "Built Prospects module features (leasing-consultant reassignment, inactive-prospect management) and Appointments/Follow-up scheduling with dynamic in-app notifications.",
      "Built the Internal Compliance Review feature: filterable grid, review actions, and CSV/PDF export, plus its dashboard navigation entry point.",
      "Drove platform-wide migration from feature-flag-based to activity/permission-based access control.",
      "Resolved production defects (form validation, navigation, accessibility) across property-management workflows, working through structured PR and UI-architect review cycles.",
    ],
  },
  {
    role: "Software Developer",
    period: "June 2014 – May 2017",
    company: "Klab Cyscorpions",
    bullets: [
      "Developed and maintained mobile game applications, contributing to both client-side and server-side components throughout the development lifecycle.",
      "Implemented bug fixes, performance improvements, and new game features to support regular content updates and enhance player experience.",
      "Participated in full-cycle game development, from requirements gathering and technical planning to production deployment and post-release support.",
    ],
  },
  {
    role: "Software Developer",
    period: "January 2013 – June 2014",
    company: "Gulliver Integrated Outsourcing",
    bullets: [
      "Provided technical support and development assistance for clientele platforms, ensuring system functionality and user satisfaction.",
      "Participated in the design, research, and development of mobile application solutions, contributing to feature planning and technology evaluation.",
      "Collaborated with cross-functional teams to analyze requirements, troubleshoot issues, and implement software enhancements.",
    ],
  },
];

const skills = [
  "Agile and Scrum methodology",
  "Angular architecture",
  "Legacy migration",
  "REST API integration",
  "3rd-party integrations",
  "Data grids and exports",
  "Form validation and accessibility",
  "Code review and UI architecture review",
  "N8N, AI tools, Claude",
];

function About() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <header className="mb-12 flex flex-col gap-6 border-b border-zinc-800 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-blue-500">
            About me
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Software engineer with a product mindset.
          </h1>
        </div>

        <a
          href={cvFile}
          download
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
        >
          Download CV
        </a>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1.7fr_0.9fr]">
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white">Work experience</h2>
          </div>

          <div className="space-y-8">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6"
              >
                <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm text-blue-400">{item.company}</p>
                  </div>
                  <p className="text-sm text-zinc-400">{item.period}</p>
                </div>

                <ul className="space-y-3 text-zinc-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <aside className="space-y-8">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-xl font-semibold text-white">Key skills</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-sm text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h3 className="text-xl font-semibold text-white">Education</h3>
            <div className="mt-4 space-y-2 text-zinc-300">
              <p className="text-lg font-medium text-white">
                Bachelor of Science in Software Engineering
              </p>
              <p>University of Santo Tomas</p>
              <p className="text-sm text-zinc-400">2013</p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default About;