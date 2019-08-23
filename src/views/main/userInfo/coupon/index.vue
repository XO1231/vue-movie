<template>
  <div class="coupons-main">
    <Header class="com-header" title="优惠卷"></Header>
    <div class="tip">你有{{ getCount }}张优惠卷可用</div>
    <div class="container">
      <BaseLayer>
        <ul class="coupons-list">
          <li
            v-for="(item, index) in couponsList"
            :key="index"
            class="coupons-item"
            :class="{'out-date': item.type == 'outdate'}"
          >
            <div class="detail">
              <p class="title">电影专享代金卷</p>
              <p>购票即可抵扣，快去购票</p>
              <p class="indate">有效期至：{{ item.date }}</p>
            </div>
            <div class="price-wrapper" :class="{'out-date': item.type == 'outdate'}">
              <p class="price">
                <span>{{ item.price }}</span>元
              </p>
              <router-link :to="{name: 'purch'}" tag="p" class="buy-ticket" v-if="item.type == 'indate'">购票</router-link>
            </div>
          </li>
        </ul>
      </BaseLayer>
    </div>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayerMlj.vue";
import Header from "@/views/main/components/Header.vue";

export default {
  data() {
    return {
      couponsList: [
        { price: 10, date: "2019-04-11", type: "indate" },
        { price: 5, date: "2019-04-11", type: "indate" },
        { price: 5, date: "2019-04-11", type: "indate" },
        { price: 5, date: "2019-04-11", type: "indate" },
        { price: 5, date: "2019-04-01", type: "outdate" },
        { price: 10, date: "2019-04-01", type: "outdate" }
      ]
    };
  },
  computed: {
    getCount() {
      var count = 0;
      this.couponsList.forEach(item => {
        if (item.type == 'indate') {
          count++;
        }
      })
      return count;
    }
  },
  components: {
    BaseLayer,
    Header
  }
};
</script>

<style lang="scss" scoped>
.coupons-main {
  width: 100%;
  height: 100%;
  .tip {
    position: fixed;
    top: 66px;
    left: 0;
    padding-left: 20px;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: left;
    letter-spacing: 3px;
    background: #2c2f36;
  }
  .container {
    padding: 0 20px;
    padding-top: 106px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    .coupons-list {
      padding-bottom: 10px;
      box-sizing: border-box;
      .coupons-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 11px;
        padding: 22px 40px 22px 22px;
        width: 335px;
        height: 120px;
        background: url("~@/assets/imgs/main/coupon/can-use.png") no-repeat
          center;
        background-size: cover;
        box-sizing: border-box;
        &.out-date {
          background-image: url("~@/assets/imgs/main/coupon/out-date.png");
        }
        .detail {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          font-size: 12px;
          text-align: left;
          .title {
            font-size: 18px;
          }
        }
        .price-wrapper {
          display: flex;
          flex-direction: column;
          width: 54px;
          font-size: 16px;
          &.out-date {
            background: url("~@/assets/imgs/main/coupon/out-date2.png")
              no-repeat center bottom;
            background-size: 54px 54px;
            .price {
              margin-top: 10px;
              height: 30px;
              line-height: 30px;
              span {
                font-size: 24px;
              }
            }
          }
          .price {
            height: 30px;
            line-height: 30px;
            span {
              font-size: 24px;
            }
          }
          .buy-ticket {
            margin-top: 15px;
          }
        }
      }
    }
  }
}
</style>