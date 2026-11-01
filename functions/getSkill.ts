"use server";

import { skillQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

import type { SkillData } from "@/lib/skills";
import { slugToIcon, slugToBackground } from "@/lib/skills";

export default async function getSkill(
    slug: string,
): Promise<SkillData | null> {
    const skill = await client.fetch(skillQuery, { slug });

    if (!skill) {
        return null;
    }

    const skillData: SkillData = {
        name: skill.name,
        slug: skill.slug.current,
        techDescription: skill.techDescription,
        techLink: skill.techLink,
        experienceYearsTotal: skill.experienceYearsTotal,
        experienceYearsProfessional: skill.experienceYearsProfessional,
        experienceLevel: skill.experienceLevel,
        experienceDescription: skill.experienceDescription,
        icon: slugToIcon[skill.slug.current] || null,
        background: slugToBackground[skill.slug.current] || "",
    };

    return skillData;
}
