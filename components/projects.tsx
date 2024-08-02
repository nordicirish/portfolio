import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
import SectionWithRef from "./section-with-ref";
import Project from "./project";
export default function Projects() {
  return (
    <SectionWithRef
      id="Projects"
      threshold={0.5}
      className="scroll-mt-28 mb-28"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </SectionWithRef>
  );
}
