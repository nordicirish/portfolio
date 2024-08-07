"use server";
import { skillsData } from "@/lib/data";
import { Skill } from "@/lib/types";
// server side action to fetch skills data and enable server side rendering and caching
export async function getSkills(): Promise<Skill[]> {
  // Return a mutable copy of the readonly array
  return [...skillsData];
}
