<template>
  <button class="Button" @click="handleClick">Donate</button>
</template>

<script>
/* global Stripe */
export default {
  methods: {
    async handleClick() {
      const stripe = Stripe(process.env.STRIPE_PUBLISHABLE_KEY);
      const response = await fetch("/.netlify/functions/donation");
      const json = await response.json();
      await stripe.redirectToCheckout({
        sessionId: json.session.id,
      });
      // `redirectToCheckout` may fail due to a browser or network error
    },
  },
};
</script>

<style></style>
