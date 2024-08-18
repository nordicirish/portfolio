import React from "react";
import Badge from "@/components/about-components/badge";
import { BadgesProps } from "@/lib/types";
const Badges: React.FC<{ badges: BadgesProps[] }> = ({ badges }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      {badges.map((badge, index) => (
        <Badge key={index} {...badge} />
      ))}
    </div>
  );
};

export default Badges;
