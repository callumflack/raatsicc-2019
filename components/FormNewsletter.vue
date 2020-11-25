<template>
  <div class="">
    <form class="Form" @submit.prevent="handleSubmit">
      <input
        v-model="formData.email"
        class="Button Button--input flex-1"
        type="email"
        name="email"
        placeholder="Email"
        required
      />
      <button class="Button Button--blue rounded-none">Sign Up</button>
    </form>
    <div v-if="successMsg" class="Form-validation is-good Button Button--input">
      <icon name="check-circle" class="mr-1" />
      <!-- <span>Thanks! You're all signed up.</span> -->
      <span>{{ successMsg }}</span>
    </div>
    <div v-if="errorMsg" class="Form-validation is-bad Button Button--input">
      <icon name="info" class="mr-1" />
      <span>{{ errorMsg }}</span>
    </div>
  </div>
</template>

<script>
/*
  https://github.com/jamesqquick/Learn-Build-Teach-Site/blob/master/src/components/newsletter.js
*/
export default {
  data() {
    return {
      subscribed: false,
      errorMsg: null,
      successMsg: null,
      formData: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    async subscribeToNewsletter(body) {
      const response = await fetch("/.netlify/functions/subscribe", {
        method: "post",
        body: JSON.stringify(body),
      });
      const json = await response.json();

      if (response.status !== 200) {
        // Return message from server
        return new Error(json.msg);
      }

      return json;
    },
    async handleSubmit() {
      this.errorMsg = "";
      this.successMsg = "";

      try {
        const response = await this.subscribeToNewsletter({
          email: this.formData.email,
          name: this.formData.name,
        });

        if (response instanceof Error) {
          this.errorMsg = response.message;
          return;
        }

        this.email = "";
        this.name = "";
        this.subscribed = true;
        this.successMsg = response.msg;
      } catch (error) {
        this.errorMsg = "Something went wrong… Please email us about this!";
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.Form {
  @apply flex flex-row w-full relative;
}

.Form-validation {
  @apply font-medium justify-start w-full;
  @apply text-white mt-px;
  @apply cursor-default;
}
.is-good {
  @apply bg-form-good;
  box-shadow: theme(colors.form.good) 0 0 0 1px;
}
.is-bad {
  @apply bg-form-bad;
  box-shadow: theme(colors.form.bad) 0 0 0 1px;
}

.Button {
  --button-height: 44px;
}

.Button + .Button {
  margin: 0 !important;
}
</style>
