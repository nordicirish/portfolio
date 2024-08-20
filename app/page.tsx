import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import Intro from "@/components/intro-components/intro";
import About from "@/components/about-components/about";

export default function Home() {
  // const SectionDivider = dynamic(() => import("@/components/section-divider"));
  const Projects = dynamic(() => import("@/components/projects"));
  const Experience = dynamic(() => import("@/components/experience"));
  const Contact = dynamic(() => import("@/components/contact"));
  const Skills = dynamic(() => import("@/components/skills-components/skills"));

  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      {/* <SectionDivider /> */}
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
