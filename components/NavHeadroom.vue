<template>
  <headroom :speed="500" :z-index="101" :offset="150">
    <NavTop />
    <NavTopMobile class="block sm:hidden" />
  </headroom>
</template>

<script>
import NavTop from "~/components/NavTop";
import NavTopMobile from "~/components/NavTopMobile";
import { headroom } from "vue-headroom";

export default {
  components: {
    headroom,
    NavTop,
    NavTopMobile
  }
};
</script>

<style lang="postcss">
.headroom--pinned:not(.headroom--top) {
  top: -1px !important;
}

@screen sm {
  .headroom--pinned:not(.headroom--top) {
    top: -91px !important;
  }
}
</style>
