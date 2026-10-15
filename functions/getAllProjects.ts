"use server";

import type { Slug } from "sanity";

import { client } from "@/sanity/lib/client";
import { projectsQuery } from "@/sanity/lib/queries";

import type { ProjectData } from "@/lib/projects";

export default async function getAllProjects(): Promise<ProjectData[]> {
    const queryResult = await client.fetch(projectsQuery);

    const projects: ProjectData[] = queryResult.map(
        (project: {
            imageUrl: string;
            name: string;
            shortName: string;
            slug: Slug;
            shortDescription: string;
            codeLink: string;
            coverImageAlt: string;
        }) => ({
            name: project.name,
            shortName: project.shortName,
            slug: project.slug.current,
            shortDescription: project.shortDescription,
            codeLink: project.codeLink,
            coverImage: project.imageUrl,
            coverImageAlt: project.coverImageAlt,
        }),
    );

    return projects;
}
