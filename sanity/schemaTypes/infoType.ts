import { defineType, defineField, defineArrayMember } from "sanity";

import { socialType } from "./socialType";

export const infoType = defineType({
    name: "info",
    title: "Info",
    type: "document",
    fields: [
        defineField({
            name: "avatar",
            title: "Avatar",
            type: "image",
            readOnly: false,
        }),
        defineField({
            name: "socialsMain",
            title: "Main Socials",
            type: "array",
            of: [
                defineArrayMember({
                    type: "reference",
                    to: [{ type: "social" }],
                }),
            ],
            validation: (Rule) =>
                Rule.unique().error("Each account must be unique"),
        }),
        defineField({
            name: "socialsSecondary",
            title: "Secondary Socials",
            type: "array",
            of: [
                defineArrayMember({
                    type: "reference",
                    to: [{ type: "social" }],
                }),
            ],
            validation: (Rule) =>
                Rule.unique().error("Each account must be unique"),
        }),
        defineField({
            name: "socialsFooter",
            title: "Footer Socials",
            type: "array",
            of: [
                defineArrayMember({
                    type: "reference",
                    to: [{ type: "social" }],
                }),
            ],
            validation: (Rule) =>
                Rule.unique().error("Each account must be unique"),
        }),
        defineField({
            name: "footerEmail",
            title: "Footer Email",
            type: "reference",
            to: [{ type: "social" }],
            options: {
                filter: "type == $type",
                filterParams: { type: "EMAIL" },
            },
        }),
    ],
});
