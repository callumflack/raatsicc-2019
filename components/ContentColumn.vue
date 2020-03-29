<template>
  <section class="Section" :class="{ 'Section-b': stripe }">
    <div class="container-inner flex">
      <div class="hidden sm:block sm:w-1/5 lg:w-1/4">&nbsp;</div>
      <div v-if="article" class="w-full sm:w-3/4 lg:w-1/2">
        <slot />
      </div>
      <div v-else class="w-full sm:w-3/4 lg:w-7/12">
        <slot />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    article: Boolean,
    stripe: Boolean,
  },
};
</script>
