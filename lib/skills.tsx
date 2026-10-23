type SkillData = {
    name: string;
    slug: string;
    techDescription: string;
    techLink?: string;
    experienceYearsTotal: number;
    experienceYearsProfessional: number;
    experienceLevel: "beginner" | "intermediate" | "advanced";
    experienceDescription?: string;
    icon?: React.ReactNode;
};

export { type SkillData };
