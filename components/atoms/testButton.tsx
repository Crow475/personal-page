"use client";

import type { CursorState } from "@/lib/types";
import { hoverType } from "@/lib/types";

import { useRef } from "react";

import {
    useCursor,
    defaultCursorState,
} from "@/components/elements/cursorContext";

export default function TestButton() {
    const buttonRef = useRef<HTMLButtonElement>(null);

    const { setHovered } = useCursor();

    const hoverCursorState: CursorState = {
        isHovered: true,
        hoveredRef: buttonRef,
        hoverType: hoverType.button,
        hoverMessage: "",
    };

    return (
        <button
            ref={buttonRef}
            className="cursor-none rounded-lg border-2 border-red-900 bg-transparent px-4 py-2 text-white hover:border-transparent hover:bg-red-500/40 motion-reduce:cursor-pointer"
            onMouseEnter={() => {
                setHovered(hoverCursorState);
            }}
            onMouseLeave={() => {
                setHovered(defaultCursorState);
            }}
            onClick={() => alert("test button clcked")}
        >
            Test Button
        </button>
    );
}
