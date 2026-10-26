"use client";

import { Toaster } from "react-hot-toast";

import { CursorProvider } from "@/lib/cursorLib";

import Cursor from "@/components/elements/cursor";

export default function CursorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <CursorProvider>
            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        background: "rgba(0, 0, 0, 1)",
                        color: "#fff",
                        border: "1px solid rgba(255, 255, 255, 0.5)",
                    },
                }}
            />
            <div className="flex h-svh w-full scrollbar-thin scrollbar-thumb-white/40 scrollbar-track-transparent overflow-x-hidden overflow-y-scroll motion-reduce:cursor-default md:cursor-none">
                {children}
                <Cursor />
            </div>
        </CursorProvider>
    );
}
