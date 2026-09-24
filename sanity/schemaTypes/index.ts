import { type SchemaTypeDefinition } from "sanity";

import { infoType } from "./infoType";
import { locationType } from "./locationType";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [infoType, locationType],
};
