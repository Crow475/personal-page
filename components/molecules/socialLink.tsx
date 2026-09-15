import ButtonLinkAtom from "../atoms/buttonLink";

export default function SocialLink({
    children,
    href,
    text,
}: {
    children: React.ReactNode;
    href: string;
    text: string;
}) {
    return (
        <ButtonLinkAtom
            href={href}
            className="flex flex-row items-center justify-center rounded-full p-0.5"
        >
            <div className="group z-30 flex flex-row items-center justify-center space-x-2 rounded-4xl border border-white/50 p-1 transition-all duration-200 hover:rounded-lg">
                {children}
            </div>
            <span className="sr-only">{text}</span>
        </ButtonLinkAtom>
    );
}
