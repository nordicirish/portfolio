"use client";
import { motion, MotionProps } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { SectionName } from "@/lib/types";

interface SectionWithRefProps extends MotionProps {
  id: SectionName;
  mobileThreshold?: number;
  desktopThreshold?: number;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  // Add any other props
  children: React.ReactNode;
}

const SectionWithRef: React.FC<SectionWithRefProps> = ({
  id,
  mobileThreshold,
  desktopThreshold,
  className,
  children,
  ...motionProps
}) => {
  const { ref } = useSectionInView(id, mobileThreshold, desktopThreshold);
  // Check if any motion props are passed
  const hasMotionProps = Object.keys(motionProps).length > 0;

  if (hasMotionProps) {
    return (
      <motion.section ref={ref} id={id} className={className} {...motionProps}>
        {children}
      </motion.section>
    );
  }

  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
};

export default SectionWithRef;
