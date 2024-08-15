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
      className="scroll-mt-28 mb-28 sm:mb-32 w-full max-w-[50rem]"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="flex justify-center">
        <div className="flex flex-col">
          {projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </SectionWithRef>
  );
}
