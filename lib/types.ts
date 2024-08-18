import { links } from "@/lib/data";
import { badges } from "@/lib/data";

import { IconName } from "@/lib/utils";

export type SectionName = (typeof links)[number]["name"];

export interface Skill {
  skill: string;
  icon: IconName; // Use IconName type to extract the keys for typing purposes
}

export interface BadgesProps {
  href: string;
  src: string;
  alt: string;
}
