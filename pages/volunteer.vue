<template>
  <div class="Section">
    <div v-if="$apollo.loading" class="Loading">
      <LoadingSpinner />
    </div>
    <HeroStripe
      v-else
      :image="`${volunteerPage.heroImage.url}?w=500&q=40&auto=format`"
      :alt="volunteerPage.heroTitle"
      color="green"
    >
      <div class="container bg-transparent">
        <ContentColumn class="relative">
          <div class="py-4">
            <h1 class="Title text-white">
              {{ volunteerPage.heroTitle }}
            </h1>
            <p class="Subheading italic text-white">
              {{ volunteerPage.heroSubtitle }}
            </p>
          </div>
        </ContentColumn>
      </div>
    </HeroStripe>
    <section>
      <ContentColumn v-if="volunteerPage" text>
        <h2 class="Heading italic">
          {{ volunteerPage.bodyIntro }}
        </h2>
      </ContentColumn>
      <ContentColumn v-if="volunteerPage" text>
        <div class="Markdown" v-html="$md.render(volunteerPage.body)" />
        <p class="Section-md">
          <a
            v-for="item in volunteerPage.pdfs"
            :key="item.pdfLabel"
            :href="item.pdfLink.url"
            target="_blank"
            class="Button"
          >
            {{ item.pdfLabel }}
            <icon name="arrow-forward" height="14" width="14" class="ml-1" />
          </a>
        </p>
      </ContentColumn>
    </section>
  </div>
</template>

<script>
import ContentColumn from "~/components/ContentColumn.vue";
import HeroStripe from "~/components/HeroStripe.vue";
import LoadingSpinner from "~/components/LoadingSpinner.vue";
import gql from "graphql-tag";
import head, { metaTagsQuery } from "~/mixins/head";

export default {
  apollo: {
    volunteerPage: gql`
      {
        volunteerPage {
          heroImage {
            url
          }
          heroTitle
          heroSubtitle
          bodyIntro
          body
          pdfs {
            # dato modular record type
            # …which contains team_manager records
            ... on PdfButtonRecord {
              _modelApiKey
              pdfLabel
              pdfLink {
                url
              }
            }
          }
        }
      }
    `,
    page: gql`
      {
        page: volunteerPage {
          ${metaTagsQuery}
        }
      }
    `,
  },
  components: {
    ContentColumn,
    HeroStripe,
    LoadingSpinner,
  },
  mixins: [head],
  data: () => ({ page: null }),
};
</script>
