<template>
  <nav class="Section">
    <div class="flex flex-col sm:flex-row">
      <HeroBlock
        v-for="item in blockItems"
        :key="item.label"
        :href="item.href"
        :label="item.label"
        :image="item.image"
        :color="item.color"
        class="w-full sm:w-1/2 lg:w-1/4"
      />
    </div>
  </nav>
</template>

<script>
import HeroBlock from "~/components/HeroBlock.vue";

export default {
  components: {
    HeroBlock,
  },
  data() {
    return {
      blockItems: [
        {
          label: "Our Story",
          href: "#story",
          image:
            "https://www.datocms-assets.com/11614/1557789783-block-bw-team.jpg?w=500&q=40&auto=format",
          color: "red",
        },
        {
          label: "Management Committee",
          href: "#team",
          image:
            "https://www.datocms-assets.com/11614/1557789770-block-bw-handprint.jpg?w=500&q=40&auto=format",
          color: "green",
        },
        {
          label: "Our Constitution",
          href: "#constitution",
          image:
            "https://www.datocms-assets.com/11614/1557789780-block-bw-table.jpg?w=500&q=40&auto=format",
          color: "blue",
        },
        {
          label: "Become a Member",
          href: "#member",
          image:
            "https://www.datocms-assets.com/11614/1557789783-block-bw-team.jpg?w=500&q=40&auto=format",
          color: "orange",
        },
      ],
    };
  },
};
</script>

<style></style>
