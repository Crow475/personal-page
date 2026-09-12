"use client";

import type { CursorState } from "@/lib/types";

import { createContext, useContext, useState } from "react";

const CursorContext = createContext<
    | {
          hovered: CursorState;
          setHovered: React.Dispatch<React.SetStateAction<CursorState>>;
      }
    | undefined
>(undefined);

/**
 * Default cursor state
 */
const defaultCursorState: CursorState = {
    isHovered: false,
    hoveredRef: null,
    hoverType: null,
    hoverMessage: null,
};

/**
 * Provider for cursor context.
 * Wrap your app with this to use the cursor context.
 */
function CursorProvider({ children }: { children: React.ReactNode }) {
    const [hovered, setHovered] = useState(defaultCursorState);

    return (
        <CursorContext.Provider value={{ hovered, setHovered }}>
            {children}
        </CursorContext.Provider>
    );
}

/**
 * Hook that provides cursor context.
 * Must be used within CursorProvider
 */
function useCursor() {
    const context = useContext(CursorContext);

    if (context === undefined) {
        throw new Error("useCursor must be used within a CursorProvider");
    }

    return context;
}

export { CursorProvider, useCursor, defaultCursorState };
