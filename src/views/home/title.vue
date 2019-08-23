<template>
  <div class="title-main">
    <div class="title">
      <div class="title-text">
        <span class="title-text-style"></span>
        <span class="title-text-received">
          <slot></slot>
        </span>
      </div>

      <div class="title-go">
        <!-- <a :href="hrefs" class="title-go-all">全部</a> -->
        <router-link :to="hrefs" class="title-go-all">全部</router-link>
        <span class="title-go-icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "titleStyle",

  data() {
    return {};
  },
  props: ["hrefs"],

  methods: {}
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.title-main {
  .title {
    width: 100%;
    height: 18px;
    margin-top: 30px;
    padding: 0 $basePadding;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title-text {
      width: 82px;
      height: 100%;
      display: flex;
      .title-text-style {
        display: block;
        width: 4px;
        height: 17px;
        background: linear-gradient(
          90deg,
          rgba(242, 97, 130, 1) 0%,
          rgba(241, 160, 100, 1) 100%
        );
        border-radius: 2px;
      }
      .title-text-received {
        font-size: 18px;
        margin-left: 5px;
      }
    }
    .title-go {
      width: 35px;
      height: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title-go-all {
        display: block;
        color: #dfdfdf;
        font-size: 12px;
      }
      .title-go-icon {
        display: block;
        width: 6px;
        height: 10px;
        background: url(../../assets/imgs/home/arr-right.png) no-repeat center;
        background-size: 6px 10px;
      }
    }
  }
}
</style>
