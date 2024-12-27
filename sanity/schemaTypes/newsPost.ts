import { defineField, defineType } from "sanity";

// Category type for predefined news categories
export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
  ],
});

// Author type with verification status
export const author = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "verified",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "credentials",
      type: "text",
    }),
  ],
});

// Main news post schema
export const newsPost = defineType({
  name: "newsPost",
  title: "News Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(300),
    }),
    defineField({
      name: "body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
            {
              name: "attribution",
              type: "string",
              title: "Attribution",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "views",
      type: "number",
      initialValue: 0,
    }),
    defineField({
      name: "verificationStatus",
      type: "string",
      options: {
        list: [
          { title: "Verified", value: "verified" },
          { title: "Under Review", value: "reviewing" },
          { title: "Disputed", value: "disputed" },
          { title: "False", value: "false" },
        ],
      },
      initialValue: "reviewing",
    }),
    defineField({
      name: "sources",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", type: "string" },
            { name: "url", type: "url" },
            { name: "description", type: "text" },
          ],
        },
      ],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      status: "verificationStatus",
    },
    prepare(selection) {
      const { author, status } = selection;
      return {
        ...selection,
        subtitle: `${status.toUpperCase()} | By ${author}`,
      };
    },
  },
});
