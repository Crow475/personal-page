import { LuHouse, LuUser, LuSquareTerminal } from "react-icons/lu";

type NavDestination = {
    href: string;
    title: string;
    icon: React.ReactNode;
};

/**
 * Static list of navigation destinations for all pages.
 * To be used in all navigation components (navbar, footer, etc.)
 */
const Destinations: NavDestination[] = [
    {
        href: "/",
        title: "Home",
        icon: <LuHouse />,
    },
    {
        href: "/about",
        title: "About",
        icon: <LuUser />,
    },
    {
        href: "/projects",
        title: "Projects",
        icon: <LuSquareTerminal />,
    },
];

export { Destinations, type NavDestination };
