import Image from "next/image";

import LinkAtom from "@/components/atoms/link";
import ButtonLinkAtom from "@/components/atoms/buttonLink";

import type { ProjectData } from "@/lib/projects";

export default function ProjectCard({ data }: { data: ProjectData }) {
    return (
        <section
            className="group flex h-120 w-[24%] flex-col items-start justify-start rounded-xl border border-neutral-500/50"
            aria-labelledby={`project-card-${data.slug}-header`}
        >
            <div className="flex h-[55%] w-full rounded-t-xl transition-all duration-200 group-hover:h-[35%]">
                {data.coverImage && (
                    <Image
                        src={`${data.coverImage}?auto=format`}
                        width={400}
                        height={40}
                        alt={data.coverImageAlt || data.name}
                        className="h-full w-full rounded-t-xl object-cover"
                    />
                )}
            </div>
            <div className="relative flex h-[45%] w-full flex-col items-start justify-between overflow-hidden rounded-b-xl bg-transparent from-slate-700/30 to-transparent px-4 pt-3 pb-4 transition-all duration-200 group-hover:h-[65%] group-hover:bg-radial-[at_50%_5%]">
                <div className="absolute top-0 left-0 h-full w-full bg-transparent backdrop-blur-none group-hover:backdrop-blur-md" />
                <div className="z-10 flex w-full flex-row items-center justify-start border-b border-neutral-500/50 pb-1">
                    <h3
                        className="line-clamp-2 text-2xl font-bold text-white"
                        id={`project-card-${data.slug}-header`}
                    >
                        {data.shortName}
                    </h3>
                </div>
                <div className="z-10 flex w-full grow flex-col items-center justify-start py-4">
                    <div className="flex w-full flex-row flex-wrap items-center justify-start space-x-1">
                        <span className="rounded-2xl bg-neutral-700/50 px-3 py-0.5 text-sm font-bold text-white">
                            React
                        </span>
                        <span className="rounded-2xl bg-neutral-700/50 px-3 py-0.5 text-sm font-bold text-white">
                            Next.js
                        </span>
                        <span className="rounded-2xl bg-neutral-700/50 px-3 py-0.5 text-sm font-bold text-white">
                            TypeScript
                        </span>
                        <span className="rounded-2xl bg-neutral-700/50 px-3 py-0.5 text-sm font-bold text-white">
                            ...
                        </span>
                    </div>
                    <p className="line-clamp-3 h-18 pt-2 text-sm text-neutral-400 transition-all duration-200 group-hover:line-clamp-none group-hover:h-30">
                        {data.shortDescription}
                    </p>
                </div>
                <div className="flex w-full flex-row items-center justify-end space-x-4">
                    {data.codeLink && (
                        <LinkAtom
                            href={data.codeLink}
                            target="_blank"
                            className="group/link flex flex-row"
                            title="View the project's source code"
                        >
                            <span className="scale-0 font-bold text-white group-hover:scale-100 group-hover/link:underline">
                                Code
                            </span>
                        </LinkAtom>
                    )}
                    <ButtonLinkAtom
                        href={`/projects/${data.slug}`}
                        className="z-40 flex scale-0 items-center justify-between space-x-2 rounded-lg border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-neutral-800/50 px-3 py-1 transition-all duration-200 group-hover:scale-100 hover:bg-neutral-600/50"
                    >
                        <span className="text-base font-bold text-white">
                            Learn more
                        </span>
                    </ButtonLinkAtom>
                </div>
            </div>
        </section>
    );
}
