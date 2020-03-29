<template>
  <div>
    <hr class="Section--rule Rule mb-4" />
    <div class="flex flex-col sm:flex-row justify-between mb-4 text-gray">
      <div class="flex">
        <span class="mr-3">Share this article:</span>
        <!-- facebook -->
        <a
          class="Post-share"
          :href="facebookUrl"
          target="_blank"
          rel="noopener"
          aria-label="Share on Facebook"
        >
          <icon name="facebook" height="30" width="30" />
        </a>
        <!-- email -->
        <a
          class="Post-share"
          :href="emailUrl"
          target="_blank"
          rel="noopener"
          aria-label="Share by email"
        >
          <icon name="email-circle" height="30" width="30" />
        </a>
      </div>
      <!-- back to news -->
      <nuxt-link to="/news" class="text-gray mt-1 sm:mt-0">
        See all news
        <icon name="arrow-forward" height="14" width="14" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
let baseUrl = "https%3A//raatsicc.org.au";
let linkText = "Check%20out%20this%20article%20from%20RAATSICC&amp;";

export default {
  props: ["slug"],
  computed: {
    /* see: https://sharingbuttons.io/ + http://www.sharelinkgenerator.com/ */
    facebookUrl() {
      return `https://facebook.com/sharer/sharer.php?u=${baseUrl}/${this.slug}`;
    },
    emailUrl() {
      return `mailto:?subject=${linkText}&body=${baseUrl}/${this.slug}`;
    },
  },
};
</script>

<style lang="postcss" scoped>
.Post-share {
  @apply block mr-3;
  transform: translateY(-2px);
}
</style>
