import { defineType, defineField } from "sanity";

export const projectType = defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
        }),
        defineField({
            name: "coverImageAlt",
            title: "Cover Image Alt Text",
            type: "string",
        }),
        defineField({
            name: "shortName",
            title: "Short Name",
            type: "string",
            validation: (Rule) => Rule.required().max(96),
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "skills",
            title: "Skills",
            type: "array",
            of: [{ type: "reference", to: { type: "skill" } }],
        }),
        defineField({
            name: "shortDescription",
            title: "Short Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "array",
            of: [{ type: "block" }],
        }),
        defineField({
            name: "codeLink",
            title: "Code Link",
            type: "url",
        }),
    ],
});
