import { LuExternalLink } from "react-icons/lu";

import ButtonLinkAtom from "@/components/atoms/buttonLink";

enum variants {
    code = "code",
    project = "project",
    license = "license",
}

export default function ProjectLink({
    variant,
    href,
}: {
    variant: keyof typeof variants;
    href: string;
}) {
    return (
        <ButtonLinkAtom
            href={href}
            target="_blank"
            className="z-30 flex flex-row items-center rounded-lg border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-neutral-800/50 p-2 text-white transition-all duration-300"
        >
            <span className="font-bold text-white">
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </span>
            <LuExternalLink className="ml-2 h-5 w-5 text-white" />
        </ButtonLinkAtom>
    );
}
