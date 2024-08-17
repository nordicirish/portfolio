"use client";
import { MotionProps } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { SectionName } from "@/lib/types";
import dynamic from "next/dynamic";
const MotionSection = dynamic(() =>
  import("framer-motion").then((mod) => mod.motion.section)
);

interface SectionWithRefProps extends MotionProps {
  id: SectionName;
  threshold?: number;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  // Add any other props
  children: React.ReactNode;
}

const SectionWithRef: React.FC<SectionWithRefProps> = ({
  id,
  threshold,
  className,
  children,
  ...motionProps
}) => {
  const { ref } = useSectionInView(id, threshold);
  // Check if any motion props are passed
  const hasMotionProps = Object.keys(motionProps).length > 0;

  if (hasMotionProps) {
    return (
      <MotionSection ref={ref} id={id} className={className} {...motionProps}>
        {children}
      </MotionSection>
    );
  }

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
};

export default SectionWithRef;
