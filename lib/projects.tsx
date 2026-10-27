import { type SkillData } from "@/lib/skills";

type ProjectData = {
    name: string;
    shortName: string;
    slug: string;
    shortDescription: string;
    coverImage?: string;
    coverImageAlt?: string;
    skills: SkillData[];
    tldr: {
        type: "description" | "text" | "disabled";
        text?: string;
    };
    links: {
        code?: string;
        project?: string;
        license?: string;
    };
};

export { type ProjectData };
