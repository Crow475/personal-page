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

export const projectsQuery = defineQuery(
    `*[_type == "project"]{"imageUrl": coverImage.asset->url, coverImageAlt, name, shortName, slug, shortDescription, codeLink}`,
);

export const homePageContentQuery = defineQuery(
    `*[_type == "homePageContent"][0]{featuredProjects[]->{"imageUrl": coverImage.asset->url, coverImageAlt, name, shortName, slug, shortDescription, codeLink}, heroParagraph, projectsLinkText, contactLinkText, projectSectionTitle, aboutSectionTitle, contactSectionTitle}`,
);
