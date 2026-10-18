import { inter, kanit } from "@/lib/fonts";

import CTALink from "@/components/molecules/ctaLink";
import HomeSection from "@/components/molecules/homeSection";
import MyLocation from "@/components/molecules/myLocation";

import HomePageBackground from "@/components/elements/homePageBackground";
import HomePageBottomDecoration from "@/components/elements/homePageBottomDecoration";
import ContactsBlock from "@/components/elements/contactsBlock";
import ProjectCard from "@/components/elements/projectCard";

import getHomeData from "@/functions/getHomeData";

export default async function Home() {
    const data = await getHomeData();
    const projects = data.featuredProjects;

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
            >
                <div className="flex w-full flex-row items-center justify-start space-x-[1.3%] py-10">
                    {projects.map((project) => (
                        <ProjectCard
                            key={`project-card-${project.slug}`}
                            data={project}
                        />
                    ))}
                </div>
            </HomeSection>
            <HomeSection
                title="About me"
                href="/about"
                id="about"
            ></HomeSection>
            <HomeSection title="My contacts" id="contact">
                <div className="flex w-full flex-row items-start justify-between">
                    <ContactsBlock />
                    <div className="flex h-full w-1/2 flex-row items-start justify-start py-12">
                        <MyLocation />
                    </div>
                </div>
            </HomeSection>
            <HomePageBottomDecoration />
        </main>
    );
}
