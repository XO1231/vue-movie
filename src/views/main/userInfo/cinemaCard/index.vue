<template>
  <div class="cinema-card-main">
    <Header title="影城卡"></Header>
    <div class="container">
      <BaseLayer>
        <ul class="card-list">
          <li v-for="(card, index) in cinemaCardList" :key="index" class="card-item">
            <img :src="card.img" alt="">
          </li>
        </ul>
      </BaseLayer>
      <router-link :to="{name: 'purch'}" tag="div" class="buy-wrapper">
        <div class="buy-ticket">去购票</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayerMlj.vue";
import Header from "@/views/main/components/Header.vue";

export default {
  data() {
    return {
      cinemaCardList: [
        { title: '星星国际影城卡', price: 10, indate: 6, img: require("@/assets/imgs/main/cinema_card/card-1.png") },
        { title: '思明影城卡', price: 30, indate: 8, img: require("@/assets/imgs/main/cinema_card/card-2.jpg") },
        { title: '上海影城砖石卡', price: 20, indate: 10, img: require("@/assets/imgs/main/cinema_card/card-3.jpg") },
        { title: '横店影城白金卡', price: 20, indate: 10, img: require("@/assets/imgs/main/cinema_card/card-4.jpg") },
      ]
    }
  },
  components: {
    BaseLayer,
    Header
  }
}
</script>

<style lang="scss" scoped>
  .cinema-card-main {
    height: 100%;
    .container {
      padding: 0 20px;
      padding-top: 66px;
      padding-bottom: 60px;
      height: 100%;
      box-sizing: border-box;
      .card-list {
        width: 100%;
        .card-item {
          position: relative;
          margin: 15px 0;
          width: 335px;
          height: 180px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }
      }
      .buy-wrapper {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        font-size: 18px;
        background-color: #2C2F36;
        .buy-ticket {
          width: 120px;
          height: 100%;
          line-height: 50px;
          background: #000;
          background: url('~@/assets/imgs/main/cinema_card/arr-right.png') no-repeat right center;
          background-size: 30px 25px;
        }
      }
    }
  }
</style>