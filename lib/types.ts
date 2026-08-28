enum hoverType {
    button = "Button",
    link = "Link",
}

type CursorState = {
    isHovered: boolean;
    hoveredRef: React.RefObject<HTMLElement | null> | null;
    hoverType: hoverType | null;
    hoverMessage: string | null;
};

export { hoverType, type CursorState };
