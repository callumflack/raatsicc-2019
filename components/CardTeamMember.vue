<template>
  <div class="Card">
    <Aspect class="Card-image" ratio="1.25">
      <img v-if="image" :src="`${image.url}?w=380&q=33&auto=format`" :alt="name" />
      <img
        v-else
        src="https://www.datocms-assets.com/11614/1557801537-logo-symbol.png?w=150&q=40&fm=png&auto=format"
        alt="RAATSICC logo as a placeholder for the team member portrait"
        class="Card-image-placeholder"
      />
    </Aspect>
    <p class="Meta font-bold mb-0">{{ name }}</p>
    <p class="Meta mb-0">{{ title }}</p>
    <p class="Meta text-gray mb-0">{{ location }}</p>
  </div>
</template>

<script>
import Aspect from "~/components/Aspect";

export default {
  components: {
    Aspect,
  },
  props: ["image", "name", "title", "location"],
};
</script>

<style lang="postcss" scoped>
.Card:nth-of-type(2),
.Card:nth-of-type(3) {
  @apply mb-3;
}

/* override .Grid-item */
.Card + .Card {
  @apply mt-0;
}

.Card-image {
  @apply bg-gray-300 mt-0 mb-3 !important;
  /* padding-bottom: 125%; */
}

.Card-image-placeholder {
  margin: auto;
  height: auto;
  width: 33%;
}

@screen sm {
  .Card:nth-of-type(2),
  .Card:nth-of-type(3) {
    @apply mb-4;
  }
}
</style>
