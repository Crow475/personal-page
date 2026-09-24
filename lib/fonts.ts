import { Geist, Geist_Mono, Inter, Kanit, Silkscreen } from "next/font/google";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin", "cyrillic", "latin-ext"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin", "cyrillic", "latin-ext"],
});

const inter = Inter({
    subsets: ["latin", "cyrillic", "latin-ext"],
});

const kanit = Kanit({
    subsets: ["latin", "latin-ext"],
    weight: ["600"],
});

const silkscreen = Silkscreen({
    subsets: ["latin", "latin-ext"],
    weight: ["400"],
});

export { geistSans, geistMono, inter, kanit, silkscreen };
