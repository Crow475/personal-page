import { type SchemaTypeDefinition } from "sanity";

import { infoType } from "./infoType";
import { locationType } from "./locationType";
import { socialType } from "./socialType";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [infoType, locationType, socialType],
};
