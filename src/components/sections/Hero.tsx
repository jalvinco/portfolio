import { Link } from "react-router-dom";
import Section from "../ui/Section";
import { profile } from "../../data/profile";
import { motion } from "framer-motion";

function Hero() {
  return (
    
    <Section className="min-h-[calc(100vh-80px)] flex items-center">

        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {
    <div className="max-w-3xl">
        <div className="mb-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          Site is under development. Check back soon for updates!
        </div>
        <p className="mb-2 text-blue-500 font-medium">{profile.greeting}</p>

        <h1 className="mt-4 text-6xl font-black leading-tight md:text-7xl">
        {profile.name}
        </h1>

        <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-semibold">{profile.headline}</h2>

          <div className="space-y-1 text-xl text-zinc-400">
            {profile.roles.map((role) => (
              <p key={role}>{role}</p>
            ))}
          </div>
        </div>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          {profile.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/projects"
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
          >
            View Projects
          </Link>

          <Link
            to="/contact"
            className="rounded-xl border border-zinc-700 px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-900"
          >
            Contact Me
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-400">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
  }
</motion.div>
      
    </Section>
  );
}

export default Hero;
