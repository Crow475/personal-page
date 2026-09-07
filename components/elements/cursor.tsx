"use client";

import { hoverType } from "@/lib/types";

import { useEffect, useState } from "react";

import { animated, useSpring } from "@react-spring/web";

import { LuArrowUpRight } from "react-icons/lu";

import { useCursor } from "@/components/elements/cursorContext";

const shapeshiftHoverTypes: hoverType[] = [hoverType.button];

export default function Cursor() {
    const hideDistance = 5; // Distance from the edge of the screen to hide the cursor

    const { hovered } = useCursor();

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

            if (
                hovered.isHovered &&
                hovered.hoverType &&
                shapeshiftHoverTypes.includes(hovered.hoverType) &&
                rect
            ) {
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
                    x: newCursorPos.x - 8, // Adjust for cursor size (16px / 2)
                    y: newCursorPos.y - 8, // Adjust for cursor size (16px / 2)
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
        height:
            hovered.isHovered &&
            hovered.hoverType &&
            shapeshiftHoverTypes.includes(hovered.hoverType)
                ? rect?.height || 0
                : 16,
        width:
            hovered.isHovered &&
            hovered.hoverType &&
            shapeshiftHoverTypes.includes(hovered.hoverType)
                ? rect?.width || 0
                : 16,
        config: { mass: 1, tension: 300, friction: 20 },
    });

    const { x, y } = useSpring({
        x: cursorPos.x,
        y: cursorPos.y,
        config: { mass: 0.1, tension: 100, friction: 5 },
    });

    return (
        <animated.div
            className={`pointer-events-none ${cursorVisible ? "absolute motion-reduce:hidden" : "hidden"} ${hovered.isHovered && hovered.hoverType === hoverType.button ? "z-20" : "z-50"} rounded-lg border border-t-white/50 border-r-neutral-100/5 border-b-neutral-100/5 border-l-white/50 bg-radial-[at_25%_25%] from-slate-300/40 to-slate-50/20 backdrop-blur-3xl`}
            role="presentation"
            style={{
                left: x.to((x_to) => `${x_to}px`),
                top: y.to((y_to) => `${y_to}px`),
                width: width.to((w) => `${w}px`),
                height: height.to((h) => `${h}px`),
            }}
        >
            <div className="flex flex-col items-center justify-center">
                {hovered.isHovered && hovered.hoverType === hoverType.link && (
                    <LuArrowUpRight className="text-white mix-blend-difference" />
                )}
            </div>
            <div
                className={`pointer-events-none absolute -top-1.25 -left-1.25 h-[calc(100%+10px)] w-[calc(100%+10px)] rounded-xl bg-radial from-transparent from-30% to-slate-50/50 blur-xs transition-all duration-100 ${cursorClick ? "opacity-100" : "opacity-0"}`}
            />
            {hovered.isHovered && hovered.hoverMessage && (
                <div
                    className="absolute rounded-sm border border-white/10 bg-black/70 px-1 py-0.5 text-xs text-white"
                    style={{
                        top: "calc(100% + 2px)",
                        left: "calc(100% + 2px)",
                    }}
                >
                    <span
                        className="line-clamp-1 whitespace-nowrap"
                        role="presentation"
                    >
                        {hovered.hoverMessage}
                    </span>
                </div>
            )}
        </animated.div>
    );
}
