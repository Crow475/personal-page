enum SocialType {
    EMAIL = "EMAIL",
    TELEGRAM = "TELEGRAM",
    GITHUB = "GITHUB",
    LINKEDIN = "LINKEDIN",
    MASTODON = "MASTODON",
    BLUESKY = "BLUESKY",
    DISCORD = "DISCORD",
    SIGNAL = "SIGNAL",
}

type Social = {
    type: SocialType;
    href: string;
    linkTitle: string;
    description: string;
    copyDescription: string;
    copyContent: string;
    icon: React.ReactNode;
};

type typeToIcon = Record<SocialType, React.ReactNode>;

const typeToText: Record<SocialType, string> = {
    EMAIL: "Email",
    TELEGRAM: "Telegram",
    GITHUB: "GitHub",
    LINKEDIN: "LinkedIn",
    MASTODON: "Mastodon",
    BLUESKY: "Bluesky",
    DISCORD: "Discord",
    SIGNAL: "Signal",
};

export { SocialType, typeToText };
export type { Social, typeToIcon };
