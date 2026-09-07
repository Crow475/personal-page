"use client";

import Link from "next/link";

import type { CursorState } from "@/lib/types";
import { hoverType } from "@/lib/types";

import { useRef } from "react";

import {
    useCursor,
    defaultCursorState,
} from "@/components/elements/cursorContext";

type navLinkAtomProps = {
    href: string;
    title?: string; // Not for actual use, to consume accidental title prop
    className?: string;
    children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function NavLinkAtom({
    href,
    title,
    children,
    className,
    ...props
}: navLinkAtomProps) {
    const navLinkRef = useRef<HTMLAnchorElement>(null);
    if (title !== undefined) {
        console.warn(
            "NavLinkAtom received a title prop, which should not be used",
        );
    }

    const { setHovered } = useCursor();

    const hoverCursorState: CursorState = {
        isHovered: true,
        hoveredRef: navLinkRef,
        hoverType: hoverType.button,
        hoverMessage: "",
    };

    return (
        <Link
            ref={navLinkRef}
            href={href}
            onMouseEnter={() => setHovered(hoverCursorState)}
            onMouseLeave={() => setHovered(defaultCursorState)}
            className={`${className} cursor-none motion-reduce:cursor-pointer`}
            {...props}
        >
            {children}
        </Link>
    );
}
