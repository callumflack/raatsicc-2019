<template>
  <nuxt-link :to="tagLink" class="Post-tag">{{ tag }}</nuxt-link>
</template>

<script>
export default {
  props: {
    tag: String,
  },
  // data: () => ({ tag: "" }),
  computed: {
    tagLink() {
      if (this.tag === "job") {
        return "/news/jobs";
      } else if (this.tag === "event") {
        return "/news/events";
      } else if (this.tag === "staff") {
        return "/news/staff";
      } else {
        return "/news";
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.Post-tag {
  @apply inline-block text-xs capitalize border border-gray-500 ml-1 rounded-sm;
  padding: 0.5px 4px 1px;
  transform: translateY(-1px);
}

.Post-tag:hover {
  @apply text-gray-900 border-gray-900;
}
</style>
