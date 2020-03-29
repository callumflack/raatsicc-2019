<template>
  <div>
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <ContentColumn v-else>
      <!-- <img
        src="https://www.datocms-assets.com/11614/1557801541-map-locations.jpg?w=1200&q=50&auto=format"
        alt="RAATSICC offices in Far North Queensland"
      /> -->
      <div class="Extract">
        <Aspect ratio="536/607">
          <ImageDynamic
            src="https://www.datocms-assets.com/11614/1562038359-map-locations-2x-100.jpg"
            alt="RAATSICC offices in Far North Queensland"
          />
        </Aspect>
      </div>
      <!-- locations -->
      <div class="mt-6">
        <div class="Locations flex flex-column flex-wrap -mx-2">
          <LocationColumn
            v-for="item in contacts"
            :key="item.streetAddress"
            :location="item"
            details
            class="px-2 w-full sm:w-1/2"
          />
        </div>
      </div>
    </ContentColumn>

    <hr class="Section--rule Rule mb-0" />

    <ContentColumn>
      <div class="Grid">
        <div class="Grid-item w-full sm:w-1/2">
          <CardCta
            card-name="facebook"
            lede="Follow us on Facebook"
            sublede="Up to the minute news"
            link-label="RAATSICC on Facebook"
            href="https://www.facebook.com/raatsicc"
          />
        </div>
        <div class="Grid-item w-full sm:w-1/2">
          <CardCta
            card-name="news"
            lede="News to share?"
            sublede="We'll list it for you"
            link-label="goodnews@raatsicc.org.au"
            href="mailto:goodnews@raatsicc.org.au"
          />
        </div>
      </div>
    </ContentColumn>
  </div>
</template>

<script>
import Aspect from "~/components/Aspect";
import CardCta from "~/components/CardCta";
import ContentColumn from "~/components/ContentColumn";
import ImageDynamic from "~/components/ImageDynamic";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import LocationColumn from "~/components/LocationColumn";
// import locations from "~/data/locations";
import gql from "graphql-tag";
import head, { metaTagsQuery } from "~/mixins/head";

export default {
  components: {
    Aspect,
    CardCta,
    ContentColumn,
    ImageDynamic,
    LoadingSpinner,
    LocationColumn,
  },
  mixins: [head],
  apollo: {
    page: gql`
      {
        page: contactPage {
          ${metaTagsQuery}
        }
      }
    `,
  },
  data() {
    return {
      contacts: this.$store.state.contactData,
      page: null,
    };
  },
};
</script>

<style lang="postcss" scoped>
.Extract {
  left: calc(-50vw + 50%);
  position: relative;
  width: 100vw;
}

@screen sm {
  .Extract {
    @apply w-full;
    left: auto;
  }
}
</style>
