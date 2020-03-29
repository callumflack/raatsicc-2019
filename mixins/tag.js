export default {
  computed: {
    tag() {
      if (this.event) {
        return "event";
      } else if (this.staff) {
        return "staff";
      } else if (this.job) {
        return "job";
      }
      return null;
    },
  },
};
