"use client";
import { useSectionInView } from "@/lib/hooks";
import { SectionName } from "@/lib/types";

interface SectionWithRefProps {
  id: SectionName;
  threshold?: number ;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  children: React.ReactNode;
}

const SectionWithRef: React.FC<SectionWithRefProps> = ({
  id,
  threshold,
  className,
  children,
}) => {
  const { ref } = useSectionInView(id, threshold);
  return (
    <section ref={ref} id={id} className={className}>
      {children}
    </section>
  );
};

export default SectionWithRef;
