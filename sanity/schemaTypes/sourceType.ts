import { defineType } from "sanity";

export const sourceType = defineType({
  name: "source",
  title: "Source",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "url",
      title: "URL",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "reliability",
      title: "Source Reliability",
      type: "string",
      options: {
        list: [
          { title: "Highly Reliable", value: "high" },
          { title: "Reliable", value: "medium" },
          { title: "Questionable", value: "low" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "verifiedDate",
      title: "Verification Date",
      type: "datetime",
    },
    {
      name: "notes",
      title: "Editorial Notes",
      type: "text",
    },
  ],
});
