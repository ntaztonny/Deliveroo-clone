import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "lwb884pu",
  dataset: "production",
  useCdn: "true",
  apiVersion: "2021-03-25",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
