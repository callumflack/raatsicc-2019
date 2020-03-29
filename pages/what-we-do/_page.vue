<template>
  <div>
    <HeroBlocksWhat class="nested-blocks" />

    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <ContentColumn v-else>
      <div class="Markdown" v-html="$md.render(page.body)" />
    </ContentColumn>
  </div>
</template>

<script>
import ContentColumn from "~/components/ContentColumn";
import HeroBlocksWhat from "~/components/HeroBlocksWhat.vue";
import LoadingSpinner from "~/components/LoadingSpinner";
import gql from "graphql-tag";
import head, { metaTagsQuery } from "~/mixins/head";

export default {
  apollo: {
    page: {
      query: gql`
        query page($slug: String!) {
          page: whatSubpage(filter: { slug: { eq: $slug } }) {
            body
            ${metaTagsQuery}
          }
        }
      `,
      prefetch({ route }) {
        return {
          slug: route.params.page,
        };
      },
      variables() {
        return {
          slug: this.$route.params.page,
        };
      },
    },
  },
  components: {
    ContentColumn,
    HeroBlocksWhat,
    LoadingSpinner,
  },
  mixins: [head],
  data: () => ({ page: null }),
};
</script>

<style lang="postcss" scoped>
/* .nested-blocks >>> .Block:not(:hover):not(.nuxt-link-active) {
  @apply bg-brand-dust;
} */

/* .nested-blocks >>> .nuxt-link-active {
  @apply z-10;
  box-shadow: theme(colors.white) 0 0 0 2px;
  transform: scale(1.025);
}

.nested-blocks >>> .nuxt-link-active:hover {
  background-color: unset;
}

.nested-blocks >>> .nuxt-link-active:hover .Block-image {
  transform: scale(1);
} */

/* .nested-blocks >>> .Block:not(.nuxt-link-active) .Block-inner {
  background-color: rgba(0, 0, 0, 0.5);
  background-color: rgba(181, 171, 156, 0.4);
} */

.nested-blocks >>> .Block:not(.nuxt-link-active) .Block-image {
  opacity: 0.1;
}
/* .nested-blocks >>> .Block.nuxt-link-active .Block-image {
  opacity: 0.125;
} */
</style>
