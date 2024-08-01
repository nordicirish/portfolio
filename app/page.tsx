// import About from "@/components/about";
// import Experience from "@/components/experience";
import Intro from "@/components/intro";
// import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
// import Skills from "@/components/skills";
// import Contact from "@/components/contact";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

export default function Home() {
  const Projects = dynamic(() => import("@/components/projects"), {
    ssr: false,
  });
  //  const Intro = dynamic(() => import("@/components/intro"), { ssr: false });
   const SectionDivider = dynamic(() => import("@/components/section-divider"));
  const About = dynamic(() => import("@/components/about"));
  const Skills = dynamic(() => import("@/components/skills"));
  const Experience = dynamic(() => import("@/components/experience"))
  const Contact = dynamic(() => import("@/components/contact"))

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
