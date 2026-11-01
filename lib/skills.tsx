import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiHtml5,
    SiCss,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

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
    background?: string;
};

const slugToIcon: Record<string, React.ReactNode> = {
    javascript: <SiJavascript />,
    typescript: <SiTypescript />,
    react: <SiReact />,
    "next-js": <SiNextdotjs />,
    tailwindcss: <SiTailwindcss />,
    html: <SiHtml5 />,
    css: <SiCss />,
    postgresql: <BiLogoPostgresql />,
};

const slugToBackground: Record<string, string> = {
    javascript: "",
    typescript: "bg-linear-to-br from-sky-400 to-blue-800",
    react: "bg-linear-to-br from-teal-500 to-cyan-600",
    "next-js": "bg-linear-to-br from-slate-900 to-gray-950",
    tailwindcss: "",
    html: "",
    css: "",
    postgresql: "bg-linear-to-br from-blue-800 to-olive-500",
};

export { type SkillData, slugToIcon, slugToBackground };
