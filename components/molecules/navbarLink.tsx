import type { NavDestination } from "@/lib/types";

import NavLinkAtom from "@/components/atoms/navLink";

export default function NavbarLink({
    destination,
}: {
    destination: NavDestination;
}) {
    return (
        <li>
            <NavLinkAtom
                href={destination.href}
                className="group relative z-30 flex flex-col items-center justify-center px-2 py-1 text-white"
            >
                <span className="text-lg font-bold text-white">
                    {destination.title}
                </span>
                <div className="flex h-0 w-0 border border-transparent transition-all duration-300 group-hover:w-full group-hover:border-white motion-reduce:transition-none" />
            </NavLinkAtom>
        </li>
    );
}
