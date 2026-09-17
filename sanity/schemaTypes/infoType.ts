import { defineType, defineField } from "sanity";

export const infoType = defineType({
    name: "info",
    title: "Info",
    type: "document",
    fields: [
        defineField({
            name: "avatar",
            title: "Avatar",
            type: "image",
        }),
    ],
});
