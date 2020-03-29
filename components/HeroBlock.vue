<template>
  <component
    :is="type"
    :to="to"
    :href="href"
    class="Block sm:w-1/2 lg:w-1/4"
    :class="rootClasses"
  >
    <ImageDynamic
      class="Block-image"
      :class="imageOpacityClass"
      :src="`${image}`"
      :alt="label"
    />
    <div class="Block-inner">
      <h3 class="Title mb-1" :class="colorClass">{{ label }}</h3>
      <p v-if="sublabel" class="Subheading font-normal italic" :class="colorClass">
        {{ sublabel }}
      </p>
      <div v-if="cta" class="Meta font-medium" :class="ctaClasses">
        {{ cta }}
        <icon name="arrow-forward" height="14" width="14" class="Block-cta" />
      </div>
    </div>
  </component>
</template>

<script>
import ImageDynamic from "~/components/ImageDynamic";

export default {
  components: {
    ImageDynamic,
  },
  props: {
    image: String,
    label: String,
    sublabel: String,
    cta: String,
    ctaReposition: {
      type: Boolean,
      default: false,
    },
    to: String,
    href: String,
    color: String,
  },
  computed: {
    rootClasses() {
      return [
        this.color && `bg-brand-${this.color}`,
        // this doesn't fuck work WTF?
        // this.to === this.$route.params.page && "is-active"
      ];
    },
    colorClass() {
      return this.color !== "" && "text-white";
    },
    imageOpacityClass() {
      return this.ctaReposition !== true && "Block-image-opacity";
    },
    ctaClasses() {
      return [
        this.color !== "" && "text-white",
        { "mt-auto text-right": this.ctaReposition },
      ];
    },
    type() {
      if (this.to) {
        return "nuxt-link";
      } else if (this.href) {
        return "a";
      } else {
        return "div";
      }
    },
  },
  // mounted() {
  //   console.log(this.$route.params.page);
  // }
};
</script>

<style lang="postcss">
.Block {
  @apply relative overflow-hidden flex-grow;
  height: calc(100vh * 1 / 5);
  transition: background-color 500ms ease, transform 500ms ease-in-out;
}

.Block-inner {
  @apply px-6 py-5 relative flex flex-col h-full;
}

.Block-inner h3 {
  @apply mb-1 !important;
}

.Block-image {
  @apply absolute inset-0 w-full h-full object-cover;
  mix-blend-mode: multiply;
  transition: transform 250ms ease;
}
/* reach into ImageDynamic img */
/* see: https://www.notion.so/callum/deep-deprecation-it-s-never-part-of-the-compiled-css-so-don-t-worry-24395f233aac4b769d47546f3c2bd7db */
/* update: css'd in ImageDynamic */
/* .Block-image ::v-deep img, */
/* .Block-image /deep/ img {
  @apply object-cover;
} */

.Block:hover .Block-image {
  transform: scale(1.025);
}

.Block-image-opacity {
  opacity: 0.75;
}

.Block-cta svg {
  transform: translateX(0);
  transition: transform 500ms ease;
}
.Block:hover .Block-cta svg {
  transform: translateX(3px);
  transition: transform 500ms ease;
}

@screen sm {
  .Block:not(:first-of-type) {
    /* @apply border-l border-white; */
  }
}

@screen lg {
  .Block {
    height: calc(100vh * 1 / 4);
  }
}
</style>
