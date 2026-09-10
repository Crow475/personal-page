"use client";

import { inter } from "@/lib/fonts";

import TestButton from "@/components/atoms/testButton";
import LinkAtom from "@/components/atoms/link";
import ButtonAtom from "@/components/atoms/button";

import HomePageBackground from "@/components/elements/homePageBackground";

export default function Home() {
    return (
        <div className="relative h-[200vh] w-full">
            <HomePageBackground />
            <h1 className={`${inter.className} text-9xl font-black text-white`}>
                Hi
                <br />
                this is a Test
            </h1>
            <div className="flex flex-col items-start justify-start space-y-1">
                <span className="text-2xl text-white">Test</span>
                <TestButton />
                <LinkAtom
                    href="/test"
                    title="Test Link title"
                    target="_blank"
                    className="text-white underline"
                >
                    Test Link
                </LinkAtom>
                <span className="text-white">Lorem ipsum dolor set amet</span>
                <ButtonAtom
                    onClick={() => {
                        alert("test button clicked");
                    }}
                    className="rounded-lg border-2 border-white/20 bg-transparent px-4 py-2 text-white hover:border-transparent hover:bg-white/20 motion-reduce:cursor-pointer"
                    title="Test Button title"
                >
                    Test Button
                </ButtonAtom>
            </div>
        </div>
    );
}
