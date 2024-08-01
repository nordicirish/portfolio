"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import dynamic from "next/dynamic";
export default function Projects() {
  // lazy loads the project - ssr false to prevent server side rendering as it is a client side component
  const Project = dynamic(() => import("./project"), { ssr: false });
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 ">
      <SectionHeading>My Projects</SectionHeading>
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
