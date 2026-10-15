import LinkAtom from "@/components/atoms/link";

export default function SecondaryContact({
    icon,
    title,
    href,
}: {
    icon: React.ReactNode;
    title: string;
    href: string;
}) {
    return (
        <LinkAtom href={href} target="_blank">
            <div className="flex w-full items-center justify-between space-x-2 rounded-lg border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-neutral-800/50 px-3 py-1 hover:bg-neutral-600/50">
                {icon}
                <span className="text-xl font-semibold text-white">
                    {title}
                </span>
            </div>
        </LinkAtom>
    );
}
