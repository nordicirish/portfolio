import { links } from "@/lib/data";

import { IconName } from "@/lib/utils"




export type SectionName = (typeof links)[number]["name"];

export interface Skill {
  skill: string;
  icon: IconName; // Use IconName type toe extract the keys for typing purposes
}
export interface BadgeProps {
  src: string;
  alt: string;
  href: string;
}

export interface BadgesProps {
  badges: BadgeProps[];
}
