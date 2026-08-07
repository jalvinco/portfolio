import { Link } from "react-router-dom";
import { profile } from "../../data/profile";

function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6">
      <div className="max-w-3xl">
        <p className="mb-2 text-blue-500 font-medium">{profile.greeting}</p>

        <h1 className="text-6xl font-bold tracking-tight">{profile.name}</h1>

        <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-semibold">{profile.title}</h2>

          {profile.subtitle.map((item) => (
            <p key={item} className="text-xl text-zinc-400">
              {item}
            </p>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          {profile.description}
        </p>

        <div className="mt-10 flex gap-4">
          <div className="mt-10 flex gap-4">
            <Link
              to="/projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="rounded-lg border border-zinc-700 px-6 py-3 font-medium transition hover:bg-zinc-900"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
