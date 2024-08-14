import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
import SectionWithRef from "./section-with-ref";
import Project from "./project";
export default function Projects() {
  return (
    // id needs to match SectionName type and value in lib\types.ts
    // threshold ensures menu item only changes when section is 50% visible
    // ih threshold value provided default value of 0.75
    <SectionWithRef
      id="Projects"
      threshold={0.75}
      className="scroll-mt-28 mb-28 sm:mb-32 max-w-[53rem]"
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
