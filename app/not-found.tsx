"use client";

import { LuHouse, LuChevronLeft } from "react-icons/lu";

import Layout from "@/app/(cursorLayout)/layout";

import { silkscreen, inter } from "@/lib/fonts";

import ButtonLinkAtom from "@/components/atoms/buttonLink";
import ButtonAtom from "@/components/atoms/button";

export default function NotFound() {
    return (
        <Layout>
            <div className="flex h-full w-full flex-col items-center justify-center space-y-40">
                <div className="flex flex-col items-center justify-center space-y-8">
                    <span
                        className={`${silkscreen.className} text-8xl tracking-[-0.5rem] text-white select-none`}
                    >
                        {":("}
                    </span>
                    <h1
                        className={`${inter.className} flex flex-col items-center justify-center space-y-2 text-white`}
                    >
                        <span className="text-8xl font-black">404</span>
                        <span className="text-2xl font-bold">
                            Page not found
                        </span>
                    </h1>
                </div>
                <div className="flex flex-row items-center justify-center space-x-4">
                    <ButtonAtom
                        onClick={() => window.history.back()}
                        className="z-30 flex items-center justify-between space-x-2 rounded-lg border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-neutral-800/50 px-3 py-1 hover:bg-neutral-600/50"
                    >
                        <LuChevronLeft className="text-xl text-white" />
                        <span className="text-xl font-bold text-white">
                            Back
                        </span>
                    </ButtonAtom>
                    <ButtonLinkAtom
                        href="/"
                        className="z-30 flex items-center justify-between space-x-2 rounded-lg border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-neutral-800/50 px-3 py-1 hover:bg-neutral-600/50"
                    >
                        <LuHouse className="text-xl text-white" />
                        <span className="text-xl font-bold text-white">
                            Home
                        </span>
                    </ButtonLinkAtom>
                </div>
            </div>
        </Layout>
    );
}
