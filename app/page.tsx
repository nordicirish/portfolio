import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import Intro from "@/components/intro";
// import Skills from "@/components/skills";
export default function Home() {
  const Projects = dynamic(() => import("@/components/projects"));
  const SectionDivider = dynamic(() => import("@/components/section-divider"));
  const About = dynamic(() => import("@/components/about-components/about"));
  const Experience = dynamic(() => import("@/components/experience"));
  const Contact = dynamic(() => import("@/components/contact"));
  const Skills = dynamic(() => import("@/components/skills-components/skills"));

  return (
    <main className="flex flex-col items-center px-4 w-full">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
