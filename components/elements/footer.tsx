import Image from "next/image";

import { LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaTelegram, FaMastodon } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";

import { client } from "@/sanity/lib/client";
import { infoQuery } from "@/sanity/lib/queries";

import { inter } from "@/lib/fonts";

import { Destinations } from "@/lib/destinations";

import SocialLink from "@/components/molecules/socialLink";
import FooterLink from "@/components/molecules/footerLink";

export default async function Footer() {
    const info = await client.fetch(infoQuery);

    const currentYear = new Date().getFullYear();

    return (
        <div className="flex w-full flex-col items-center justify-center pb-10">
            <footer className="relative flex w-[95%] flex-col items-center justify-between rounded-2xl border border-white/50 py-8">
                <div className="flex w-full flex-row items-center justify-center py-4">
                    <nav className="flex w-1/3 flex-col items-start justify-start px-10">
                        <ul className="flex flex-col items-start justify-start space-y-4">
                            {Destinations.map((destination) => (
                                <FooterLink
                                    key={destination.href}
                                    destination={destination}
                                />
                            ))}
                        </ul>
                    </nav>
                    <div className="flex w-1/3 flex-row items-center justify-center py-10">
                        <Image
                            src="/4.svg"
                            width={80}
                            height={80}
                            className="h-20 w-20"
                            alt=""
                            unoptimized
                        />
                        <Image
                            src="/7.svg"
                            width={80}
                            height={80}
                            className="h-20 w-20"
                            alt=""
                            unoptimized
                        />
                        <Image
                            src="/5.svg"
                            width={80}
                            height={80}
                            className="h-20 w-20"
                            alt=""
                            unoptimized
                        />
                    </div>
                    <div className="flex w-1/3 flex-col items-end justify-between space-y-4 px-10">
                        <div className="mx-10 flex h-32 w-32 flex-col items-center justify-start">
                            <Image
                                src={info?.imageUrl || ""}
                                width={128}
                                height={128}
                                alt="Avatar"
                                className="h-32 w-32 rounded-full"
                            />
                        </div>
                        <div className="flex flex-col items-center justify-start space-y-2">
                            <SocialLink
                                href="mailto:avcrow7@gmail.com"
                                text="Email"
                            >
                                <div className="flex flex-row items-center justify-center space-x-2 px-2">
                                    <LuMail className="text-white" size={20} />
                                    <span
                                        className={`${inter.className} text-sm text-neutral-300`}
                                    >
                                        AVCrow7@gmail.com
                                    </span>
                                </div>
                            </SocialLink>
                            <div className="flex flex-row items-center justify-center space-x-2">
                                <SocialLink
                                    href="https://github.com/Crow475"
                                    text="GitHub"
                                >
                                    <FaGithub
                                        className="text-white"
                                        size={20}
                                    />
                                </SocialLink>
                                <SocialLink
                                    href="https://www.linkedin.com/in/artem-voronstov-777b11256/"
                                    text="LinkedIn"
                                >
                                    <FaLinkedin
                                        className="text-white"
                                        size={20}
                                    />
                                </SocialLink>
                                <SocialLink
                                    href="https://bsky.app/profile/crow475.bsky.social"
                                    text="Bluesky"
                                >
                                    <FaBluesky
                                        className="text-white"
                                        size={20}
                                    />
                                </SocialLink>
                                <SocialLink
                                    href="https://t.me/crow475"
                                    text="Telegram"
                                >
                                    <FaTelegram
                                        className="text-white"
                                        size={20}
                                    />
                                </SocialLink>
                                <SocialLink
                                    href="https://mastodon.social/@crow475"
                                    text="Mastodon"
                                >
                                    <FaMastodon
                                        className="text-white"
                                        size={20}
                                    />
                                </SocialLink>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="text-sm text-neutral-400">
                    © {currentYear} Crow475. All rights reserved.
                </span>
            </footer>
        </div>
    );
}
