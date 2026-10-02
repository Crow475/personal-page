import { inter, kanit } from "@/lib/fonts";

import HomePageBackground from "@/components/elements/homePageBackground";
import CTALink from "@/components/molecules/ctaLink";
import HomeSection from "@/components/molecules/homeSection";

import MyLocation from "@/components/molecules/myLocation";
import ContactElement from "@/components/elements/contactElement";

import { LuMail } from "react-icons/lu";
import { FaTelegram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
    return (
        <main className="relative flex w-full flex-col items-center justify-start">
            <HomePageBackground />
            <div className="h-20" role="presentation" />
            <article
                className={`${inter.className} flex h-[calc(100svh-5rem)] w-full flex-col items-start justify-start space-y-4 px-10`}
            >
                <h1 className="flex flex-col items-start justify-start pb-5">
                    <span
                        className={`${kanit.className} text-[200px] leading-none font-black tracking-tight text-white`}
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
                <div className="flex flex-row items-center justify-start space-x-4 pt-10 pl-2">
                    <CTALink
                        href="/projects"
                        text="My projects"
                        variant="secondary"
                    />
                    <CTALink
                        href="#contact"
                        text="Contact me"
                        variant="primary"
                    />
                </div>
            </article>
            <HomeSection
                title="Project showcase"
                href="/projects"
                id="projects"
                linkTitle="View all the stuff I've done"
            ></HomeSection>
            <HomeSection
                title="About me"
                href="/about"
                id="about"
            ></HomeSection>
            <HomeSection title="My contacts" id="contact">
                <div className="flex h-svh w-full flex-row items-center justify-between">
                    <div className="flex h-full w-1/2 flex-col items-start justify-start px-4 py-12">
                        <ContactElement
                            variant="EMAIL"
                            header="Email"
                            title="AVCrow7@gmail.com"
                            href="mailto:AVCrow7@gmail.com"
                            description="The best way to contact me for anything business related. I check my email every day and will respond as soon as possible."
                            copyDescription="Copy email to clipboard"
                            copyContent="avcrow7@gmail.com"
                            icon={<LuMail className="text-3xl text-white" />}
                        />
                        <ContactElement
                            variant="TELEGRAM"
                            header="Telegram"
                            title="t.me/Crow475"
                            href="https://t.me/Crow475"
                            copyDescription="Copy username to clipboard"
                            copyContent="@Crow475"
                            description="The fastest way to contact me. I respond to messages on Telegram almost instantly, so if you want a quick response, this is the best way to reach me."
                            icon={
                                <FaTelegram className="text-3xl text-white" />
                            }
                        />
                        <ContactElement
                            variant="GITHUB"
                            header="GitHub"
                            title="github.com/Crow475"
                            href="https://github.com/Crow475"
                            copyDescription="Copy username to clipboard"
                            copyContent="@Crow475"
                            description="Most of my projects are open source and available on GitHub. Visit if you want to see what I've been working on."
                            icon={<FaGithub className="text-3xl text-white" />}
                        />
                        <ContactElement
                            variant="LINKEDIN"
                            header="LinkedIn"
                            title="linkedin.com/in/artem-voronstov-777b11256/"
                            href="https://www.linkedin.com/in/artem-voronstov-777b11256/"
                            copyDescription="Copy username to clipboard"
                            copyContent="artem-voronstov-777b11256"
                            description="If you want to connect with me professionally, LinkedIn is the best place to do so. You can find my resume and other professional information there."
                            icon={
                                <FaLinkedin className="text-3xl text-white" />
                            }
                        />
                        {/* <hr className="mt-10 w-full border border-white/20" />
                        <section className="flex flex-col items-start justify-start pt-8">
                            <h3 className="text-2xl font-bold text-white">
                                My other socials
                            </h3>
                            <div>

                            </div>
                        </section> */}
                    </div>
                    <div className="flex h-full w-1/2 flex-row items-start justify-start py-12">
                        <MyLocation />
                    </div>
                </div>
            </HomeSection>
        </main>
    );
}
