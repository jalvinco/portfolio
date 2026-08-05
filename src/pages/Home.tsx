import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import PhotographyPreview from "../components/sections/PhotographyPreview";
import LatestLabPosts from "../components/sections/LatestLabPosts";
import ContactCTA from "../components/sections/ContactCTA";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <PhotographyPreview />
      <LatestLabPosts />
      <ContactCTA />
    </>
  );
}

export default Home;