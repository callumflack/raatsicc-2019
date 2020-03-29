<template>
  <header class="Stripe" :class="rootClasses">
    <ImageDynamic class="Stripe-image" :src="image" :alt="alt" />
    <slot></slot>
    <!-- <div class="Stripe-inner"></div> -->
  </header>
</template>

<script>
import ImageDynamic from "~/components/ImageDynamic";

export default {
  components: {
    ImageDynamic,
  },
  props: {
    image: String,
    alt: String,
    color: String,
  },
  computed: {
    rootClasses() {
      return this.color && `bg-brand-${this.color}`;
    },
  },
};
</script>

<style lang="postcss" scoped>
.Stripe {
  @apply relative overflow-hidden flex-grow;
  height: auto;
  transition: background-color 500ms ease, transform 500ms ease-in-out;
}

.Stripe-image {
  @apply absolute inset-0 h-full w-full object-cover opacity-75;
  mix-blend-mode: multiply;
  transition: transform 250ms ease;
}

@screen lg {
  .Stripe {
    height: calc(100vh * 1 / 3);
  }
}
</style>
