<template>
  <div>
    <HeroBlocksHome />
    <!-- <div v-if="$apollo.queries.allPosts.loading" class="Loading"> -->
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <ContentColumn v-else>
      <PostExcerpt
        v-for="(post, index) in allPosts"
        :key="index"
        :slug="post.slug"
        :image="post.image"
        :title="post.title"
        :date="post.datePublished"
        :excerpt="post.excerpt"
        :job="post.isJob"
        :staff="post.isStaff"
        :event="post.isEvent"
      />
      <p class="Section text-right">
        <nuxt-link to="/news" class="Button Button--outline">
          View all news
          <icon name="arrow-forward" height="14" width="14" class="ml-1" />
        </nuxt-link>
      </p>
    </ContentColumn>
    <hr class="Section--rule Rule" />
    <ContentColumn>
      <!-- <div class="Grid">
        <div class="Grid-item sm:w-1/2">
          <CardCta
            card-name="volunteer"
            lede="Join and contribute"
            sublede="Our members help us blah blah…"
            link-label="Become a RAATSICC member"
            to="/about#member"
          />
        </div>
        <div class="Grid-item sm:w-1/2">
          <CardCta
            card-name="news"
            lede="News to share?"
            sublede="Send it to us, we'll list it for you"
            link-label="goodnews@raatsicc.org.au"
            href="mailto:goodnews@raatsicc.org.au"
          />
        </div>
      </div> -->
      <CardCta
        card-name="resources"
        lede="Resources heading"
        sublede="Resources sub-heading"
        link-label="Order from our Resources "
        href="https://www.datocms-assets.com/11614/1557789367-raatsicc-resources-flyer2017.pdf"
        class="Grid-space"
        orange
      />
      <CardCta
        card-name="newsletter"
        lede="Subscribe to news"
        sublede="Get all the news in your email inbox"
        link-label="goodnews@raatsicc.org.au"
        href="mailto:goodnews@raatsicc.org.au"
        class="mt-8"
      />
    </ContentColumn>
  </div>
</template>

<script>
import CardCta from "~/components/CardCta";
import ContentColumn from "~/components/ContentColumn.vue";
import HeroBlocksHome from "~/components/HeroBlocksHome.vue";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import PostExcerpt from "~/components/PostExcerpt.vue";
import gql from "graphql-tag";
import head, { metaTagsQuery } from "~/mixins/head";

export default {
  components: {
    CardCta,
    ContentColumn,
    HeroBlocksHome,
    LoadingSpinner,
    PostExcerpt,
  },
  mixins: [head],
  apollo: {
    allPosts: gql`
      {
        allPosts(first: 3, orderBy: [datePublished_DESC]) {
          _firstPublishedAt
          slug
          title
          excerpt
          datePublished
          isJob
          isStaff
          isEvent
          image {
            url
          }
        }
      }
    `,
    page: gql`
      {
        page: homePage {
          ${metaTagsQuery}
        }
      }
    `,
  },
  data: () => ({ allPosts: [], page: null }),
};
</script>
