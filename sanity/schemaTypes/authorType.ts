import { defineType, defineField } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
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
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "text",
    }),
    defineField({
      name: "credentials",
      title: "Credentials",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "institution", type: "string" },
            { name: "year", type: "number" },
          ],
        },
      ],
    }),
    defineField({
      name: "verificationLevel",
      title: "Verification Level",
      type: "string",
      options: {
        list: [
          { title: "Verified Expert", value: "expert" },
          { title: "Verified Journalist", value: "journalist" },
          { title: "Contributor", value: "contributor" },
        ],
      },
    }),
  ],
});
