"use client";

import { CursorProvider } from "@/lib/cursorLib";

import Cursor from "@/components/elements/cursor";

export default function CursorLayout({ children }: LayoutProps<"/">) {
    return (
        <CursorProvider>
            <div className="flex h-svh w-full cursor-none scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent overflow-x-hidden overflow-y-scroll p-0.5 motion-reduce:cursor-default">
                {children}
                <Cursor />
            </div>
        </CursorProvider>
    );
}
