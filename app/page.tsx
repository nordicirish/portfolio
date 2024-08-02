import Footer from "@/components/footer";
import dynamic from "next/dynamic";
import Intro from "@/components/intro";
export default function Home() {
  const Projects = dynamic(() => import("@/components/projects"));
  const SectionDivider = dynamic(() => import("@/components/section-divider"));
  const About = dynamic(() => import("@/components/about"));
  const Skills = dynamic(() => import("@/components/skills"));
  const Experience = dynamic(() => import("@/components/experience"));
  const Contact = dynamic(() => import("@/components/contact"));

  return (
    <main className="flex flex-col items-center px-4">
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
