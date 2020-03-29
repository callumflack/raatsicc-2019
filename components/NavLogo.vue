<template>
  <div class="sm:w-1/3 sm:mx-auto h-full">
    <nuxt-link to="/" class="Nav-home-link">
      <!-- <img class="Nav-logo" src="~/assets/images/logo.png"> -->
      <!-- <img class="Nav-logo" src="/images/logo-symbol.png" /> -->
      <img
        class="Nav-logo"
        src="https://www.datocms-assets.com/11614/1557801537-logo-symbol.png?w=150&q=40&fm=png&auto=format"
        alt="RAATSICC logo"
      />
      <IconLogotype class="Nav-logotype"></IconLogotype>
    </nuxt-link>
  </div>
</template>

<script>
import IconLogotype from "~/components/IconLogotype";

export default {
  components: {
    IconLogotype,
  },
};
</script>

<style lang="postcss">
/* Anchor tag */
.headroom--pinned:not(.headroom--top) .Nav-home-link {
  @apply justify-end;
}

.Nav-home-link {
  @apply flex flex-col justify-center pt-3 pb-1 h-full;
}

/* Logo */
/* .headroom--pinned:not(.headroom--top) .Nav-logo {
  @apply w-7/12;
} */

.Nav-logo {
  @apply mx-auto h-auto opacity-100;
  transition: all 250ms ease;
}

/* Logotype */
.Nav-logotype {
  @apply w-5/6 mx-auto;
  @apply h-auto opacity-100;
  transition: all 250ms ease;
}

.Nav-logotype svg {
  width: 100%;
}

/* RS */
@screen sm {
  /* .headroom--pinned:not(.headroom--top) .Nav-home-link { */
  .Nav-home-link {
    @apply pt-0 pb-3;
  }

  .headroom--pinned:not(.headroom--top) .Nav-logo {
    @apply w-7/12;
  }

  .headroom--pinned:not(.headroom--top) .Nav-logotype {
    @apply m-0 h-0 opacity-0;
  }
  .Nav-logotype {
    @apply mt-1;
  }
}
/* @screen sm {
  .headroom--top .Nav-logo,
  .Nav-logo,
  .headroom--top .Nav-logotype,
  .Nav-logotype {
    @apply mx-auto;
  }

  .headroom--pinned .Nav-logo {
    @apply w-1/2;
  }

  .headroom--top .Nav-logo,
  .Nav-logo {
    @apply w-3/4;
  }
}

@screen lg {
  .headroom--pinned .Nav-logo {
    @apply w-1/4;
  }

  .headroom--top .Nav-logo,
  .Nav-logo {
    @apply w-1/2;
  }

  .Nav-logotype:not(.headroom--pinned) {
    @apply w-3/6;
  }
} */
</style>
