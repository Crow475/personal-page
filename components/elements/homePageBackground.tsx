"use client";

import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

export default function HomePageBackground() {
    const [isMounted, setIsMounted] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

    // Set isMounted to true after the component mounts to avoid hydration mismatch
    useEffect(() => {
        function handleMount() {
            setIsMounted(true);
        }

        handleMount();
    }, []);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(
            "(prefers-reduced-motion: no-preference)",
        );

        function handleChange(value: boolean) {
            setPrefersReducedMotion(value);
        }

        handleChange(!mediaQueryList.matches); // Set initial value

        const listener = (event: MediaQueryListEvent) => {
            handleChange(!event.matches);
        };

        mediaQueryList.addEventListener("change", listener);

        // Cleanup
        return () => {
            mediaQueryList.removeEventListener("change", listener);
        };
    }, []);

    const styles = useSpring({
        loop: true,
        from: { color1: "#8A2BE2", color2: "#FF1493" }, // Purple to Pink
        to: [
            { color1: "#FF1493", color2: "#00BFFF" }, // Pink to Deep Sky Blue
            { color1: "#00BFFF", color2: "#00FA9A" }, // Blue to Medium Spring Green
            { color1: "#00FA9A", color2: "#FFD700" }, // Green to Gold
            { color1: "#8A2BE2", color2: "#FF1493" }, // Back to Purple and Pink
        ],
        config: { duration: 8000 }, // 8 seconds per color transition
    });

    return (
        <div className="absolute top-0 left-0 -z-10 h-svh w-full">
            <div className="absolute z-10 flex h-full w-full bg-linear-to-r from-black from-20% to-transparent" />
            <div className="absolute z-10 flex h-full w-full bg-linear-to-l from-black to-transparent to-5%" />
            <div className="absolute z-10 flex h-full w-full bg-linear-to-b from-black to-transparent to-5%" />
            <div className="absolute z-10 flex h-full w-full bg-linear-to-t from-black to-transparent to-5%" />
            <svg
                viewBox="0 0 1600 900"
                preserveAspectRatio="xMidYMid slice"
                className="-z-10 h-full w-full"
            >
                <defs>
                    <linearGradient
                        id="HoleGradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                    >
                        <animated.stop
                            offset="0%"
                            stopColor={
                                isMounted && !prefersReducedMotion
                                    ? styles.color1
                                    : "#8A2BE2"
                            }
                        />
                        <animated.stop
                            offset="100%"
                            stopColor={
                                isMounted && !prefersReducedMotion
                                    ? styles.color2
                                    : "#FF1493"
                            }
                        />
                    </linearGradient>

                    <pattern id="Pattern" x="0" y="0" width=".01" height=".016">
                        <circle cx="8" cy="8" r="6" fill="white" />
                    </pattern>

                    <mask id="CircleMask">
                        <rect width="100%" height="100%" fill="url(#Pattern)" />
                    </mask>
                </defs>

                <rect
                    width="100%"
                    height="100%"
                    fill="url(#HoleGradient)"
                    mask="url(#CircleMask)"
                />
            </svg>
        </div>
    );
}
