import { type SkillData } from "@/lib/skills";

type ProjectData = {
    name: string;
    shortName: string;
    slug: string;
    shortDescription: string;
    codeLink?: string;
    coverImage?: string;
    coverImageAlt?: string;
    skills: SkillData[];
};

export { type ProjectData };
