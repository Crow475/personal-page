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
            <div className="flex h-svh w-full scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent overflow-x-hidden overflow-y-scroll p-0.5">
                {children}
                <Cursor />
            </div>
        </CursorContext.Provider>
    );
}
