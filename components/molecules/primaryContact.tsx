"use client";

import { LuCopy } from "react-icons/lu";

import toast from "react-hot-toast";

import LinkAtom from "@/components/atoms/link";
import ButtonAtom from "@/components/atoms/button";
import { SocialType, typeToText } from "@/lib/socials";

import { geistMono } from "@/lib/fonts";

type VariantSpec = {
    iconBackground: string;
    iconBakgroundHover: string;
    borderColor: string;
};

const variants: Partial<Record<SocialType, VariantSpec>> = {
    EMAIL: {
        iconBackground:
            "bg-radial-[at_50%_75%] from-orange-400/20 to-orange-300/10",
        iconBakgroundHover:
            "group-hover:bg-radial-[at_50%_75%] group-hover:from-orange-400/50 group-hover:to-orange-300/30",
        borderColor: "border-orange-400",
    },
    TELEGRAM: {
        iconBackground:
            "bg-radial-[at_50%_75%] from-blue-400/20 to-blue-300/10",
        iconBakgroundHover:
            "group-hover:bg-radial-[at_50%_75%] group-hover:from-blue-400/50 group-hover:to-blue-300/30",
        borderColor: "border-blue-400",
    },
    GITHUB: {
        iconBackground:
            "bg-radial-[at_50%_75%] from-neutral-400/20 to-neutral-300/10",
        iconBakgroundHover:
            "group-hover:bg-radial-[at_50%_75%] group-hover:from-neutral-400/50 group-hover:to-neutral-300/30",
        borderColor: "border-neutral-400",
    },
    LINKEDIN: {
        iconBackground:
            "bg-radial-[at_50%_75%] from-blue-700/20 to-blue-600/10",
        iconBakgroundHover:
            "group-hover:bg-radial-[at_50%_75%] group-hover:from-blue-700/50 group-hover:to-blue-600/30",
        borderColor: "border-blue-700",
    },
};

export default function PrimaryContact({
    variant,
    title,
    description,
    copyDescription,
    copyContent,
    href,
    icon,
}: {
    variant: keyof typeof SocialType;
    title: string;
    description: string;
    copyDescription: string;
    copyContent: string;
    href: string;
    icon: React.ReactNode;
}) {
    return (
        <section className="group flex flex-row items-start justify-start space-x-2">
            <div
                className={`flex flex-col items-center justify-center rounded-full border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 p-2 transition-all duration-300 ${variants[variant]?.iconBackground} ${variants[variant]?.iconBakgroundHover}`}
            >
                {icon}
            </div>
            <div className="flex flex-col items-start justify-start space-y-4 px-3 py-1">
                <h3 className="text-3xl font-bold text-white">
                    {typeToText[variant]}
                </h3>
                <div className="flex flex-row items-center justify-start space-x-2">
                    <LinkAtom
                        href={href}
                        className="flex flex-row items-center justify-start rounded-lg border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-neutral-700/40 px-4 py-1 text-neutral-500 transition-all duration-100 hover:text-white hover:underline"
                    >
                        <span className={`text-lg ${geistMono.className}`}>
                            {title}
                        </span>
                    </LinkAtom>
                    <ButtonAtom
                        className="z-30 rounded-lg border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-neutral-800/50 p-2.5 text-white transition-colors duration-300 hover:bg-neutral-600/50"
                        title={copyDescription}
                        onClick={() => {
                            navigator.clipboard.writeText(copyContent);
                            toast.success("Copied to clipboard!");
                        }}
                    >
                        <LuCopy className="text-lg text-neutral-100" />
                    </ButtonAtom>
                </div>
                <div
                    className={`h-0 w-90 overflow-hidden border-l pl-3 transition-all duration-300 group-hover:h-20 ${variants[variant]?.borderColor}`}
                >
                    <p className="text-sm text-neutral-200">{description}</p>
                </div>
            </div>
        </section>
    );
}
