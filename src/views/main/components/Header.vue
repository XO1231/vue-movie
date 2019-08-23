<template>
  <div class="header">
    <div class="back" @click="$router.go(-1)"></div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: ['title']
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/common/common.scss";

.header {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  left: 0;
  margin-top: 13px;
  width: 100%;
  height: $baseNavHeight;
  font-size: 16px;
  .back {
    display: block;
    margin-left: 20px;
    width: 40px;
    height: 100%;
    background: url("~@/assets/imgs/icons/back.png") no-repeat left center;
    background-size: 50%;
  }
  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>