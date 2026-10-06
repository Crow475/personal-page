import PrimaryContact from "@/components/molecules/primaryContact";

import { LuMail } from "react-icons/lu";
import { FaTelegram, FaGithub, FaLinkedin, FaMastodon } from "react-icons/fa";

import { client } from "@/sanity/lib/client";
import { infoSocialsQuery } from "@/sanity/lib/queries";

import { Social, SocialType, typeToIcon } from "@/lib/socials";

export default async function ContactsBlock() {
    const info = await client.fetch(infoSocialsQuery);

    const contactsBlockMainSocialIcons: typeToIcon = {
        EMAIL: <LuMail className="text-3xl text-white" />,
        TELEGRAM: <FaTelegram className="text-3xl text-white" />,
        GITHUB: <FaGithub className="text-3xl text-white" />,
        LINKEDIN: <FaLinkedin className="text-3xl text-white" />,
        MASTODON: <FaMastodon className="text-3xl text-white" />,
        BLUESKY: <></>,
        DISCORD: <></>,
        SIGNAL: <></>,
    };

    const contactsBlockMainSocials: Social[] = [];
    info?.mainSocials?.forEach(
        (item: {
            type: string;
            linkTitle: string;
            href: string;
            copyContent: string;
            copyDescription: string;
            description: string;
        }) => {
            contactsBlockMainSocials.push({
                type: item.type as SocialType,
                href: item.href,
                linkTitle: item.linkTitle,
                description: item.description,
                copyDescription: item.copyDescription,
                copyContent: item.copyContent,
                icon: contactsBlockMainSocialIcons[item.type as SocialType],
            });
        },
    );

    return (
        <div className="flex h-full w-1/2 flex-col items-start justify-start px-4 py-12">
            {contactsBlockMainSocials.map((social) => (
                <PrimaryContact
                    key={`contactBlock-${social.href}`}
                    variant={social.type}
                    title={social.linkTitle}
                    description={social.description}
                    copyDescription={social.copyDescription}
                    copyContent={social.copyContent}
                    href={social.href}
                    icon={social.icon}
                />
            ))}
            <hr className="mt-10 w-full border border-white/20" />
            <section className="flex flex-col items-start justify-start pt-8">
                <h3 className="text-2xl font-bold text-white">
                    Other ways to contact me
                </h3>
                <div className="grid w-full grid-flow-row-dense grid-cols-12 gap-2 pt-4"></div>
            </section>
        </div>
    );
}
