import { defineType, defineField } from "sanity";

export const skillType = defineType({
    name: "skill",
    title: "Skill",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
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
            name: "techDescription",
            title: "Technology Description",
            type: "text",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "techLink",
            title: "Technology Link",
            type: "url",
        }),
        defineField({
            name: "experienceYearsTotal",
            title: "Experience Years Total",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "experienceYearsProfessional",
            title: "Experience Years Professional",
            type: "number",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "experienceLevel",
            title: "Experience Level",
            type: "string",
            options: {
                list: [
                    { title: "Beginner", value: "beginner" },
                    { title: "Intermediate", value: "intermediate" },
                    { title: "Advanced", value: "advanced" },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "experienceDescription",
            title: "Experience Description",
            type: "text",
        }),
    ],
});
