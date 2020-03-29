<template>
  <nav class="Section">
    <div class="flex flex-col sm:flex-row">
      <HeroBlock
        v-for="item in blockItems"
        :key="item.label"
        :to="item.to"
        :label="item.label"
        :image="item.image"
        :color="item.color"
        :cta="item.cta"
        :cta-reposition="item.ctaReposition"
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
          label: "About us",
          to: "/about",
          image:
            "https://www.datocms-assets.com/11614/1557789763-block-bw-flying.jpg?w=500&q=40&auto=format",
          color: "red",
          cta: "On location since 1990",
        },
        {
          label: "What we do",
          to: "/what-we-do",
          image:
            "https://www.datocms-assets.com/11614/1557789774-block-bw-looking.jpg?w=500&q=40&auto=format",
          color: "green",
          cta: "Our four core services",
        },
        {
          label: "Join & contribute",
          to: "/volunteer",
          image:
            "https://www.datocms-assets.com/11614/1557790416-handprint.png?w=500&q=40&fm=png&auto=format",
          color: "",
          cta: "Volunteer with us",
          ctaReposition: true,
        },
        {
          label: "See our events",
          to: "/news/events",
          image:
            "https://www.datocms-assets.com/11614/1557789749-block-bw-dancing.jpg?w=500&q=40&auto=format",
          color: "blue",
          cta: "Come join us",
        },
      ],
    };
  },
};
</script>

<style></style>
