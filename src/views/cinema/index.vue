<template>
  <div class="cinema-main">
    <BaseLayer>
      <template v-slot:header>
        <!-- 头部 -->
        <div class="nav">
          <div class="nav-h">
            <router-link class="cinema-selector" :to="{name:'city'}">{{city}}</router-link>
            <p class="nav-name">影院</p>
            <span class="nav-search"></span>
          </div>
          <div class="nav-f">
            <div class="nav-location">
              <p class="nav-location-p">我在：金水区绿地新都会</p>
            </div>
          </div>
        </div>
      </template>
      <!-- 默认插槽 就是内容区域 -->
      <template v-slot:default>
        <div class="contents">
          <ul class="cinema-list">
            <li class="cinema-item" v-for="item in cinemaDate.cinemalist" :key="item.id">
              <router-link class="item-a" :to="{name:'cinemaDetail'}">
                <div class="cinema-name-price">
                  <p class="cinema-name">{{item.name}}</p>
                  <p class="cinema-price">
                    <span class="price">{{item.price}}</span>起
                  </p>
                </div>
                <div class="cinema-address-distance">
                  <p class="cinema-address">{{item.address}}</p>
                  <p class="cinema-distance">{{item.distance}}</p>
                </div>
                <div class="cinema-text">
                  <span class="item-text">惠</span>
                  <p class="item-p">{{item.coupon}}</p>
                </div>
                <div class="cinema-text">
                  <span class="item-text">促</span>
                  <p class="item-p">{{item.promotion}}</p>
                </div>
                <div class="cinema-text">
                  <span class="item-text">卡</span>
                  <p class="item-p">{{item.card}}</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer";
import cinemaDate from "@/assets/cinemaDate.json";
export default {
  name: "Cinema",
  components: {
    BaseLayer
  },
  data() {
    return {
      cinemaDate,
      city: "地址"
    };
  },
  created() {
    // console.log(cinemaDate);
    this.currentcity();
  },
  methods: {
    currentcity() {
      // console.log(this.$router.options.routes.find(el => el.name == 'home').meta)
      var ct = this.$router.options.routes.find(el => el.name == "home").meta
        .city;
      if (ct) {
        this.city = ct;
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.cinema-main {
  height: 100%;
  .nav {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    background-color: #23262d;
    align-items: center;
    width: 100%;
    height: 86px;
    .nav-h {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 44px;
      background-color: #33363d;
      padding: 0 20px;
      box-sizing: border-box;
      .cinema-selector {
        display: block;
        width: 44px;
        height: 100%;
        color: #dfdfdf;
        font-size: 14px;
        text-decoration: none;
        line-height: 44px;
        text-align: left;
        background: url(../../assets/imgs/cinema/arrow.png) no-repeat center
          right;
        background-size: 11px;
        opacity: 0.5865;
        overflow: hidden;
      }
      .nav-name {
        font-size: 18px;
        color: #fff;
      }
      .nav-search {
        display: block;
        width: 40px;
        height: 40px;
        background: url(../../assets/imgs/cinema/search.png) no-repeat center;
        background-size: 20px;
      }
    }
    .nav-f {
      width: 100%;
      .nav-location {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
        height: 30px;
        padding: 0 46px;
        background: url(../../assets/imgs/cinema/location.png) no-repeat 20px
          center;
        background-size: 13px;
        background-color: #2c2f36;
        .nav-location-p {
          font-size: 12px;
          opacity: 0.5865;
        }
      }
    }
  }
  .contents {
    padding-top: 56px;
    .cinema-list {
      width: 100%;
      padding: 30px 20px 100px;
      box-sizing: border-box;
      .cinema-item {
        width: 100%;
        height: 146px;
        padding: 9px 12px 12px 11px;
        margin-top: 15px;
        box-sizing: border-box;
        background: rgba(51, 54, 61, 1);
        border-radius: 6px;
        .item-a {
          display: block;
          width: 100%;
          height: 100%;
          color: #fff;
          text-decoration: none;
          .cinema-name-price {
            width: 100%;
            height: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;
            .cinema-name {
              font-weight: 500;
            }
            .cinema-price {
              font-size: 12px;
              opacity: 0.5865;
              .price {
                color: #fbc34a;
                font-size: 14px;
              }
            }
          }
          .cinema-address-distance {
            width: 100%;
            height: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            line-height: 17px;
            opacity: 0.5865;
          }
          .cinema-text {
            width: 100%;
            height: 27px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 12px;
            &:nth-child(3) .item-text {
              background: linear-gradient(
                135deg,
                rgba(235, 110, 117, 1) 0%,
                rgba(247, 166, 83, 1) 100%
              );
            }
            &:nth-child(4) .item-text {
              background: linear-gradient(
                135deg,
                rgba(176, 70, 157, 1) 0%,
                rgba(97, 72, 170, 1) 100%
              );
            }
            &:nth-child(5) .item-text {
              background: linear-gradient(
                135deg,
                rgba(50, 36, 149, 1) 0%,
                rgba(49, 56, 172, 1) 100%
              );
            }
            .item-text {
              display: block;
              width: 19px;
              height: 19px;
              margin-right: 9px;
              text-align: center;
              line-height: 19px;
              color: #dfdfdf;
            }
            .item-p {
              opacity: 0.5865;
            }
          }
        }
      }
    }
  }
}
</style>
