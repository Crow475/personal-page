"use server";

import { projectQuery } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";

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
    };

    return projectData;
}
