<template>
  <div class="userInfo">
    <div class="userInfo-header">
      <i class="iconfont icon-left" @click="$router.push({path:'/main'})"></i>
      <div class="userInfo-wrapper"></div>
    </div>
    <BaseLayer>
      <template>
        <div class="content-msg">
          <div class="info-pic">
            <img :src="infoPic" alt srcset />
          </div>
          <div class="info-name">
            yujia1130
            <div class="info-lv">LV1</div>
          </div>
          <div class="info-say">同学有点懒，还没有写签名</div>
          <div class="info-watch">
            <router-link to="/main/userInfo/want" class="info-want">
              <div class="want-wrapper">
                <p>想看</p>
                <p>12</p>
              </div>
            </router-link>
            <router-link to="/main/userInfo/watched" class="info-watched">
              <div class="watched-wrapper">
                <p>看过</p>
                <p>5</p>
              </div>
            </router-link>
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/MainLayer";
export default {
  name: 'userInfo',

  data () {
    return {
      infoPic: require('@/assets/imgs/main/user.png')
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
.userInfo {
  height: 100%;
  .fade-enter {
    opacity: 0;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-enter-active {
    transition: opacity 0.3s;
  }
  .fade-leave-active {
    opacity: 0;
    transition: opacity 0.3s;
  }
  .userInfo-header {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    padding: 0 $basePadding;
    height: 45px;
    .icon-left {
      text-align: left;
      line-height: 30px;
      z-index: 9;
      color: white;
      position: absolute;
      left: 20px;
      top: 20px;
      width: 30px;
      height: 30px;
      font-size: 16px;
    }
    .userInfo-wrapper {
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
      width: 100%;
      height: 230px;
      border-radius: 40px;
      background: linear-gradient(
        123deg,
        rgba(242, 94, 133, 1) 0%,
        rgba(241, 166, 97, 1) 100%
      );
    }
  }
  .baselayer-main {
    .content-msg {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      padding-top: 40px;
      box-sizing: border-box;
      width: 336px;
      height: 185px;
      background-color: #33363d;
      margin: 30px auto 0;
      box-shadow: 0px 0px 4px 3px rgba(0, 0, 0, 0.1);
      border-radius: 17px;
      position: relative;
      .info-pic {
        width: 73px;
        height: 73px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        img {
          width: 100%;
          height: 100%;
        }
      }
      .info-name {
        font-size: 18px;
        @include flexcenter;
        .info-lv {
          margin-left: 10px;
          width: 50px;
          height: 18px;
          font-size: 10px;
          line-height: 18px;
          text-indent: 10px;
          color: #fbc349;
          border: 1px solid #fbc349;
          border-radius: 12px;
          background: url(~@/assets/imgs/main/member-log.png) no-repeat center;
          background-size: 12px 12px;
          background-position: 6px 3px;
        }
      }
      .info-say {
        font-size: 14px;
        color: rgb(153, 153, 153);
      }
      .info-watch {
        width: 100%;
        padding: 0 28px;
        box-sizing: border-box;
        @include flexcenter;
        .info-want,
        .info-watched {
          div {
            display: flex;
            justify-content: space-around;
            align-items: center;
            font-size: 14px;
            color: #fff;
          }
          width: 134px;
          height: 37px;
        }
        .info-want {
          border-radius: 6px;
          padding: 1px;
          box-sizing: border-box;
          background-image: linear-gradient(
            139deg,
            rgba(242, 96, 132, 1),
            rgba(241, 159, 100, 1)
          );
          .want-wrapper {
            width: 100%;
            height: 100%;
            border-radius: 6px;
            background-color: #33363d;
          }
        }
        .info-watched {
          border-radius: 6px;
          padding: 1px;
          background-image: linear-gradient(
            137deg,
            rgba(60, 76, 172, 1),
            rgba(198, 69, 151, 1)
          );
          .watched-wrapper {
            width: 100%;
            height: 100%;
            border-radius: 6px;
            background-color: #33363d;
          }
        }
      }
    }
  }
}
</style>
