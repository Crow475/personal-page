import ButtonLinkAtom from "@/components/atoms/buttonLink";

const variants = ["primary", "secondary"] as const;

export default function CTALink({
    href,
    variant = "primary",
    text,
}: {
    href: string;
    variant?: (typeof variants)[number];
    text: string;
}) {
    let className = "";
    switch (variant) {
        case "primary":
            className =
                "z-30 rounded-lg border border-t-white/70 border-r-neutral-500/70 border-b-neutral-500/70 border-l-white/70 px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-conic/decreasing from-violet-700/15 via-lime-300/15 to-violet-700/15 hover:from-violet-700/30 hover:via-lime-300/30 hover:to-violet-700/30";
            break;
        case "secondary":
            className =
                "z-30 rounded-lg border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-neutral-800/50 px-4 py-2 text-lg font-semibold text-white hover:bg-neutral-600/50 transition-colors duration-300";
            break;
    }

    return (
        <ButtonLinkAtom href={href} className={className}>
            <span>{text}</span>
        </ButtonLinkAtom>
    );
}
