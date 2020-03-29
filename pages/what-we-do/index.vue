<template>
  <div>
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <div v-else>
      <HeroBlocksWhat />

      <ContentColumn text>
        <h3 class="Heading italic">
          {{ page.subtitle }}
        </h3>
      </ContentColumn>
      <ContentColumn>
        <div class="Markdown" v-html="$md.render(page.lede)" />
        <div class="Markdown st-p">
          <ul v-if="allWhatSubpages">
            <li v-for="item in allWhatSubpages" :key="item.title">
              <nuxt-link :to="`/what-we-do/${item.slug}`">
                {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </ContentColumn>
    </div>
  </div>
</template>

<script>
import HeroBlocksWhat from "~/components/HeroBlocksWhat.vue";
import ContentColumn from "~/components/ContentColumn.vue";
import LoadingSpinner from "~/components/LoadingSpinner";
import gql from "graphql-tag";
import head, { metaTagsQuery } from "~/mixins/head";

export default {
  components: {
    LoadingSpinner,
    HeroBlocksWhat,
    ContentColumn,
  },
  apollo: {
    allWhatSubpages: gql`
      {
        allWhatSubpages {
          slug
          title
        }
      }
    `,
    page: gql`
      {
        page: whatPage {
          subtitle
          lede
          ${metaTagsQuery}
        }
      }
    `,
  },
  mixins: [head],
  data: () => ({ page: null }),
};
</script>
