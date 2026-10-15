"use server";

import type { Slug } from "sanity";

import { client } from "@/sanity/lib/client";
import { homePageContentQuery } from "@/sanity/lib/queries";

import type { ProjectData } from "@/lib/projects";

type HomePageContent = {
    featuredProjects: ProjectData[];
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

    return { featuredProjects: projects };
}
