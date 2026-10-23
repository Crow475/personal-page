import { type SchemaTypeDefinition } from "sanity";

import { infoType } from "./infoType";
import { locationType } from "./locationType";
import { socialType } from "./socialType";
import { projectType } from "./projectType";
import { skillType } from "./skillType";
import { homePageContentType } from "./homeType";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [
        infoType,
        locationType,
        socialType,
        projectType,
        skillType,
        homePageContentType,
    ],
};
