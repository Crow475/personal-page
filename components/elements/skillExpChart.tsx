"use client";

export default function SkillExpChart({
    experienceData,
}: {
    experienceData: { total: number; professional: number };
}) {
    return (
        <div className="flex h-full w-1/4 flex-col items-start justify-center rounded-2xl border border-t-neutral-300/20 border-r-neutral-300/30 border-b-neutral-300/30 border-l-neutral-300/20 bg-neutral-800/20"></div>
    );
}
