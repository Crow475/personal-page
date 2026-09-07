"use client";

import type { NavDestination } from "@/lib/types";

import { usePathname } from "next/navigation";

import NavLinkAtom from "@/components/atoms/navLink";

export default function NavbarLink({
    destination,
}: {
    destination: NavDestination;
}) {
    const pathname = usePathname();
    const isCurrentPage = pathname === destination.href;

    return (
        <li>
            <NavLinkAtom
                href={destination.href}
                className="group relative z-30 flex flex-col items-center justify-center px-2 py-1"
                disabled={isCurrentPage}
            >
                <span
                    className={`text-lg font-bold ${isCurrentPage ? "text-neutral-400/50" : "text-white"}`}
                >
                    {destination.title}
                </span>
                <div
                    className={`flex h-0 border transition-all duration-300 motion-reduce:transition-none ${isCurrentPage ? "w-full border-neutral-400/50" : "w-0 border-transparent group-hover:w-full group-hover:border-white"}`}
                />
            </NavLinkAtom>
        </li>
    );
}
