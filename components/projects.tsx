"use client";
import React, { useEffect } from "react";
import Project from "./project";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section";

export default function Projects() {
  // useInView hook to make the active menu item change when scrolling
  const { ref, inView } = useInView(
    // threshold ensures menu item only changes when section is 25% visible
    { threshold: 0.3 }
  );
  console.log("inView", inView);
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection("Projects");
    }
  }, [inView, setActiveSection]);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>Projects</SectionHeading>
      <div className="scroll-mt-28 mb-28 ">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
