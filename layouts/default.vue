<template>
  <div>
    <NavHeadroom />
    <!-- enable clean page transitions -->
    <main class="container">
      <nuxt />
    </main>
    <NavBottom />
    <!-- modals -->
    <no-ssr>
      <portal-target name="modals" multiple></portal-target>
    </no-ssr>
  </div>
</template>

<script>
import NavHeadroom from "@/components/NavHeadroom";
import NavBottom from "@/components/NavBottom";

export default {
  components: {
    NavHeadroom,
    NavBottom
  },
  head: {
    script: [
      { src: "https://js.stripe.com/v3/" } // Used for the donation button
    ]
  }
};
</script>

<style></style>
