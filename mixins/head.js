/*
 * Head mixin
 *
 * Used in pages to set meta tags pulled from Dato
 */

import config from "../config";

// This snippet is used to fetch metaTags on all pages
export const metaTagsQuery = `
  metaTags {
    title
    description
  }
`;

export default {
  head() {
    const metaTags = this.page && this.page.metaTags;

    if (!metaTags) {
      // On client side render (or pages where this.page is not set)
      // this.page will not be defined on first head() call
      // This is not an issue when generating static site as all pages are
      // rendered server side, no client side navigation occurs
      return {};
    }

    return {
      title: `${metaTags.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${metaTags.description}`,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `${config.SITE_URL}${this.$route.path}`,
        },
      ],
    };
  },
};
