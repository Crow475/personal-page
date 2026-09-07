"use client";

import Link from "next/link";

import type { CursorState } from "@/lib/types";
import { hoverType } from "@/lib/types";

import { useRef, useId } from "react";

import {
    defaultCursorState,
    useCursor,
} from "@/components/elements/cursorContext";

type LinkAtomProps = {
    href: string;
    title?: string;
    className?: string;
    children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function LinkAtom({
    href,
    title,
    children,
    className,
    ...props
}: LinkAtomProps) {
    const titleProvided = title !== undefined;
    const titleText = title || "";
    const titleId = useId();

    const linkRef = useRef<HTMLAnchorElement>(null);

    const { setHovered } = useCursor();

    const hoverCursorState: CursorState = {
        isHovered: true,
        hoveredRef: linkRef,
        hoverType: hoverType.link,
        hoverMessage: titleText,
    };

    return (
        <>
            <Link
                ref={linkRef}
                href={href}
                onMouseEnter={() => setHovered(hoverCursorState)}
                onMouseLeave={() => setHovered(defaultCursorState)}
                aria-describedby={titleId}
                className={`${className} cursor-none motion-reduce:cursor-pointer`}
                {...props}
            >
                {children}
            </Link>
            {titleProvided && (
                <span className="sr-only" role="tooltip" id={titleId}>
                    {titleText}
                </span>
            )}
        </>
    );
}
