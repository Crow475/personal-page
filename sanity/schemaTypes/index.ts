import { type SchemaTypeDefinition } from "sanity";

import { infoType } from "./infoType";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [infoType],
};
