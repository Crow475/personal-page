"use client";

import type { CursorState } from "@/lib/types";

import { createContext } from "react";

export const defaultCursorState: CursorState = {
    isHovered: false,
    hoveredRef: null,
    hoverType: null,
    hoverMessage: null,
};

export const CursorContext = createContext<{
    hovered: CursorState;
    setHovered: React.Dispatch<React.SetStateAction<CursorState>>;
}>({
    hovered: defaultCursorState,
    setHovered: () => {},
});
