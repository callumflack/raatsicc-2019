<template>
  <footer class="container Section--footer">
    <div class="container-inner">
      <hr class="Rule mt-4" />
      <nav class="Nav">
        <div class="flex flex-col sm:flex-row">
          <!-- logo -->
          <div class="w-1/6 sm:w-1/5 lg:w-1/4">
            <div class="py-4 sm:pb-0">
              <NavLogo />
            </div>
          </div>
          <!-- divide here? -->
          <div class="w-full sm:w-4/5 lg:w-3/4">
            <div class="hidden sm:block">
              <NavList />
              <hr class="Rule mb-8" />
            </div>
            <!-- locations -->
            <div class="sm:w-10/12">
              <div class="Locations flex flex-column flex-wrap -mx-2">
                <LocationColumn
                  v-for="item in contacts"
                  :key="item.streetAddress"
                  :location="item"
                  class="px-2 w-1/2 sm:w-1/3"
                />
                <LocationComplianceItem />
              </div>
            </div>
            <!-- acknowledgment -->
            <div class="Meta text-gray"></div>
            <!-- copyright -->
            <hr class="Rule mt-8 mb-4" />
            <div class="sm:w-5/6 lg:w-9/12">
              <p class="Meta text-gray s-m">
                RAATSICC acknowledge the traditional custodians of the lands on which we
                live and work and pay respect to our Elders: past, present and future.
              </p>
              <p class="Meta text-gray">
                <span>&copy; {{ new Date().getFullYear() }} RAATSICC</span>
                <span class="font-thin text-gray-500 mx-px">|</span>
                <a
                  href="https://raatsicc.admin.datocms.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Login
                </a>
                <span class="font-thin text-gray-500 mx-px">|</span>
                <a
                  href="https://callumflack.design/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Site by Callum Flack Design
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
import LocationColumn from "~/components/LocationColumn";
import LocationComplianceItem from "~/components/LocationComplianceItem";
import NavLogo from "~/components/NavLogo";
import NavList from "~/components/NavList";
import nav from "~/data/nav";

export default {
  components: {
    LocationColumn,
    LocationComplianceItem,
    NavList,
    NavLogo,
  },
  data() {
    return {
      nav,
      contacts: this.$store.state.contactData,
    };
  },
};
</script>

<style lang="postcss" scoped>
/* .Locations p:nth-of-type(1), */
.Locations p {
  @apply mb-3;
}
</style>
