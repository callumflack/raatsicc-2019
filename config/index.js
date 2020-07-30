/*
 * Configuration file
 * For application wide access to environment variables and shared site data
 *
 * Sensitive data should be stored in a .env file
 */

export default {
  PROD: process.env.NODE_ENV === "production",

  // Dato <> Nuxt Static preview?
  PREVIEW: false,

  // Meta
  SITE_URL: "https://www.raatsicc.org.au",

  // Read only token
  DATO_CMS_API_TOKEN: "55524c93dac61709c12e1514c04412",
};
