<template>
  <div>
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <ContentColumn v-else article>
      <Post
        :slug="post.slug"
        :tags="post.tags"
        :image="post.image"
        :title="post.title"
        :date="post.datePublished"
        :body="post.body"
        :button="post.includeButton"
        :button-link="post.buttonLink"
        :button-label="post.buttonLabel"
        :job="post.isJob"
        :staff="post.isStaff"
        :event="post.isEvent"
        :event-title="post.eventTitle"
        :event-date="post.eventDate"
        :event-is-not-one-day="post.eventIsNotOneDay"
        :event-location="post.eventLocation"
      >
        <template v-if="post.jobs" #jobs>
          <template v-for="(job, index) in post.jobs">
            <PostJob
              :key="index"
              :title="job.positionTitle"
              :hours="job.hours"
              :location="job.location"
              :salary="job.salary"
              :program="job.program"
              :note="job.note"
              :date="job.dueDate"
              :pdf="job.applyPdf.url"
            />
          </template>
        </template>
      </Post>
    </ContentColumn>
  </div>
</template>

<script>
import ContentColumn from "~/components/ContentColumn";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import Post from "~/components/Post";
import PostJob from "~/components/PostJob";
import gql from "graphql-tag";
import config from "~/config";

export default {
  apollo: {
    post: {
      query: gql`
        query Post($slug: String!) {
          post(filter: { slug: { eq: $slug } }) {
            slug
            title
            # for meta tags
            excerpt
            datePublished
            isEvent
            isJob
            isStaff
            eventDate
            eventIsNotOneDay
            eventTitle
            eventLocation
            body
            includeButton
            buttonLink
            buttonLabel
            image {
              url
            }
            jobs {
              # dato modular record type
              # …which contains job records
              ... on JobRecord {
                positionTitle
                hours
                salary
                location
                program
                dueDate
                note
                applyPdf {
                  url
                }
              }
            }
          }
        }
      `,
      prefetch({ route }) {
        return {
          slug: route.params.post,
        };
      },
      variables() {
        return {
          slug: this.$route.params.post,
        };
      },
    },
  },
  components: {
    ContentColumn,
    LoadingSpinner,
    Post,
    PostJob,
  },
  head() {
    return {
      title: `RAATSICC News | ${this.post.title}`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: `${this.post.description}`,
        },
      ],
      link: [
        {
          rel: "canonical",
          href: `${config.SITE_URL}${this.$route.path}`,
        },
      ],
    };
  },
};
</script>
