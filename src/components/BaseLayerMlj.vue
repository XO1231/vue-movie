<template>
  <div class="baseLayer-main">
    <div class="wrapper" ref="wrapper">
      <div class="main-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  props: {
    scrollToEndFlag: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$scroll = new BScroll(this.$refs.wrapper, {
        click: true
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.baseLayer-main {
  height: 100%;
  .wrapper {
    height: 100%;
    overflow: hidden;
  }
}
</style>