import { notFound } from "next/navigation";

import getSkill from "@/functions/getSkill";

import SkillInfoCard from "@/components/elements/skillInfoCard";
import SkillExpChart from "@/components/elements/skillExpChart";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    if (!slug) {
        notFound();
    }

    const skillData = await getSkill(slug);
    if (!skillData) {
        notFound();
    }

    const experienceData = {
        total: skillData.experienceYearsTotal,
        professional: skillData.experienceYearsProfessional,
    };

    return (
        <div className="relative flex w-full flex-col items-center justify-start">
            <article className="flex w-[80%] flex-col items-start justify-start space-y-12 py-10">
                <div className="flex w-full flex-row items-start justify-start space-x-4">
                    <SkillInfoCard data={skillData} />
                    <SkillExpChart experienceData={experienceData} />
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
