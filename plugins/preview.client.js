import config from "../config/index.js";

// https://nuxtjs.org/blog/going-full-static
// export default async function ({ query, enablePreview }) {
// eslint-disable-next-line require-await
export default async function ({ enablePreview }) {
  if (config.PREVIEW) {
    enablePreview();
  }
}
