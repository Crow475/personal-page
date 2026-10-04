"use client";

import Link from "next/link";

import { useRef, useId } from "react";

import { useCursor, defaultCursorState, HoverType } from "@/lib/cursorLib";
import type { CursorState } from "@/lib/cursorLib";

type LinkAtomProps = {
    href: string;
    title?: string;
    className?: string;
    children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Default link component
 */
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
        hoverType: HoverType.link,
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
                className={`${className} cursor-none focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white/80 motion-reduce:cursor-pointer`}
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
