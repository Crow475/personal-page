"use client";

import { CursorProvider } from "@/components/elements/cursorContext";

import Cursor from "@/components/elements/cursor";

export default function CursorLayout({ children }: LayoutProps<"/">) {
    return (
        <CursorProvider>
            <div className="flex h-svh w-full scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent overflow-x-hidden overflow-y-scroll p-0.5">
                {children}
                <Cursor />
            </div>
        </CursorProvider>
    );
}
