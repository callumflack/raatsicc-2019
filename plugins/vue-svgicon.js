import Vue from "vue";
import SvgIcon from "vue-svgicon";
import "~/components/icons";

/* https://github.com/MMF-FE/vue-svgicon */

Vue.use(SvgIcon, {
  tagName: "icon",
  defaultWidth: "1.125em",
  defaultHeight: "1.125em",
});
