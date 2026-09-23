"use client";

import { useRef } from "react";

import { ZoomPanCallbackProps, ZoomGestureEvent } from "react-simple-maps";

import {
    useCursor,
    defaultCursorState,
    CursorState,
    HoverType,
} from "@/lib/cursorLib";

import Map from "@/components/atoms/map";

export default function DraggableMap({
    marker,
    scale,
    width,
    height,
    className,
}: {
    marker: [number, number];
    scale: number;
    width: number;
    height: number;
    className?: string;
}) {
    const { setHovered, setOverrideLocation } = useCursor();
    const mapRef = useRef<HTMLDivElement>(null);

    const dragCursorState: CursorState = {
        isHovered: true,
        hoveredRef: mapRef,
        hoverType: HoverType.drag,
        hoverMessage: "",
    };

    function handleDragStart() {
        setHovered(dragCursorState);
    }

    function handleDragEnd() {
        setHovered(defaultCursorState);
        setOverrideLocation(null);
    }

    function handleDrag(props: ZoomPanCallbackProps, event: ZoomGestureEvent) {
        setHovered(dragCursorState);
        setOverrideLocation({
            x: event.sourceEvent.clientX ? event.sourceEvent.clientX : 0,
            y: event.sourceEvent.clientY ? event.sourceEvent.clientY : 0,
        });
    }

    return (
        <Map
            marker={marker}
            scale={scale}
            width={width}
            height={height}
            className={className}
            ref={mapRef}
            onMoveStart={handleDragStart}
            onMoveEnd={handleDragEnd}
            onMove={handleDrag}
        />
    );
}
