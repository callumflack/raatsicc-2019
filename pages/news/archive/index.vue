<template>
  <div>
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <ContentColumn v-else>
      <PostArchiveExcerpt
        v-for="(post, index) in allPosts"
        :key="index"
        :slug="post.slug"
        :title="post.title"
        :date="post.datePublished"
        :job="post.isJob"
        :staff="post.isStaff"
        :event="post.isEvent"
      ></PostArchiveExcerpt>
    </ContentColumn>
  </div>
</template>

<script>
import ContentColumn from "~/components/ContentColumn.vue";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import PostArchiveExcerpt from "~/components/PostArchiveExcerpt.vue";
import gql from "graphql-tag";

export default {
  apollo: {
    allPosts: gql`
      {
        # default 20, max 100
        # https://www.datocms.com/docs/content-delivery-api/pagination
        allPosts(first: 100, skip: 6, orderBy: [datePublished_DESC]) {
          _firstPublishedAt
          slug
          title
          excerpt
          datePublished
          isEvent
          isJob
          isStaff
        }
      }
    `,
  },
  components: {
    ContentColumn,
    PostArchiveExcerpt,
    LoadingSpinner,
  },
  data: () => ({ allPosts: [] }),
};
</script>
