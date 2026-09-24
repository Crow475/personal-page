import { LuChevronRight } from "react-icons/lu";

import { inter } from "@/lib/fonts";
import LinkAtom from "@/components/atoms/link";

function HeaderDecoration() {
    return <span className="text-5xl font-black text-neutral-500/50">#</span>;
}

function HeaderLink({
    href,
    text,
    linkTitle,
    id,
}: {
    href: string;
    text: string;
    linkTitle?: string;
    id?: string;
}) {
    return (
        <LinkAtom
            href={href}
            className="group flex flex-row items-end-safe justify-start space-x-4 px-6"
            title={linkTitle}
        >
            <HeaderDecoration />
            <h2
                className={`${inter.className} flex text-5xl font-bold text-white group-hover:text-neutral-200`}
                id={id}
            >
                {text}
            </h2>
            <LuChevronRight className="text-4xl text-white transition-transform duration-200 group-hover:translate-x-2 group-hover:text-neutral-200" />
        </LinkAtom>
    );
}

function HeaderPlain({ text, id }: { text: string; id?: string }) {
    return (
        <div className="flex flex-row items-end-safe justify-start space-x-4 px-6">
            <HeaderDecoration />
            <h2
                className={`${inter.className} flex text-5xl font-bold text-white`}
                id={id}
            >
                {text}
            </h2>
        </div>
    );
}

export default function HomeSection({
    children,
    title,
    href,
    linkTitle,
    id,
}: {
    children?: React.ReactNode;
    title: string;
    href?: string;
    linkTitle?: string;
    id?: string;
}) {
    return (
        <article className="flex min-h-svh w-full flex-col items-center justify-start py-6">
            <div className="flex h-full w-[95%] flex-col items-center justify-between px-8">
                <div className="flex w-full flex-row items-center border-b border-neutral-500/50 pb-4">
                    {href ? (
                        <HeaderLink
                            href={href}
                            text={title}
                            id={id}
                            linkTitle={linkTitle}
                        />
                    ) : (
                        <HeaderPlain text={title} id={id} />
                    )}
                </div>
                <div className="flex w-full flex-row items-center justify-center">
                    {children}
                </div>
            </div>
        </article>
    );
}
