import { Geist, Geist_Mono, Inter } from "next/font/google";

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

export { geistSans, geistMono, inter };
