<template>
  <div class="footer-main">
    <router-link class="link-item" v-for="link in links" :key="link.to" :to="{name:link.to}">
      <!-- require commonjs的规范 webpack基于nodejs的 所以可以直接解析commonjs规范 -->
      <!-- <img :src="require('@/assets/imgs/icons/icon-home.png')" alt=""> -->
      <!-- <img class="link-icon" :src="link.img" alt /> -->
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {
      links: [
        {
          to: "home",
          img: require("@/assets/imgs/icons/icon-home.png")
        },
        {
          to: "movie",
          img: require("@/assets/imgs/icons/icon-movie.png")
        },
        {
          to: "purch",
          img: require("@/assets/imgs/icons/icon-ticket.png")
        },
        {
          to: "cinema",
          img: require("@/assets/imgs/icons/icon-cinema.png")
        },
        {
          to: "main",
          img: require("@/assets/imgs/icons/icon-main.png")
        }
      ]
    };
  },

  methods: {}
};
</script>

<style lang='scss' scoped>
.footer-main {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 104px;
  background: url("../assets/imgs/icons/icon-footer-bg.png") no-repeat center;
  background-size: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  .link-item {
    width: 40px;
    height: 40px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-bottom: 18px;
    transition: all .4s ease;
    &:nth-child(3){
        margin-bottom: auto;
        align-self: flex-start;
        .link-icon{
            width: 72px;
            height: 72px;
            margin-top: 10px;
        }
    }
    &:nth-child(1){
        background-image: url(../assets/imgs/icons/icon-home.png);
    }
    &:nth-child(1).router-link-active{
        background-image: url(../assets/imgs/icons/icon-home-active.png);
    }
    &:nth-child(2){
        background-image: url(../assets/imgs/icons/icon-movie.png);
    }
    &:nth-child(2).router-link-active{
        background-image: url(../assets/imgs/icons/icon-movie-active.png);
    }
    &:nth-child(3){
        width: 72px;
        height: 72px;
        margin-top: 10px;
        background-image: url(../assets/imgs/icons/icon-ticket.png);
    }
    &:nth-child(4){
        background-image: url(../assets/imgs/icons/icon-cinema.png);
    }
    &:nth-child(4).router-link-active{
        background-image: url(../assets/imgs/icons/icon-cinema-active.png);
    }
    &:nth-child(5){
        background-image: url(../assets/imgs/icons/icon-main.png);
    }
    &:nth-child(5).router-link-active{
        background-image: url(../assets/imgs/icons/icon-main-active.png);
    }
    
  }
}
</style>
