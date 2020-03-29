import config from "../config/index.js";

export default function() {
  return {
    httpEndpoint: "https://graphql.datocms.com",
    getAuth: () => config.DATO_CMS_API_TOKEN, // Bearer added by default
  };
}
