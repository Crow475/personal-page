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
    disabled?: boolean;
    children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Button-like link
 * (FOR INTERNAL LINKS ONLY)
 */
export default function ButtonLinkAtom({
    href,
    title,
    children,
    className,
    disabled,
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
            className={`${className} ${disabled ? "pointer-events-none" : ""} cursor-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white/80 motion-reduce:cursor-pointer`}
            {...props}
        >
            {children}
        </Link>
    );
}
