<template>
  <div>
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <ContentColumn v-else>
      <PostExcerpt
        v-for="(post, index) in posts"
        :key="index"
        :slug="post.slug"
        :image="post.image"
        :title="post.title"
        :date="post.datePublished"
        :excerpt="post.excerpt"
        :staff="post.isStaff"
      />
      <PostArchiveLink />
    </ContentColumn>
  </div>
</template>

<script>
import ContentColumn from "~/components/ContentColumn.vue";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import PostArchiveLink from "~/components/PostArchiveLink.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import gql from "graphql-tag";
import head, { metaTagsQuery } from "~/mixins/head";

export default {
  apollo: {
    allPosts: gql`
      {
        allPosts(orderBy: [datePublished_DESC]) {
          _firstPublishedAt
          slug
          title
          excerpt
          datePublished
          isStaff
          image {
            url
          }
        }
      }
    `,
    page: gql`
      {
        page: newsPage {
          ${metaTagsQuery}
        }
      }
    `,
  },
  components: {
    ContentColumn,
    LoadingSpinner,
    PostArchiveLink,
    PostExcerpt,
  },
  mixins: [head],
  data: () => ({ allPosts: [], page: null }),
  computed: {
    posts() {
      // map, reduce or filter:
      return this.allPosts.filter((x) => x.isStaff).slice(0, 9);
    },
  },
};
</script>
