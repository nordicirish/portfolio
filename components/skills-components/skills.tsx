import React from "react";
import SectionHeading from "../section-heading";
import SectionWithRef from "../section-with-ref";
import SkillsServerComponent from "./skills-server-component";

export default function Skills() {
  return (
    // id needs to match SectionName type and value in lib\types.ts
    // desktopThreshold value provided default value of 0.75
    // optionally provide mobileThreshold value
    <SectionWithRef
      id="Skills"
      className="mb-28 w-full max-w-[50rem] scroll-mt-28 text-center sm:mb-32 scroll-smooth"
      desktopThreshold={0.5}
    >
      <SectionHeading>My Skills</SectionHeading>
      <SkillsServerComponent />
    </SectionWithRef>
  );
}
