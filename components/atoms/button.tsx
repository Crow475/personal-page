"use client";

import type { CursorState } from "@/lib/types";
import { hoverType } from "@/lib/types";

import { useRef, useContext, useId } from "react";

import {
    CursorContext,
    defaultCursorState,
} from "@/components/elements/cursorContext";

type ButtonAtomProps = {
    title?: string;
    className?: string;
    children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonAtom({
    title,
    className,
    children,
    ...props
}: ButtonAtomProps) {
    const titleProvided = title !== undefined;
    const titleText = title || "";
    const titleId = useId();

    const buttonRef = useRef<HTMLButtonElement>(null);

    const { setHovered } = useContext(CursorContext);

    const hoverCursorState: CursorState = {
        isHovered: true,
        hoveredRef: buttonRef,
        hoverType: hoverType.button,
        hoverMessage: titleText,
    };

    return (
        <>
            <button
                ref={buttonRef}
                onMouseEnter={() => setHovered(hoverCursorState)}
                onMouseLeave={() => setHovered(defaultCursorState)}
                aria-describedby={titleId}
                className={`${className} cursor-none motion-reduce:cursor-pointer`}
                {...props}
            >
                {children}
            </button>
            {titleProvided && (
                <span className="sr-only" role="tooltip" id={titleId}>
                    {titleText}
                </span>
            )}
        </>
    );
}
