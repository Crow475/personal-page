import { LuMail } from "react-icons/lu";
import { FaTelegram, FaGithub, FaLinkedin, FaMastodon } from "react-icons/fa";
import { FaBluesky, FaDiscord, FaSignalMessenger } from "react-icons/fa6";

import { client } from "@/sanity/lib/client";
import { infoSocialsQuery } from "@/sanity/lib/queries";

import { Social, SocialType, typeToIcon, typeToText } from "@/lib/socials";
import PrimaryContact from "@/components/molecules/primaryContact";
import SecondaryContact from "@/components/molecules/secondaryContact";

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

    const contactsBlockSecondarySocialIcons: typeToIcon = {
        EMAIL: <LuMail className="text-lg text-white" />,
        TELEGRAM: <FaTelegram className="text-lg text-white" />,
        GITHUB: <FaGithub className="text-lg text-white" />,
        LINKEDIN: <FaLinkedin className="text-lg text-white" />,
        MASTODON: <FaMastodon className="text-lg text-white" />,
        BLUESKY: <FaBluesky className="text-lg text-white" />,
        DISCORD: <FaDiscord className="text-lg text-white" />,
        SIGNAL: <FaSignalMessenger className="text-lg text-white" />,
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

    const contactsBlockSecondarySocials: Social[] = [];
    info?.secondarySocials?.forEach(
        (item: {
            type: string;
            linkTitle: string;
            href: string;
            copyContent: string;
            copyDescription: string;
            description: string;
        }) => {
            contactsBlockSecondarySocials.push({
                type: item.type as SocialType,
                href: item.href,
                linkTitle: item.linkTitle,
                description: item.description,
                copyDescription: item.copyDescription,
                copyContent: item.copyContent,
                icon: contactsBlockSecondarySocialIcons[
                    item.type as SocialType
                ],
            });
        },
    );

    return (
        <div className="flex w-1/2 flex-col items-start justify-start px-4 py-12">
            {contactsBlockMainSocials.map((social) => (
                <PrimaryContact
                    key={`contactBlockMain-${social.href}`}
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
            <section className="flex w-full flex-col items-start justify-start pt-8">
                <h3 className="text-2xl font-bold text-white">
                    Other ways to contact me
                </h3>
                <div className="flex w-full flex-wrap gap-2 pt-4">
                    {contactsBlockSecondarySocials.map((social) => (
                        <SecondaryContact
                            key={`contactBlockSecondary-${social.href}`}
                            icon={social.icon}
                            title={typeToText[social.type]}
                            href={social.href}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
