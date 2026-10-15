import { defineType, defineField } from "sanity";

export const socialType = defineType({
    name: "social",
    title: "Social",
    type: "document",
    fields: [
        defineField({
            name: "type",
            title: "Type",
            type: "string",
            options: {
                list: [
                    { title: "Email", value: "EMAIL" },
                    { title: "Telegram", value: "TELEGRAM" },
                    { title: "GitHub", value: "GITHUB" },
                    { title: "LinkedIn", value: "LINKEDIN" },
                    { title: "Mastodon", value: "MASTODON" },
                    { title: "Bluesky", value: "BLUESKY" },
                    { title: "Discord", value: "DISCORD" },
                    { title: "Signal", value: "SIGNAL" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "href",
            title: "Href",
            type: "url",
            validation: (Rule) =>
                Rule.required().uri({ scheme: ["http", "https", "mailto"] }),
        }),
        defineField({
            name: "linkTitle",
            title: "Link Title",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "copyDescription",
            title: "Copy Description",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "copyContent",
            title: "Copy Content",
            type: "string",
            validation: (Rule) => Rule.required(),
        }),
    ],
});
