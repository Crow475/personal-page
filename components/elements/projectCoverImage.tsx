import Image from "next/image";

import { LuMaximize2, LuInfo } from "react-icons/lu";
import ButtonAtom from "@/components/atoms/button";

export default function ProjectCoverImage({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    return (
        <div className="group flex min-h-40 w-full flex-row items-end justify-start space-x-4 px-4 pt-4">
            {src && (
                <>
                    <Image
                        src={`${src}?auto=format`}
                        width={1000}
                        height={400}
                        alt={alt}
                        className="w-2/3 rounded-xl object-cover shadow-md"
                    />
                    <div className="flex flex-col items-start justify-start space-y-2 py-2">
                        <ButtonAtom className="z-30 scale-0 rounded-lg border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-neutral-800/50 p-2 text-white transition-all duration-200 group-hover:scale-100 hover:bg-neutral-600/50">
                            <LuInfo className="h-4 w-4 text-white" />
                        </ButtonAtom>
                        <ButtonAtom className="z-30 scale-0 rounded-lg border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-neutral-800/50 p-2 text-white transition-all duration-200 group-hover:scale-100 hover:bg-neutral-600/50">
                            <LuMaximize2 className="h-4 w-4 text-white" />
                        </ButtonAtom>
                    </div>
                </>
            )}
        </div>
    );
}
