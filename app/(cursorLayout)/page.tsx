import { inter } from "@/lib/fonts";

import TestButton from "@/components/atoms/testButton";

export default function Home() {
    return (
        <div>
            <h1 className={`${inter.className} text-9xl font-black text-white`}>
                Hi
                <br />
                this is a Test
            </h1>
            <div className="flex flex-col items-start justify-start space-y-2">
                <span className="text-2xl text-white">Test</span>
                <TestButton />
            </div>
        </div>
    );
}
