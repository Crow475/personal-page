"use client";

import { useState } from "react";

import {
    CursorContext,
    defaultCursorState,
} from "@/components/elements/cursorContext";

import Cursor from "@/components/elements/cursor";

export default function CursorLayout({ children }: LayoutProps<"/">) {
    const [hovered, setHovered] = useState(defaultCursorState);

    return (
        <CursorContext.Provider value={{ hovered, setHovered }}>
            {children}
            <Cursor />
        </CursorContext.Provider>
    );
}
