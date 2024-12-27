import { defineType } from "sanity";

export const verificationStatus = defineType({
  name: "verificationStatus",
  title: "Verification Status",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      options: {
        list: [
          { title: "Verified", value: "verified" },
          { title: "Under Review", value: "reviewing" },
          { title: "Disputed", value: "disputed" },
          { title: "False", value: "false" },
        ],
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "color",
      title: "Status Color",
      type: "string",
      options: {
        list: [
          { title: "Green", value: "green" },
          { title: "Yellow", value: "yellow" },
          { title: "Orange", value: "orange" },
          { title: "Red", value: "red" },
        ],
      },
    },
  ],
});
