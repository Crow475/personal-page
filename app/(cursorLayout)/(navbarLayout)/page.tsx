"use client";

import { inter, kanit } from "@/lib/fonts";

import HomePageBackground from "@/components/elements/homePageBackground";

export default function Home() {
    return (
        <main className="relative h-[200vh] w-full">
            <HomePageBackground />
            <div className="h-20" role="presentation" />
            <article
                className={`${inter.className} flex flex-col items-start justify-start space-y-4 px-10`}
            >
                <h1 className="fle flex-col items-start justify-start pb-5">
                    <span
                        className={`${kanit.className} text-[200px] leading-none font-black text-white`}
                    >
                        Hi
                    </span>
                    <br />
                    <span className="text-7xl font-black text-white">
                        my name is Artem
                    </span>
                </h1>
                <p className="text-xl text-neutral-400">
                    I do web development, programming and other stuff
                </p>
            </article>
        </main>
    );
}
