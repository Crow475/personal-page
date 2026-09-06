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

type NavDestination = {
    href: string;
    title: string;
    icon: React.ReactNode;
};

export { hoverType, type CursorState, type NavDestination };
