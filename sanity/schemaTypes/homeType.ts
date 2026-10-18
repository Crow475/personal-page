import { defineType, defineField } from "sanity";

export const homePageContentType = defineType({
    name: "homePageContent",
    title: "Home Page Content",
    type: "document",
    fields: [
        defineField({
            name: "heroParagraph",
            title: "Hero Paragraph",
            type: "text",
            validation: (Rule) =>
                Rule.max(200).error(
                    "Hero paragraph must be at most 200 characters",
                ),
        }),
        defineField({
            name: "projectsLinkText",
            title: "Projects Link Text",
            type: "string",
            validation: (Rule) =>
                Rule.max(50).error(
                    "Projects link text must be at most 50 characters",
                ),
        }),
        defineField({
            name: "contactLinkText",
            title: "Contact Link Text",
            type: "string",
            validation: (Rule) =>
                Rule.max(50).error(
                    "Contact link text must be at most 50 characters",
                ),
        }),
        defineField({
            name: "projectSectionTitle",
            title: "Project Section Title",
            type: "string",
        }),
        defineField({
            name: "featuredProjects",
            title: "Featured Projects",
            type: "array",
            of: [{ type: "reference", to: [{ type: "project" }] }],
            validation: (Rule) =>
                Rule.unique().error("Each project must be unique").max(4),
        }),
        defineField({
            name: "aboutSectionTitle",
            title: "About Section Title",
            type: "string",
        }),
        defineField({
            name: "contactSectionTitle",
            title: "Contact Section Title",
            type: "string",
        }),
    ],
});
