import { inter } from "@/lib/fonts";

import TestButton from "@/components/atoms/testButton";
import LinkAtom from "@/components/atoms/link";

export default function Home() {
    return (
        <div>
            <h1 className={`${inter.className} text-9xl font-black text-white`}>
                Hi
                <br />
                this is a Test
            </h1>
            <div className="flex flex-col items-start justify-start space-y-1">
                <span className="text-2xl text-white">Test</span>
                <TestButton />
                <LinkAtom
                    href="/test"
                    title="Test Link title"
                    target="_blank"
                    className="text-white underline"
                >
                    Test Link
                </LinkAtom>
                <span className="text-white">Lorem ipsum dolor set amet</span>
            </div>
        </div>
    );
}
