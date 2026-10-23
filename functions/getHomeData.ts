"use server";

import type { Slug } from "sanity";

import { client } from "@/sanity/lib/client";
import { homePageContentQuery } from "@/sanity/lib/queries";

import type { ProjectData } from "@/lib/projects";

type HomePageContent = {
    heroParagraph?: string;
    projectsLinkText?: string;
    contactLinkText?: string;
    projectSectionTitle?: string;
    featuredProjects: ProjectData[];
    aboutSectionTitle?: string;
    contactSectionTitle?: string;
};

export default async function getHomeData(): Promise<HomePageContent> {
    const queryResult = await client.fetch(homePageContentQuery);

    const projects: ProjectData[] = queryResult.featuredProjects.map(
        (project: {
            imageUrl: string;
            name: string;
            shortName: string;
            slug: Slug;
            shortDescription: string;
            codeLink: string;
            coverImageAlt: string;
            skills: {
                name: string;
                slug: Slug;
                techDescription: string;
                techLink?: string;
                experienceYearsTotal: number;
                experienceYearsProfessional: number;
                experienceLevel: "beginner" | "intermediate" | "advanced";
                experienceDescription?: string;
            }[];
        }) => ({
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
                          experienceLevel:
                              "beginner" | "intermediate" | "advanced";
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
        }),
    );

    // Destructure the query result to separate featuredProjects from the rest of the data
    // featuredProjects is intentionally unused
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { featuredProjects, ...rest } = queryResult;

    return { featuredProjects: projects, ...rest };
}
