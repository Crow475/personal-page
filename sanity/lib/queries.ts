import { defineQuery } from "next-sanity";

export const infoQuery = defineQuery(
    `*[_type == "info"][0]{"imageUrl": avatar.asset->url}`,
);
