"use client";

import { createContext, useContext, useState } from "react";

const CursorContext = createContext<
    | {
          hovered: CursorState;
          setHovered: React.Dispatch<React.SetStateAction<CursorState>>;
      }
    | undefined
>(undefined);

/**
 * Types of hover states for the cursor
 */
enum HoverType {
    button = "Button",
    link = "Link",
}

/**
 * Hover types that should cause the cursor to shapeshift
 */
const ShapeshiftHoverTypes: HoverType[] = [HoverType.button];

/**
 * State of the cursor hover
 */
type CursorState = {
    isHovered: boolean;
    hoveredRef: React.RefObject<HTMLElement | null> | null;
    hoverType: HoverType | null;
    hoverMessage: string | null;
};

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

export {
    type CursorState,
    CursorProvider,
    useCursor,
    defaultCursorState,
    HoverType,
    ShapeshiftHoverTypes,
};
