import type { NavDestination } from "@/lib/types";

import { LuHouse, LuUser, LuSquareTerminal } from "react-icons/lu";

/**
 * Static list of navigation destinations for all pages.
 * To be used in all navigation components (navbar, footer, etc.)
 */
const destinations: NavDestination[] = [
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

export default destinations;
