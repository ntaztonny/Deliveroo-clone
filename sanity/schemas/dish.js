export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of dish",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "Short_description",
      type: "string",
      title: "short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      type: "number",
      title: "Price of the dish in EUR",
    },
    {
      name: "image",
      type: "image",
      title: "Image of the dish",
    },
  ],
};
