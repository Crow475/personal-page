import { LuMapPin, LuClock } from "react-icons/lu";

import { inter, silkscreen } from "@/lib/fonts";
import DraggableMap from "@/components/atoms/draggableMap";

import { client } from "@/sanity/lib/client";
import { locationQuery } from "@/sanity/lib/queries";

export default async function MyLocation() {
    const location = await client.fetch(locationQuery);

    const coordinates: [number, number] = [
        location.latitude,
        location.longitude,
    ];

    return (
        <section className="flex w-160 flex-row items-center justify-between">
            <DraggableMap
                marker={coordinates.toReversed() as [number, number]}
                scale={400}
                width={300}
                height={300}
                className="relative flex h-75 w-75 flex-col items-center justify-center border border-white/50"
            />
            <div className="flex h-75 w-1/2 flex-col items-start justify-start space-y-6 px-2 py-3">
                <div className="flex flex-col items-start justify-start">
                    <h3
                        className={`${inter.className} text-4xl font-bold text-white`}
                    >
                        {location.header}
                    </h3>
                    <span className={`${silkscreen.className} text-blue-400`}>
                        {"[" + coordinates[0] + ", " + coordinates[1] + "]"}
                    </span>
                </div>
                <div className="flex flex-row items-center justify-start space-x-3">
                    <LuMapPin className="h-6 w-6 text-neutral-400" />
                    <span className="text-lg text-white">
                        {location.address}
                    </span>
                </div>
                <div className="flex flex-row items-center justify-start space-x-3">
                    <LuClock className="h-6 w-6 text-neutral-400" />
                    <span className="text-lg text-white">
                        {location.timezone}
                    </span>
                </div>
                <p className="text-white">{location.description}</p>
            </div>
        </section>
    );
}
