import { notFound } from "next/navigation";

import getSkill from "@/functions/getSkill";

import ButtonLinkAtom from "@/components/atoms/buttonLink";
import { LuExternalLink, LuCircuitBoard } from "react-icons/lu";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    if (!slug) {
        notFound();
    }

    console.log("Fetching skill for slug:", slug); // Debugging line to check the slug

    const skillData = await getSkill(slug);
    if (!skillData) {
        notFound();
    }

    return (
        <div className="relative flex w-full flex-col items-center justify-start">
            <article className="flex w-[80%] flex-col items-start justify-start space-y-12 py-10">
                <div
                    className={`flex w-1/2 flex-col items-center justify-start space-y-3 rounded-2xl border border-t-neutral-300/20 border-r-neutral-300/30 border-b-neutral-300/30 border-l-neutral-300/20 p-4 ${skillData.background}`}
                >
                    <div className="flex w-full flex-row items-center justify-start space-x-2">
                        <div className="flex h-20 w-20 items-center justify-center text-5xl text-white">
                            {skillData.icon || <LuCircuitBoard />}
                        </div>
                        <h1 className="text-4xl font-bold text-white">
                            {skillData.name}
                        </h1>
                    </div>
                    <p className="w-[90%] px-[5%] text-white">
                        {skillData.techDescription}
                    </p>
                    <div className="flex w-full flex-row items-center justify-end">
                        {skillData.techLink && (
                            <ButtonLinkAtom
                                href={skillData.techLink}
                                target="_blank"
                                className="z-30 flex flex-row items-center rounded-lg border border-t-neutral-400/30 border-r-neutral-500/30 border-b-neutral-500/30 border-l-neutral-400/30 bg-neutral-200/20 px-3 py-2 font-semibold text-white transition-all duration-300"
                            >
                                <span>Learn More</span>
                                <LuExternalLink className="ml-2 h-5 w-5 text-white" />
                            </ButtonLinkAtom>
                        )}
                    </div>
                </div>
                <div className="flex w-full flex-col items-start justify-start space-y-4">
                    <div className="flex w-full flex-row items-center justify-start border-b-2 border-neutral-700 px-4 pb-4">
                        <h2 className="text-3xl font-bold text-white">
                            My Experience
                        </h2>
                    </div>
                </div>
            </article>
        </div>
    );
}
