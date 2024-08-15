import React from "react";
import SectionWithRef from "./section-with-ref";
import ProfileImage from "./intro-components/profile-image";
import IntroText from "./intro-components/intro-text";
import IntroLinks from "./intro-components/intro-links";
// import dynamic from "next/dynamic";

export default function Intro() {
  // const ProfileImage = dynamic(() => import("@/components/intro-components/profile-image"));
  // id needs to match SectionName type and value in lib\types.ts
  // threshold ensures menu item only changes when section is 50% visible
  // ih threshold value provided default value of 0.75
  return (
    <SectionWithRef
      id="Home"
      threshold={0.5}
      className="mb-28 w-full max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <ProfileImage />
      <IntroText />
      <IntroLinks />
    </SectionWithRef>
  );
}
