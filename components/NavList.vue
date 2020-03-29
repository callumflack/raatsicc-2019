<template>
  <div>
    <nuxt-link
      v-for="item in nav.items"
      :key="item.link"
      :to="item.link"
      :exact="item.exact"
      class="Nav-link"
      :class="newsLink"
    >
      <span>{{ item.label }}</span>
    </nuxt-link>
  </div>
</template>

<script>
import nav from "~/data/nav";

export default {
  data: () => ({ nav }),
  computed: {
    newsLink() {
      if (this.$route.name === "news-jobs") {
        return "is-jobs";
      } /* else if (this.$apollo.data.post.isJob === true) {
        return "is-jobs";
      } */
      return null;
    },
  },
};
</script>

<style lang="postcss" scoped>
.Nav-link {
  @apply text-sm font-medium uppercase inline-block ml-10;
  @apply border-b border-transparent;
  line-height: 5;
  transform: translateY(1px);
  transition: color 250ms ease;
}

.Nav-link:hover {
  @apply text-brand-primary;
}

.Nav-link:first-of-type {
  margin-left: 0;
}

/* [class*="page-news"] */
.Nav-link.is-jobs.nuxt-link-active {
  @apply text-gray-900 border-transparent;
}

.Nav-link.nuxt-link-active,
.Nav-link.nuxt-link-exact-active,
.Nav-link.is-jobs.nuxt-link-exact-active {
  @apply text-brand-primary border-brand-primary;
}
</style>
