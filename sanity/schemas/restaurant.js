export default {
  name: "restaurant",
  title: "Restaurant",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Restaurant name",
      validation: (rule) => rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (rule) => rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of the Resaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "Latitude of the Restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "Longtitude of the Restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "Restaurant Address",
      validation: (rule) => rule.required(),
    },

    {
      name: "rating",
      type: "number",
      title: "Enter a rating (1-5 stars)",
      validation: (rule) =>
        rule
          .required()
          .min(1)
          .max(5)
          .error("Please enter a value between 1 and 5"),
    },
    {
      name: "type",
      title: "Gategory",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
};
