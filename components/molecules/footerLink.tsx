"use client";

import type { NavDestination } from "@/lib/destinations";

import LinkAtom from "@/components/atoms/link";

export default function FooterLink({
    destination,
}: {
    destination: NavDestination;
}) {
    return (
        <li>
            <LinkAtom
                href={destination.href}
                className="group relative z-30 flex flex-col items-center justify-center px-2 py-1"
            >
                <span className="text-lg font-bold text-white">
                    {destination.title}
                </span>
                <div className="flex h-0 w-0 border transition-all duration-300 group-hover:w-full group-hover:border-white motion-reduce:transition-none" />
            </LinkAtom>
        </li>
    );
}
