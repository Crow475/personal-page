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

const defaultCursorState: CursorState = {
    isHovered: false,
    hoveredRef: null,
    hoverType: null,
    hoverMessage: null,
};

function CursorProvider({ children }: { children: React.ReactNode }) {
    const [hovered, setHovered] = useState(defaultCursorState);

    return (
        <CursorContext.Provider value={{ hovered, setHovered }}>
            {children}
        </CursorContext.Provider>
    );
}

function useCursor() {
    const context = useContext(CursorContext);

    if (context === undefined) {
        throw new Error("useCursor must be used within a CursorProvider");
    }

    return context;
}

export { CursorProvider, useCursor, defaultCursorState };
