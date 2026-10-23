import LinkAtom from "@/components/atoms/link";

import type { SkillData } from "@/lib/skills";

export default function ProjectSkillChip({ skill }: { skill: SkillData }) {
    return (
        <LinkAtom
            className="rounded-2xl bg-neutral-700/50 px-3 py-0.5 text-sm font-bold text-white hover:bg-neutral-600/50"
            href={`/about/skills/${skill.slug}`}
        >
            <span className="line-clamp-1">{skill.name}</span>
        </LinkAtom>
    );
}
