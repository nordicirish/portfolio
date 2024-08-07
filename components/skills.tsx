import React from "react";
import SectionHeading from "./section-heading";
import SectionWithRef from "./section-with-ref";
import SkillsServerComponent from "./skills-components/skills-server-component";

export default function Skills() {
  return (
    // id needs to match SectionName type and value in lib\types.ts
    // threshold ensures menu item only changes when section is 50% visible
    // ih threshold value provided default value of 0.75
    <SectionWithRef
      id="Skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      threshold={0.25}
    >
      <SectionHeading>My Skills</SectionHeading>
      <SkillsServerComponent />
    </SectionWithRef>
  );
}
