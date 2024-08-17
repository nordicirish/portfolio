import { useActiveSectionContext } from "@/context/active-section";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./types";

// add default threshold value of 0.75 for desktop and 0.4 for mobile if no threshold is provided
export function useSectionInView(
  sectionName: SectionName,
  mobileThreshold: number = 0.4,
  desktopThreshold: number = 0.75
) {
  const isMobile = useIsMobile();

  const threshold = isMobile ? mobileThreshold : desktopThreshold;
  // useInView hook to make the active menu item change when scrolling
  const { ref, inView } = useInView(
    // threshold ensures menu item only changes when section is 75% visible
    { threshold: threshold }
  );
  // console.log("inView", inView);
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return { ref };
}


// detects the size of the window for mobile devices

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};