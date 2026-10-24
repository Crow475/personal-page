import { notFound } from "next/navigation";

import getProject from "@/functions/getProject";

import { LuAsterisk, LuExternalLink } from "react-icons/lu";

import ProjectAllSkillList from "@/components/elements/projectAllSkillList";
import ProjectCoverImage from "@/components/elements/projectCoverImage";

import ButtonLinkAtom from "@/components/atoms/buttonLink";

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
                    <section className="mx-10 my-6 flex w-1/2 flex-col items-start justify-start rounded-2xl border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-linear-to-br from-blue-900/50 to-slate-800/50 p-4">
                        <div className="flex flex-row items-center justify-start">
                            <LuAsterisk className="h-8 w-8 text-slate-300" />
                            <h2 className="text-3xl font-black tracking-wider text-white">
                                TLDR
                            </h2>
                        </div>
                        <div className="flex w-full flex-col items-center justify-start py-4">
                            <div className="flex w-11/12 flex-col items-center justify-start border-l-2 border-slate-300 px-4 py-2">
                                <p className="text-white">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipiscing elit. Quisque faucibus ex sapien
                                    vitae pellentesque sem placerat. In id
                                    cursus mi pretium tellus duis convallis.
                                    Tempus leo eu aenean sed diam urna tempor.
                                    Pulvinar vivamus fringilla lacus nec metus
                                    bibendum egestas. Iaculis massa nisl
                                    malesuada lacinia integer nunc posuere. Ut
                                    hendrerit semper vel class aptent taciti
                                    sociosqu. Ad litora torquent per conubia
                                    nostra inceptos himenaeos.
                                </p>
                            </div>
                        </div>
                    </section>
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
                        <ButtonLinkAtom
                            href={projectData.codeLink || ""}
                            target="_blank"
                            className="z-30 flex flex-row items-center rounded-lg border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-neutral-800/50 p-2 text-white transition-all duration-300"
                        >
                            <span className="font-bold text-white">Code</span>
                            <LuExternalLink className="ml-2 h-5 w-5 text-white" />
                        </ButtonLinkAtom>
                        <ButtonLinkAtom
                            href={projectData.codeLink || ""}
                            target="_blank"
                            className="z-30 flex flex-row items-center rounded-lg border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-neutral-800/50 p-2 text-white transition-all duration-300"
                        >
                            <span className="font-bold text-white">
                                Project
                            </span>
                            <LuExternalLink className="ml-2 h-5 w-5 text-white" />
                        </ButtonLinkAtom>
                        <ButtonLinkAtom
                            href={projectData.codeLink || ""}
                            target="_blank"
                            className="z-30 flex flex-row items-center rounded-lg border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-neutral-800/50 p-2 text-white transition-all duration-300"
                        >
                            <span className="font-bold text-white">
                                License
                            </span>
                            <LuExternalLink className="ml-2 h-5 w-5 text-white" />
                        </ButtonLinkAtom>
                    </footer>
                </div>
            </article>
        </div>
    );
}
