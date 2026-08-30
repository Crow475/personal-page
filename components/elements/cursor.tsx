"use client";

import { hoverType } from "@/lib/types";

import { useEffect, useState, useContext } from "react";

import { animated, useSpring } from "@react-spring/web";

import { CursorContext } from "@/components/elements/cursorContext";

export default function Cursor() {
    const hideDistance = 5; // Distance from the edge of the screen to hide the cursor

    const { hovered } = useContext(CursorContext);

    const [cursorVisible, setCursorVisible] = useState<boolean>(true);
    const [cursorClick, setCursorClick] = useState<boolean>(false);

    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    // Get the bounding rectangle of the hovered element if it exists
    const rect = hovered.isHovered
        ? hovered.hoveredRef?.current?.getBoundingClientRect()
        : null;

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            const newCursorPos = {
                x: event.clientX,
                y: event.clientY,
                fromRight: window.innerWidth - event.clientX,
                fromBottom: window.innerHeight - event.clientY,
            };

            if (hovered.isHovered && rect) {
                const targetCenterX = rect.left + rect.width / 2;
                const targetCenterY = rect.top + rect.height / 2;

                const offsetX = (newCursorPos.x - targetCenterX) * 0.2;
                const offsetY = (newCursorPos.y - targetCenterY) * 0.2;

                setCursorPos({
                    x: rect.left + offsetX,
                    y: rect.top + offsetY,
                });
            } else {
                setCursorPos({
                    x: newCursorPos.x,
                    y: newCursorPos.y,
                });
            }

            if (
                newCursorPos.x < hideDistance ||
                newCursorPos.y < hideDistance ||
                newCursorPos.fromRight < hideDistance ||
                newCursorPos.fromBottom < hideDistance
            ) {
                setCursorVisible(false);
            } else {
                setCursorVisible(true);
            }
        };

        const handleMouseDown = () => {
            setCursorClick(true);
        };

        const handleMouseUp = () => {
            setCursorClick(false);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [hovered, rect]);

    const { height, width } = useSpring({
        height: hovered.isHovered ? rect?.height || 0 : 16,
        width: hovered.isHovered ? rect?.width || 0 : 16,
        config: { mass: 1, tension: 300, friction: 20 },
    });

    const { x, y } = useSpring({
        x: cursorPos.x,
        y: cursorPos.y,
        config: { mass: 0.1, tension: 100, friction: 5 },
    });

    return (
        <animated.div
            className={`pointer-events-none ${cursorVisible ? "absolute motion-reduce:hidden" : "hidden"} ${hovered.isHovered && hovered.hoverType === hoverType.button ? "-z-10" : "z-50"} rounded-lg border border-t-white/50 border-r-neutral-100/5 border-b-neutral-100/5 border-l-white/50 bg-radial-[at_25%_25%] from-slate-300/40 to-slate-50/20 backdrop-blur-3xl`}
            role="presentation"
            style={{
                left: x.to((x_to) => `${x_to}px`),
                top: y.to((y_to) => `${y_to}px`),
                width: width.to((w) => `${w}px`),
                height: height.to((h) => `${h}px`),
            }}
        >
            <div
                className={`pointer-events-none absolute -top-1.25 -left-1.25 h-[calc(100%+10px)] w-[calc(100%+10px)] rounded-xl bg-radial from-transparent from-30% to-slate-50/50 blur-xs transition-all duration-100 ${cursorClick ? "opacity-100" : "opacity-0"}`}
            />
        </animated.div>
    );
}
