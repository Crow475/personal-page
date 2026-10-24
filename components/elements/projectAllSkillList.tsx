import { SkillData } from "@/lib/skills";

import ProjectSkillChip from "@/components/molecules/projectSkillChip";

export default function ProjectAllSkillList({
    skills,
    keyPrefix,
}: {
    skills: SkillData[];
    keyPrefix: string;
}) {
    if (!skills || skills.length === 0) {
        return null;
    }

    return (
        <div className="flex flex-row items-center justify-start space-x-2 overflow-x-auto px-4 py-2">
            {skills.map((skill) => (
                <ProjectSkillChip
                    skill={skill}
                    key={`${keyPrefix}-${skill.slug}`}
                />
            ))}
        </div>
    );
}
