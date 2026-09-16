import NavbarLink from "@/components/molecules/navbarLink";

import { Destinations } from "@/lib/destinations";

export default function Navbar() {
    return (
        <nav className="absolute top-5 right-5 flex flex-row items-center justify-center rounded-lg border border-white/30 px-2 py-1">
            <ul className="flex flex-row items-center justify-center space-x-2">
                {Destinations.map((destination) => (
                    <NavbarLink
                        key={destination.href}
                        destination={destination}
                    />
                ))}
            </ul>
            <div
                className="absolute z-10 h-full w-full rounded-lg bg-black"
                role="presentation"
            ></div>
        </nav>
    );
}
