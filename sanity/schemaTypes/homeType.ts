import { defineType, defineField } from "sanity";

export const homePageContentType = defineType({
    name: "homePageContent",
    title: "Home Page Content",
    type: "document",
    fields: [
        defineField({
            name: "featuredProjects",
            title: "Featured Projects",
            type: "array",
            of: [{ type: "reference", to: [{ type: "project" }] }],
            validation: (Rule) =>
                Rule.unique().error("Each project must be unique").max(4),
        }),
    ],
});
