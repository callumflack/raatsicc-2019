<template>
  <div class="Post">
    <!-- image -->
    <figure v-if="image" class="Post-image">
      <img :src="`${image.url}?h=700&q=25&auto=format`" :alt="title" />
    </figure>

    <!-- headings -->
    <header class="text-column">
      <h1 class="Title">
        <span class="lg:w-5/6">
          {{ title }}
        </span>
      </h1>
      <div class="Meta text-gray s-h">
        <time :date-time="date">{{ date | moment("ddd, MMMM Do YYYY") }}</time>
        <!-- <span class="mx-0 font-thin text-gray-500">|</span> -->
        <!-- <cite class="not-italic">{{ author }}</cite> -->
        <!-- <template v-for="(tag, index) in tags">
          <PostTag :key="index" :tag="tag" />
        </template> -->
        <PostTag v-if="tag !== null" :tag="tag" />
      </div>
    </header>

    <!-- v-if=body allows md to render -->
    <article v-if="body" class="text-column">
      <!-- event -->
      <PostEvent
        v-if="eventTitle"
        :title="eventTitle"
        :date="eventDate"
        :is-not-one-day="eventIsNotOneDay"
        :location="eventLocation"
      />

      <!-- body -->
      <div class="Markdown" v-html="$md.render(body)" />

      <!-- if button -->
      <p v-if="button" class="st-m">
        <a
          :href="buttonLink"
          target="_blank"
          rel="noopener noreferrer"
          class="Button st-m"
        >
          {{ buttonLabel }}
          <icon name="arrow-forward" height="14" width="14" class="ml-1" />
        </a>
      </p>

      <!-- jobs -->
      <slot name="jobs"></slot>

      <!-- share -->
      <PostShare :slug="slug" />
    </article>
  </div>
</template>

<script>
import PostEvent from "~/components/PostEvent";
import PostTag from "~/components/PostTag";
import PostShare from "~/components/PostShare";
import moment from "vue-moment";
import tag from "@/mixins/tag";

export default {
  components: {
    PostEvent,
    PostShare,
    PostTag,
    // eslint-disable-next-line
    moment
  },
  mixins: [tag],
  props: {
    slug: String,
    title: String,
    tags: Array,
    date: String,
    image: Object,
    excerpt: String,
    body: String,
    button: Boolean,
    buttonLink: String,
    buttonLabel: String,
    isArticle: Boolean,
    job: Boolean,
    staff: Boolean,
    event: Boolean,
    eventTitle: String,
    eventDate: String,
    eventIsNotOneDay: Boolean,
    eventLocation: String,
  },
};
</script>

<style lang="postcss" scoped>
.Post-image {
  @apply relative bg-brand-neutral relative mb-6 py-2;
  height: 40vh;
  left: calc(-50vw + 50%);
  width: 100vw;
}

.Post-image img {
  @apply relative w-auto h-full mx-auto;
}

@screen sm {
  .Post-image {
    height: 33.333vh;
    /* ContentColumn = sm:w-5/6 */
    left: -20vw;
  }
  .Post-image img {
    @apply relative w-auto h-full m-0;
    /* ContentColumn = sm:w-5/6 */
    margin-left: 20%;
  }
  .text-column {
    @apply relative;
    /* match the ContentColumn width */
    width: 90%;
  }
}
@screen lg {
  .Post-image {
    /* wrapped in container, ContentColumn width doesn't count */
    left: calc((theme(screens.lg) * -0.5) + 50%);
    width: theme(screens.lg);
  }
  .Post-image img {
    /* ContentColumn = sm:w-5/6 */
    margin-left: 25%;
  }
  .text-column {
    /* match the ContentColumn width */
    width: 108.333333333%;
  }
}
/* save Tailwind spinning out all xl breakpoint classes… */
/* @screen xl {
  .Post-image {
    left: calc((theme(screens.xl) * -0.5) + 50%);
    width: theme(screens.xl);
  }
} */
@media (min-width: 1040px) {
  .Post-image {
    left: calc((1040px * -0.5) + 50%);
    width: 1040px;
  }
}
</style>
