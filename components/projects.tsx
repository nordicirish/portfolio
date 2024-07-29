import React from "react";
import Project from "./project";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";


export default function Projects() {
  return (
    <section className="relative">
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
