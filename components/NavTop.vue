<template>
  <div class="container">
    <nav class="Nav Rule container-inner">
      <div class="flex">
        <!-- logo -->
        <div class="w-1/6 sm:w-1/5 lg:w-1/4">
          <NavLogo />
        </div>
        <!-- mobile page location & list -->
        <div class="Nav-pagename flex sm:hidden w-full">
          <nuxt-link :to="pageLink">
            <h1>{{ pageName }}</h1>
          </nuxt-link>
        </div>
        <!-- acronymn & list -->
        <div class="hidden sm:block sm:w-4/5 lg:w-3/4">
          <h1 class="Nav-acronym text-brand-primary sm:w-4/5 lg:w-3/4">
            Cape York/Gulf Remote Area Aboriginal and Torres Strait Islander
            Child Care Advisory Association Inc.
            <!-- <span class="font-bold text-gray-900">
              &nbsp;/ Protecting Kids Our Way.
            </span> -->
          </h1>
          <hr class="Nav-tagline-rule" />
          <div class="flex justify-between items-center">
            <NavList />
            <DonationButton class="mr-10" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import NavList from "~/components/NavList";
import NavLogo from "~/components/NavLogo";
import DonationButton from "~/components/DonationButton";

export default {
  components: {
    NavList,
    NavLogo,
    DonationButton
  },
  computed: {
    /* currentPageClass() {
      const current = this.$store.state.currentPage.replace(/\//g, "-");
      return `page${current}`;
    }, */
    pageLink() {
      if (this.$route.name === "what-we-do") {
        return "/what-we-do";
      } else if (this.$route.name === "what-we-do-page") {
        return "/what-we-do";
      }
      return this.$route.path;
    },
    pageName() {
      if (this.$route.name === "index") {
        return "Home";
      } else if (this.$route.name === "what-we-do") {
        return "What we do";
      } else if (this.$route.name === "what-we-do-page") {
        return "What we do";
      } else if (this.$route.name === "news-post") {
        return "News";
      } else if (this.$route.name === "news-events") {
        return "News ▸ Events";
      } else if (this.$route.name === "news-jobs") {
        return "News ▸ Jobs";
      } else if (this.$route.name === "news-staff") {
        return "News ▸ Staff";
      } else if (this.$route.name === "news-archive") {
        return "News archive";
      }
      return this.$route.name;
    }
  }
};
</script>

<style lang="postcss" scoped>
/* NAV */
.headroom--pinned:not(.headroom--top) .Nav {
  box-shadow: 0 9px 19px 0 rgba(0, 0, 0, 0.05);
}

/* .headroom--top .Nav-tagline-rule, */
.Nav-tagline-rule {
  @apply border-b border-brand-primary m-0 mt-4 opacity-100;
  transition: all 250ms ease;
}

/* ACRONYM */
/* .headroom--pinned .Nav-acronym {
  @apply m-0 h-0 opacity-0;
} */

/* .headroom--top .Nav-acronym, */
.Nav-acronym {
  @apply font-serif font-extrabold text-xs tracking-wide;
  @apply uppercase;
  @apply mt-8 h-auto opacity-100;
  transition: all 250ms ease;
}

.Nav-pagename {
  @apply ml-6 pl-6 border-l border-gray-300 items-center;
}

.Nav-pagename h1 {
  /* Nav-link */
  @apply text-sm font-semibold uppercase;
}

@screen lg {
  .Nav {
    @apply pt-0;
  }
}
@screen lg {
  .Nav-acronym {
    @apply text-sm;
  }
}
</style>
