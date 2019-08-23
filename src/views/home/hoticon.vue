<template>
  <div class="hoticon-main">
    <div class="hoticon" :style="hotColors">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "hoticon",

  data() {
    return {
      color: {}
    };
  },
  props: {
    hotColor: Array
  },
  methods: {},
  computed: {
    hotColors() {
      return `background: linear-gradient(143deg,${this.hotColor[0]} 0%,${
        this.hotColor[1]
      } 100%)`;
    }
  }
};
</script>

<style lang='scss' scoped>
.hoticon-main {
  margin-left:7px ;
  .hoticon {
    width: 18px;
    height: 19px;
    border-radius: 4px;
    line-height: 19px;
    text-align: center;
    font-size: 12px;
  }
}
</style>
