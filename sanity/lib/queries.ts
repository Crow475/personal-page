import { defineQuery } from "next-sanity";

export const infoQuery = defineQuery(
    `*[_type == "info"][0]{"imageUrl": avatar.asset->url}`,
);

export const locationQuery = defineQuery(
    `*[_type == "location"][0]{header, latitude, longitude, address, timezone, description}`,
);
