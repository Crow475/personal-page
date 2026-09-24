import { defineType, defineField } from "sanity";

export const locationType = defineType({
    name: "location",
    title: "Location",
    type: "document",
    fields: [
        defineField({
            name: "header",
            title: "Header",
            type: "string",
        }),
        defineField({
            name: "latitude",
            title: "Latitude",
            type: "number",
        }),
        defineField({
            name: "longitude",
            title: "Longitude",
            type: "number",
        }),
        defineField({
            name: "address",
            title: "Address",
            type: "string",
        }),
        defineField({
            name: "timezone",
            title: "Timezone",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
    ],
});
