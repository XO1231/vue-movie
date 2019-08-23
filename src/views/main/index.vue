<template>
  <div class="main-main">
    <div class="linkbox">
      <router-link to="/main/setting" class="setting"></router-link>
      <router-link to="/main/message" class="chart"></router-link>
    </div>
    <div class="main-header">
      <div class="main-wrapper"></div>
    </div>
    <BaseLayer>
      <template>
        <router-link to="/main/userInfo" class="user">
          <div class="user-msg">
            <div class="user-pic"></div>
            <div class="user-name">
              yujia1130
              <div class="user-lv">V1青铜会员</div>
            </div>
          </div>
          <div class="go-info"></div>
        </router-link>
        <!-- 会员中心 -->
        <div class="member-center">
          <div class="member-title">会员中心</div>
          <div class="member-text">
            <p>会员中心</p>
            <p>50元通兑券天天送</p>
          </div>
          <div class="member-pic"></div>
        </div>
        <!-- order -->
        <div class="main-order">
          <div class="order-title">
            我的订单
            <router-link to="/main/orders">
              全部
              <i class="iconfont icon-next"></i>
            </router-link>
          </div>
          <ul class="order-list">
            <li>
              <router-link to="/main">
                <div></div>
                <p>未消费</p>
              </router-link>
            </li>
            <li>
              <router-link to="/main">
                <div></div>
                <p>代付款</p>
              </router-link>
            </li>
            <li>
              <router-link to="/main">
                <div></div>
                <p>待评价</p>
              </router-link>
            </li>
            <li>
              <router-link to="/main">
                <div></div>
                <p>退款</p>
              </router-link>
            </li>
          </ul>
        </div>
        <ul class="main-list">
          <li>
            <router-link to="/main/userInfo/cinemaCard">
              <p>影城会员卡</p>
              <i class="iconfont icon-next"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/main/userInfo/coupon">
              <p>优惠券</p>
              <i class="iconfont icon-next"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/main">
              <p>我的收藏</p>
              <i class="iconfont icon-next"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/">
              <p>帮助与反馈</p>
              <i class="iconfont icon-next"></i>
            </router-link>
          </li>
        </ul>
        <div class="height150px"></div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/MainLayer";
export default {
  name: 'Main',

  data () {
    return {
    }
  },
  components: {
    BaseLayer
  },
  methods: {}
}
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
@import "@/assets/style/common/reset.scss";
@import "~@/assets/icon/iconfont.css";
.main-main {
  height: 100%;
  .linkbox {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 20px;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-right: 20px;
    .setting,
    .chart {
      width: 20px;
      height: 20px;
      background-size: cover;
      float: left;
      // margin-right: 21px;
      z-index: 9;
    }
    .setting {
      background-image: url(~@/assets/imgs/main/setting.png);
    }
    .chart {
      background-image: url(~@/assets/imgs/main/chart.png);
    }
  }
  a {
    color: #fff;
  }
  .main-header {
    position: relative;
    z-index: -1;
    width: 100%;
    box-sizing: border-box;
    padding: 0 $basePadding;
    height: 45px;
    .main-wrapper {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
      width: 100%;
      height: 210px;
      border-radius: 40px;
      background: linear-gradient(
        123deg,
        rgba(242, 94, 133, 1) 0%,
        rgba(241, 166, 97, 1) 100%
      );
    }
  }
  .baselayer-main {
    margin-top: 20px;
    overflow: hidden;
    width: 100%;
    box-sizing: border-box;
  }
  .user {
    @include flexcenter;
    width: 100% !important;
    height: 75px !important;
    padding: 0 $basePadding;
    box-sizing: border-box;
    .user-msg {
      @include flexcenter;
      .user-pic {
        width: 73px;
        height: 73px;
        border-radius: 50%;
        background: url(~@/assets/imgs/main/user.png) no-repeat center;
        background-size: cover;
      }
      .user-name {
        margin-left: 15px;
        font-size: 18px;
        text-align: left;
        .user-lv {
          width: 100px;
          height: 23px;
          background-color: #33363d;
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
          border-radius: 4px;
          background-image: url(~@/assets/imgs/main/right.png);
          background-size: 8px 14px;
          background-repeat: no-repeat;
          background-position: 87px 4px;
          text-indent: 5px;
          line-height: 23px;
        }
      }
    }
    .go-info {
      background: url(~@/assets/imgs/main/right.png) no-repeat center;
      width: 15px;
      height: 20px;
    }
  }
  .member-center {
    height: 68px;
    width: 336px;
    margin: 20px auto 0;
    padding: 0 $basePadding;
    box-sizing: border-box;
    background-color: #33363d;
    border-radius: 17px;
    overflow: hidden;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .member-title {
      font-size: 18px;
      text-align: center;
      line-height: 47px;
      height: 47px;
      width: 119px;
      border-right: 1px solid #979797;
    }
    .member-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      width: 100px;
      height: 47px;
      font-size: 12px;
      color: #ffffff;
    }
    .member-pic {
      width: 34px;
      height: 34px;
      background: url(~@/assets/imgs/main/money.png) no-repeat center;
      background-size: cover;
    }
  }
  // order
  .main-order {
    overflow: hidden;
    width: 100%;
    height: 137px;
    padding: 0 $basePadding;
    box-sizing: border-box;
    background-color: #33363d;
    margin-top: 23px;
    .order-title {
      margin-top: 10px;
      height: 25px;
      width: 100%;
      @include flexcenter;
      font-size: 18px;
      a {
        font-size: 14px;
      }
    }
    .order-list {
      height: 57px;
      width: 100%;
      @include flexcenter;
      font-size: 14px;
      margin-top: 22px;
      li {
        height: 100%;
        a {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          div {
            margin: 0 auto;
            width: 24px;
            height: 24px;
            background-size: 100% 100%;
          }
        }
      }
      li:nth-child(1) div {
        background-image: url(~@/assets/imgs/main/unconsumed.png);
      }
      li:nth-child(2) div {
        background-image: url(~@/assets/imgs/main/no-pay.png);
      }
      li:nth-child(3) div {
        background-image: url(~@/assets/imgs/main/evaluate.png);
      }
      li:nth-child(4) div {
        background-image: url(~@/assets/imgs/main/refund.png);
      }
    }
  }
  .main-list {
    margin-top: 22px;
    height: 215px;
    width: 100%;
    padding: 0 $basePadding;
    box-sizing: border-box;
    background-color: #33363d;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
    li {
      width: 100%;
      height: 25%;
      a {
        width: 100%;
        height: 100%;
        @include flexcenter;
        font-size: 16px;
      }
    }
  }
  .height150px {
    height: 150px;
  }
}
</style>
