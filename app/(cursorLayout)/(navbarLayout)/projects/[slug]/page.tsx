import { notFound } from "next/navigation";

import getProject from "@/functions/getProject";

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    if (!slug) {
        notFound();
    }

    const projectData = await getProject(slug);
    if (!projectData) {
        notFound();
    }

    return (
        <div className="flex min-h-svh w-full flex-col items-start justify-start">
            {projectData.name}
        </div>
    );
}
