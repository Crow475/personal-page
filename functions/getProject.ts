"use server";

import { projectQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import type { Slug } from "sanity";

import type { ProjectData } from "@/lib/projects";

export default async function getProject(
    slug: string,
): Promise<ProjectData | null> {
    const project = await client.fetch(projectQuery, { slug });

    if (!project) {
        return null;
    }

    const projectData: ProjectData = {
        name: project.name,
        shortName: project.shortName,
        slug: project.slug.current,
        shortDescription: project.shortDescription,
        codeLink: project.codeLink,
        coverImage: project.imageUrl,
        coverImageAlt: project.coverImageAlt,
        skills: project.skills
            ? project.skills.map(
                  (skill: {
                      name: string;
                      slug: Slug;
                      techDescription: string;
                      techLink?: string;
                      experienceYearsTotal: number;
                      experienceYearsProfessional: number;
                      experienceLevel: "beginner" | "intermediate" | "advanced";
                      experienceDescription?: string;
                  }) => ({
                      name: skill.name,
                      slug: skill.slug.current,
                      techDescription: skill.techDescription,
                      techLink: skill.techLink,
                      experienceYearsTotal: skill.experienceYearsTotal,
                      experienceYearsProfessional:
                          skill.experienceYearsProfessional,
                      experienceLevel: skill.experienceLevel,
                      experienceDescription: skill.experienceDescription,
                  }),
              )
            : [],
    };

    return projectData;
}
