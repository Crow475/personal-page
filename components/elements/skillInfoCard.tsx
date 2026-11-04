import type { SkillData } from "@/lib/skills";

import { LuExternalLink, LuCircuitBoard } from "react-icons/lu";

import ButtonLinkAtom from "@/components/atoms/buttonLink";

export default function SkillInfoCard({ data }: { data: SkillData }) {
    return (
        <div
            className={`flex w-1/2 flex-col items-center justify-start space-y-3 rounded-2xl border border-t-neutral-300/20 border-r-neutral-300/30 border-b-neutral-300/30 border-l-neutral-300/20 p-4 ${data.background}`}
        >
            <div className="flex w-full flex-row items-center justify-start space-x-2">
                <div className="flex h-20 w-20 items-center justify-center text-5xl text-white">
                    {data.icon || <LuCircuitBoard />}
                </div>
                <h1 className="text-4xl font-bold text-white">{data.name}</h1>
            </div>
            <p className="w-[90%] px-[5%] text-white">{data.techDescription}</p>
            <div className="flex w-full flex-row items-center justify-end">
                {data.techLink && (
                    <ButtonLinkAtom
                        href={data.techLink}
                        target="_blank"
                        className="z-30 flex flex-row items-center rounded-lg border border-t-neutral-400/30 border-r-neutral-500/30 border-b-neutral-500/30 border-l-neutral-400/30 bg-neutral-200/20 px-3 py-2 font-semibold text-white transition-all duration-300"
                    >
                        <span>Learn More</span>
                        <LuExternalLink className="ml-2 h-5 w-5 text-white" />
                    </ButtonLinkAtom>
                )}
            </div>
        </div>
    );
}
