/*
 * Configuration file
 * For application wide access to environment variables and shared site data
 *
 * Sensitive data should be stored in a .env file
 */

export default {
  PROD: process.env.NODE_ENV === "production",

  /* Meta */
  SITE_URL: "https://www.raatsicc.org.au",

  // Read only token
  DATO_CMS_API_TOKEN: "512356dde044c448b976d360f3c789"
};