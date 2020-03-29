<template>
  <article class="Post">
    <div class="w-full sm:w-4/5">
      <!-- headings -->
      <header>
        <h3 class="Subheading mb-px">
          <nuxt-link :to="`/news/${slug}`">{{ title }}</nuxt-link>
        </h3>
        <div class="Meta text-gray mb-1">
          <time :date-time="date">
            {{ date | moment("ddd, MMMM Do YYYY") }}
          </time>
          <!-- <span class="mx-0 font-thin text-gray-500">|</span> -->
          <!-- <cite class="not-italic">{{ author }}</cite> -->
          <!-- <template v-for="(tag, index) in tags">
            <PostTag :key="index" :tag="tag" />
          </template> -->
          <PostTag v-if="tag !== null" :tag="tag" />
        </div>
      </header>
      <!-- excerpt or body -->
      <p class="Meta text-brand-primary">
        <nuxt-link class="" :to="`/news/${slug}`">
          View post
          <icon name="arrow-forward" class="ml-" height="14" width="14" />
        </nuxt-link>
      </p>
    </div>
  </article>
</template>

<script>
import PostTag from "~/components/PostTag";
import moment from "vue-moment";
import tag from "@/mixins/tag";

export default {
  components: {
    PostTag,
    // eslint-disable-next-line
    moment
  },
  mixins: [tag],
  props: {
    slug: String,
    title: String,
    date: String,
    event: Boolean,
    staff: Boolean,
    job: Boolean,
  },
};
</script>
