import { notFound } from "next/navigation";

import getProject from "@/functions/getProject";

import ProjectAllSkillList from "@/components/elements/projectAllSkillList";
import ProjectCoverImage from "@/components/elements/projectCoverImage";
import ProjectLink from "@/components/molecules/projectLink";
import ProjectTldr from "@/components/elements/projectTldr";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    if (!slug) {
        notFound();
    }

    const projectData = await getProject(slug);
    if (!projectData) {
        notFound();
    }

    const tldr: string | null =
        projectData.tldr.type === "disabled"
            ? null
            : projectData.tldr.type === "description"
              ? projectData.shortDescription
              : projectData.tldr.type === "text" && projectData.tldr.text
                ? projectData.tldr.text
                : null;

    return (
        <div className="relative flex w-full flex-col items-center justify-start">
            <div
                className="absolute top-0 left-0 -z-10 h-60 w-full bg-linear-to-br from-violet-600 to-emerald-400"
                role="presentation"
            >
                <div className="absolute top-0 left-0 -z-20 h-full w-full bg-linear-to-t from-black to-transparent"></div>
            </div>
            <article className="flex w-[80%] flex-col items-start justify-start space-y-12 py-10">
                <ProjectCoverImage
                    src={projectData.coverImage || ""}
                    alt={projectData.coverImageAlt || projectData.name}
                />
                <div className="flex w-full flex-col items-start justify-start">
                    <div className="flex flex-row items-center justify-start px-6 py-2">
                        <span className="text-sm font-bold tracking-widest text-neutral-400 uppercase">
                            Project
                        </span>
                    </div>
                    <div className="flex w-full flex-col items-start justify-start border-b-2 border-neutral-700 px-4 pb-6">
                        <h1 className="text-5xl font-bold text-white">
                            {projectData.name}
                        </h1>
                    </div>
                    <ProjectAllSkillList
                        skills={projectData.skills}
                        keyPrefix={`project-${projectData.slug}`}
                    />
                    {tldr && <ProjectTldr text={tldr} />}
                    <div className="flex w-3/4 flex-col items-start justify-start space-y-4 px-4 py-6">
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit. Quisque faucibus ex sapien vitae pellentesque
                            sem placerat. In id cursus mi pretium tellus duis
                            convallis. Tempus leo eu aenean sed diam urna
                            tempor. Pulvinar vivamus fringilla lacus nec metus
                            bibendum egestas. Iaculis massa nisl malesuada
                            lacinia integer nunc posuere. Ut hendrerit semper
                            vel class aptent taciti sociosqu. Ad litora torquent
                            per conubia nostra inceptos himenaeos.
                        </p>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit. Quisque faucibus ex sapien vitae pellentesque
                            sem placerat. In id cursus mi pretium tellus duis
                            convallis. Tempus leo eu aenean sed diam urna
                            tempor. Pulvinar vivamus fringilla lacus nec metus
                            bibendum egestas. Iaculis massa nisl malesuada
                            lacinia integer nunc posuere. Ut hendrerit semper
                            vel class aptent taciti sociosqu. Ad litora torquent
                            per conubia nostra inceptos himenaeos.
                        </p>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit. Quisque faucibus ex sapien vitae pellentesque
                            sem placerat. In id cursus mi pretium tellus duis
                            convallis. Tempus leo eu aenean sed diam urna
                            tempor. Pulvinar vivamus fringilla lacus nec metus
                            bibendum egestas. Iaculis massa nisl malesuada
                            lacinia integer nunc posuere. Ut hendrerit semper
                            vel class aptent taciti sociosqu. Ad litora torquent
                            per conubia nostra inceptos himenaeos.
                        </p>
                        <p className="text-white">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit. Quisque faucibus ex sapien vitae pellentesque
                            sem placerat. In id cursus mi pretium tellus duis
                            convallis. Tempus leo eu aenean sed diam urna
                            tempor. Pulvinar vivamus fringilla lacus nec metus
                            bibendum egestas. Iaculis massa nisl malesuada
                            lacinia integer nunc posuere. Ut hendrerit semper
                            vel class aptent taciti sociosqu. Ad litora torquent
                            per conubia nostra inceptos himenaeos.
                        </p>
                    </div>
                    <footer className="relative flex w-full flex-row items-center justify-start space-x-4 border-t-2 border-neutral-700 py-3">
                        {projectData.links.code && (
                            <ProjectLink
                                variant="code"
                                href={projectData.links.code}
                            />
                        )}
                        {projectData.links.project && (
                            <ProjectLink
                                variant="project"
                                href={projectData.links.project}
                            />
                        )}
                        {projectData.links.license && (
                            <ProjectLink
                                variant="license"
                                href={projectData.links.license}
                            />
                        )}
                    </footer>
                </div>
            </article>
        </div>
    );
}
