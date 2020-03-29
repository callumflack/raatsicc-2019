<template>
  <nav class="Section">
    <div class="flex flex-col sm:flex-row">
      <HeroBlock
        v-for="item in WhatPage.blocks"
        :key="item.label"
        :to="item.to"
        :label="item.label"
        :cta="item.sublabel"
        :image="item.image"
        :color="item.color"
        class="w-full sm:w-1/2 lg:w-1/4"
      />
    </div>
  </nav>
</template>

<script>
import HeroBlock from "~/components/HeroBlock";
import WhatPage from "~/data/what-page";

export default {
  components: {
    HeroBlock,
  },
  data() {
    return {
      /*
        To reduce complexity, this data isn't from Dato.
        It's just a nice, quick .json.
      */
      WhatPage,
    };
  },
};
</script>
