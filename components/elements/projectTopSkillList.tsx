import { SkillData } from "@/lib/skills";

import ProjectSkillChip from "@/components/molecules/projectSkillChip";

export default function ProjectTopSkillList({
    skills,
    keyPrefix,
}: {
    skills: SkillData[];
    keyPrefix: string;
}) {
    if (!skills || skills.length === 0) {
        return null;
    }

    if (skills.length === 1) {
        return (
            <ProjectSkillChip
                skill={skills[0]}
                key={`${keyPrefix}-${skills[0].slug}`}
            />
        );
    }

    return (
        <>
            {skills.slice(0, 3).map((skill) => (
                <ProjectSkillChip
                    skill={skill}
                    key={`${keyPrefix}-${skill.slug}`}
                />
            ))}
            {skills.length > 3 && (
                <span className="rounded-2xl bg-neutral-700/50 px-3 py-0.5 text-sm font-bold text-white">
                    +{skills.length - 3}
                </span>
            )}
        </>
    );
}
