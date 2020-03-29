<template>
  <span class="Icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 24 24"
      :aria-labelledby="iconName"
      role="presentation"
    >
      <title :id="iconName" lang="en">{{ iconName }} icon</title>
      <g :fill="iconColor">
        <slot></slot>
        <!-- <path fill="none" d="M0 0h24v24H0z"/> -->
        <!-- <slot v-bind="iconBase" /> -->
        <!-- <rect width="24" height="24" fill="none" /> -->
      </g>
    </svg>
  </span>
</template>

<script>
/*

  https://vuejs.org/v2/cookbook/editable-svg-icons.html

*/
export default {
  props: {
    iconName: {
      type: String,
      default: "box",
    },
    width: {
      type: [Number, String],
      default: 24,
    },
    height: {
      type: [Number, String],
      default: 24,
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style lang="postcss" scoped>
.Icon {
  display: inline-block;
  fill: currentColor;
  line-height: 1;
  /* margin-bottom: 2px; */
  max-width: 100%;
  position: relative;
  text-align: center;
  transform: translateY(-1px);
  user-select: none;
  /* vertical-align: middle; */
}

.Icon svg {
  display: inline-block;
  fill: currentColor;
  transition: fill 400ms ease;
}
</style>
