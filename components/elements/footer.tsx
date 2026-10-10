import Image from "next/image";

import { LuMail } from "react-icons/lu";
import {
    FaGithub,
    FaLinkedin,
    FaTelegram,
    FaMastodon,
    FaDiscord,
} from "react-icons/fa";
import { FaBluesky, FaSignalMessenger } from "react-icons/fa6";

import { client } from "@/sanity/lib/client";
import { infoFooterQuery } from "@/sanity/lib/queries";

import { inter } from "@/lib/fonts";

import { Social, typeToText, SocialType, typeToIcon } from "@/lib/socials";
import { Destinations } from "@/lib/destinations";

import SocialLink from "@/components/molecules/socialLink";
import FooterLink from "@/components/molecules/footerLink";

export default async function Footer() {
    const info = await client.fetch(infoFooterQuery);

    const currentYear = new Date().getFullYear();

    const footerSocialIcons: typeToIcon = {
        EMAIL: <LuMail className="text-white" size={20} />,
        TELEGRAM: <FaTelegram className="text-white" size={20} />,
        GITHUB: <FaGithub className="text-white" size={20} />,
        LINKEDIN: <FaLinkedin className="text-white" size={20} />,
        MASTODON: <FaMastodon className="text-white" size={20} />,
        BLUESKY: <FaBluesky className="text-white" size={20} />,
        DISCORD: <FaDiscord className="text-white" size={20} />,
        SIGNAL: <FaSignalMessenger className="text-white" size={20} />,
    };

    const footerSocials: Social[] = [];
    info?.footerSocials?.forEach(
        (item: {
            type: string;
            linkTitle: string;
            href: string;
            copyContent: string;
            copyDescription: string;
            description: string;
        }) => {
            footerSocials.push({
                type: item.type as SocialType,
                href: item.href,
                linkTitle: item.linkTitle,
                description: item.description,
                copyDescription: item.copyDescription,
                copyContent: item.copyContent,
                icon: footerSocialIcons[item.type as SocialType],
            });
        },
    );

    const footerEmail: Social = {
        type: info?.footerEmail?.type as SocialType,
        href: info?.footerEmail?.href,
        linkTitle: info?.footerEmail?.linkTitle,
        description: info?.footerEmail?.description,
        copyDescription: info?.footerEmail?.copyDescription,
        copyContent: info?.footerEmail?.copyContent,
        icon: footerSocialIcons[info?.footerEmail?.type as SocialType],
    };

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
                            className="h-20 w-20 select-none"
                            alt=""
                            role="presentation"
                            unoptimized
                        />
                        <Image
                            src="/7.svg"
                            width={80}
                            height={80}
                            className="h-20 w-20 select-none"
                            alt=""
                            role="presentation"
                            unoptimized
                        />
                        <Image
                            src="/5.svg"
                            width={80}
                            height={80}
                            className="h-20 w-20 select-none"
                            alt=""
                            role="presentation"
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
                                href={footerEmail.href || ""}
                                text={typeToText[footerEmail.type || "EMAIL"]}
                            >
                                <div className="flex flex-row items-center justify-center space-x-2 px-2">
                                    {footerEmail.icon}
                                    <span
                                        className={`${inter.className} text-sm text-neutral-300`}
                                    >
                                        {footerEmail.linkTitle}
                                    </span>
                                </div>
                            </SocialLink>
                            <div className="flex flex-row items-center justify-center space-x-2">
                                {footerSocials.map((social) => (
                                    <SocialLink
                                        key={`footer-${social.href}`}
                                        href={social.href}
                                        text={typeToText[social.type]}
                                    >
                                        {social.icon}
                                    </SocialLink>
                                ))}
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
