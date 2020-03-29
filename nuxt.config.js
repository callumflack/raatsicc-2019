import pkg from "./package";
import config from "./config";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import apolloConfig from "./apollo/config";
import fetch from "node-fetch";
import gql from "graphql-tag";

const baseURL = config.PROD ? config.SITE_URL : "http://localhost";

// Apollo client for fetching list of routes to generate
const apolloConfigData = apolloConfig();
const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: apolloConfigData.httpEndpoint,
    headers: {
      Authorization: apolloConfigData.getAuth(),
    },
    fetch,
  }),
  cache: new InMemoryCache(),
});

module.exports = {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "RAATSICC | Protecting Kids Our Way since 1990",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    // preload a webfont
    // eslint-disable-next-line no-dupe-keys
    link: [
      {
        rel: "preload",
        href: "/../../fonts/Malabar-LT-W01-Regular.woff",
        as: "font",
        type: "font/woff",
        crossorigin: true,
      },
    ],
    // Stripe
    script: [
      { src: "https://js.stripe.com/v3/" }, // Used for the donation button
    ],
    htmlAttrs: {
      lang: "en",
    },
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#d66633" },

  /*
   ** Global CSS
   */
  css: [],

  // https://github.com/nuxt-community/tailwindcss-module
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    purgeCSSInDev: false,
    exposeConfig: false,
    purgeCSS: {
      // whitelist: ["svg-icon", "svg-fill"],
      // paths: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue']
    },
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/vue-headroom",
    "@/plugins/vue-moment",
    "~/plugins/vue-svgicon",
    {
      src: "~/plugins/v-lazy-image",
      ssr: false,
    },
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/apollo",
    "@nuxtjs/axios",
    // For proxing request to netlify lambda functions
    "@nuxtjs/proxy",
    "portal-vue/nuxt",
    "@nuxtjs/markdownit",
    "@nuxtjs/sitemap",
  ],

  buildModules: [
    // https://github.com/nuxt-community/gtm-module
    // "@nuxtjs/gtm",
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/stylelint-module
    "@nuxtjs/stylelint-module",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  env: {
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    // LAMBDA_FUNCTIONS_BASE_URL: process.env.LAMBDA_FUNCTIONS_BASE_URL,
    // CONTACT_FORM_TO: process.env.CONTACT_FORM_TO,
    // DATO_API_TOKEN: process.env.DATO_API_TOKEN
  },

  proxy: {
    "/.netlify": {
      target: `${baseURL}:9000`,
      pathRewrite: { "^/.netlify/functions": "" },
    },
  },

  router: {
    middleware: "currentPage",
  },

  apollo: {
    clientConfigs: {
      default: "~/apollo/config.js",
    },
  },

  axios: {},

  markdownit: {
    injected: true,
    html: true,
    linkify: true,
    use: ["markdown-it-attrs"],
  },

  /* https://github.com/nuxt-community/sitemap-module */
  sitemap: {
    hostname: config.SITE_URL,
  },

  /*
   ** Build configuration: extend webpack config here
   */
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Disable a plugin by passing false as value
      plugins: [
        require("postcss-import"),
        require("tailwindcss")("./tailwind.config.js"),
      ],
    },
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },

  generate: {
    fallback: "404.html",
    async routes() {
      const data = await apolloClient.query({
        query: gql`
          {
            allWhatSubpages {
              slug
            }
            # default 20, max 100
            # https://www.datocms.com/docs/content-delivery-api/pagination
            allPosts(first: 100, orderBy: [datePublished_DESC]) {
              slug
            }
          }
        `,
      });

      const whatWeDoRoutes = data.data.allWhatSubpages.map(
        page => `/what-we-do/${page.slug}`
      );

      const postRoutes = data.data.allPosts.map(page => `/news/${page.slug}`);

      return [...whatWeDoRoutes, ...postRoutes];
    },
  },
};
