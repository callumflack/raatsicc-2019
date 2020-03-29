<template>
  <div class="Card" :class="isOrangeClass">
    <div class="Card-body">
      <icon :name="cardTypeToIcon(cardName)" height="30" width="30" class="Card-icon" />
      <div class="Card-heading Metaheading st-p">
        {{ lede }}
        <br />
        <span class="font-medium" v-html="sublede" />
      </div>
    </div>
    <!-- button or form -->
    <FormNewsletter v-if="cardName === 'newsletter'" />
    <CfdLink v-else :to="to" :href="href" class="Card-link Text">
      {{ linkLabel }}
      <icon name="arrow-forward" height="14" width="14" />
    </CfdLink>
  </div>
</template>

<script>
import CfdLink from "@/components/CfdLink";
import FormNewsletter from "@/components/FormNewsletter";

export default {
  components: {
    CfdLink,
    FormNewsletter,
  },
  props: {
    /*
      cardName prop defines:
      * the icon name (see cardTypeToIcon as our map)
      * whether the newsletter form is shown
    */
    cardName: String,
    name: String,
    lede: String,
    sublede: {
      String,
      default: "&nbsp;",
    },
    linkLabel: String,
    href: {
      type: String,
      default: null,
    },
    to: {
      type: String,
      default: null,
    },
    orange: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    isOrangeClass() {
      return this.orange && "is-orange";
    },
  },
  methods: {
    /*
     * Assign icon name for given card name
     * @param {string} type
     * @returns {string}
     */
    cardTypeToIcon(type) {
      // Match card types to their equivalent icon name
      const typeToIconMap = {
        resources: "bookmark",
        newsletter: "email",
        volunteer: "pan-tool",
        difference: "flag",
        news: "question-answer",
        facebook: "facebook-solid",
      };

      // Type names must be lowercase
      return typeToIconMap[type.toLowerCase()];
    },
  },
};
</script>

<style lang="postcss" scoped>
.Card {
  @apply border border-brand-blue bg-brand-dustblue;
}

.Card-body {
  @apply px-4 py-4 my-1;
}

.Card-icon,
.Card-heading {
  @apply text-brand-blue;
}

.Card-link {
  @apply block px-4 py-3 text-white bg-brand-blue;
}

.Card-link >>> svg {
  transform: translate(0, -1px);
  transition: transform 250ms ease;
}
.Card-link:hover >>> svg {
  transform: translate(3px, -1px);
}

/* is orange */
.Card.is-orange {
  @apply border-brand-primary bg-brand-neutral;
}

.Card.is-orange >>> .Card-icon {
  @apply text-brand-primary;
}

.Card.is-orange .Card-heading {
  @apply text-brand-primary;
}

.Card.is-orange .Card-link {
  @apply bg-brand-primary;
}
</style>
