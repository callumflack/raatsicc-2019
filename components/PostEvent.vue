<template>
  <div class="Event">
    <h2 class="Heading font-sans font-semibold tracking-normal text-brand-blue py-px">
      {{ title }}
    </h2>
    <p v-if="date" class="Meta text-brand-blue">
      <time v-if="isNotOneDay" :date-time="date">
        {{ date | moment("MMMM YYYY") }}
      </time>
      <time v-else :date-time="date">
        {{ date | moment("ddd, MMMM Do YYYY") }}
      </time>
      <span v-if="location" class="st-m">
        <span class="mx-px font-thin opacity-50">|</span>
        {{ location }}
      </span>
    </p>
  </div>
</template>

<script>
import moment from "vue-moment";

export default {
  components: {
    // eslint-disable-next-line
    moment
  },
  props: {
    title: String,
    date: String,
    isNotOneDay: Boolean,
    location: String,
  },
};
</script>

<style lang="postcss" scoped>
.Event {
  @apply border border-brand-blue rounded px-3 pb-2 pt-1 mb-4;
}

@screen sm {
  .Event {
    @apply px-4 pb-3 pt-1 mb-6;
  }
}

.Event > h2 {
  margin-bottom: 0;
}
</style>
