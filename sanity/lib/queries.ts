import { defineQuery } from "next-sanity";

export const infoFooterQuery = defineQuery(
    `*[_type == "info"][0]{"imageUrl": avatar.asset->url, "footerSocials": socialsFooter[]->, "footerEmail": footerEmail->}`,
);

export const infoSocialsQuery = defineQuery(
    `*[_type == "info"][0]{"mainSocials": socialsMain[]->, "secondarySocials": socialsSecondary[]->}`,
);

export const locationQuery = defineQuery(
    `*[_type == "location"][0]{header, latitude, longitude, address, timezone, description}`,
);
