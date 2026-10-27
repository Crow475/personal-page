import { LuAsterisk } from "react-icons/lu";

export default function ProjectTldr({ text }: { text: string }) {
    return (
        <section className="mx-10 my-6 flex w-1/2 flex-col items-start justify-start rounded-2xl border border-t-neutral-400/50 border-r-neutral-500/50 border-b-neutral-500/50 border-l-neutral-400/50 bg-linear-to-br from-blue-900/50 to-slate-800/50 p-4">
            <div className="flex flex-row items-center justify-start">
                <LuAsterisk className="h-8 w-8 text-slate-300" />
                <h2 className="text-3xl font-black tracking-wider text-white">
                    TLDR
                </h2>
            </div>
            <div className="flex w-full flex-col items-center justify-start py-4">
                <div className="flex w-11/12 flex-col items-center justify-start border-l-2 border-slate-300 px-4 py-2">
                    <p className="text-white">{text}</p>
                </div>
            </div>
        </section>
    );
}
