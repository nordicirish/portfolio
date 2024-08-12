"use server";
import { getSkills } from "@/actions/getSkills";
// import SkillsList from "@/components/skills-components/skills-list";
import dynamic from "next/dynamic";
const SkillsList = dynamic(() => import("@/components/skills-components/skills-list"), { ssr: false });

// Server side component that fetches skills data and passes it to the client component

export default async function SkillsServerComponent() {
  const skills = await getSkills(); // Fetch skills data

  return <SkillsList skills={skills} />; // Pass the fetched data to the client component
}
