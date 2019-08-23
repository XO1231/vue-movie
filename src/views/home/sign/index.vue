<template>
  <div class="sign-main">
    <!-- 签到头部关闭和列表 -->
    <div class="sign-header">
      <div class="sign-header-close" @click="$router.go(-1)"></div>
      <router-link to="#" class="sign-header-list"></router-link>
    </div>
 
    <!-- 滑动部分  -->
    <div class="sign-content" v-switch>
      <!-- 图片定位 -->
      <!-- <swiper :options="signOptions" class="sign-swiper">
        <swiperSlide v-for="item in covers" :key="item.id">
          <div class="sign-cover">
            <img :src="require('../../../assets/imgs/home-sign/'+item.img)" alt="电影签到" />
            <div class="sign-cover-info">
              <div class="sign-cover-text">
                <div class="sign-cover-title">“{{item.info}}”</div>
                <div class="sign-cover-name">{{item.name}}</div>
              </div>
              <div class="sign-cover-voice">
                <div class="sign-cover-icon"></div>
                <div class="sign-cover-voicedate">{{item.voicedate}}</div>
              </div>
            </div>
          </div>
        </swiperSlide>
      </swiper>-->
      <div
        :class="'sign-item-'+item.ite+' sign-item'"
        v-for="item in covers"
        :key="item.id"
        
      >
        <img :src="require('../../../assets/imgs/home-sign/'+item.img)" alt="电影签到" />
        <div class="sign-cover-info" v-show="item.ite == 2 || item.ite == 3 ? istrue : !istrue">
          <div class="sign-cover-text">
            <div class="sign-cover-title">“{{item.info}}”</div>
            <div class="sign-cover-name">{{item.name}}</div>
          </div>
          <div class="sign-cover-voice">
            <div class="sign-cover-icon"></div>
            <div class="sign-cover-voicedate">{{item.voicedate}}</div>
          </div>
        </div>
      </div>
    </div>
 
    <!-- 签到底部 电影 分享 点赞 评论 功能-->
    <div class="sign-footer">
      <router-link :to="{name:'movie'}">
        <div class="sign-footer-film sign-footer-item">
          <img class="sign-footer-img" src="../../../assets/imgs/home-sign/sign-film.png" alt="电影" />
        </div>
      </router-link>
      <div class="sign-footer-share sign-footer-item">
        <img class="sign-footer-img" src="../../../assets/imgs/home-sign/sign-share.png" alt="分享" />
      </div>
      <div class="sign-footer-fabulous sign-footer-item" v-fabulous>
        <img
          class="sign-footer-img"
          src="../../../assets/imgs/home-sign/sign-fabulous.png"
          alt="点赞"
        />
      </div>
      <div class="sign-footer-comment.png sign-footer-item">
        <img class="sign-footer-img" src="../../../assets/imgs/home-sign/sign-comment.png" alt="评论" />
      </div>
    </div>
  </div>
</template>
 
<script>
import "swiper/dist/css/swiper.css";
//引入组件 注册组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Sign",
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      isShow: true,
      signOptions: {
        direction: "vertical", // 垂直切换选项
        loop: true, // 循环模式选项
        spaceBetween: 30,
        loopedSlides: 1,
        centeredSlides: false, // 选中slide居中显示
        // initialSlide: 1, // 默认选中项索引
        slidesPerView: 1, // 自动匹配每次显示的slide个数,loop='auto'模式下，还需要设置loopedSlides
        effect: "coverflow", //  切换效果-3d
        coverflowEffect: {
          //   rotate: 0,
          stretch: 40,
          depth: 160,
          modifier: 1,
          slideShadows: false
        }
      },
      covers: [
        {
          ite: 1,
          id: 1,
          name: "《星际与暗黑》",
          info: "充能水晶已就绪,光学水晶校正中。",
          img: "sign-cover3.png",
          voice: "xxx",
          voicedate: "6s"
        },
        {
          ite: 2,
          id: 2,
          name: "《傲慢与偏见》",
          info: "要是他没有触犯我的骄傲,我也很容易原谅他的骄傲。",
          img: "sign-cover1.png",
          voice: "xxx",
          voicedate: "8s"
        },
        {
          ite: 3,
          id: 3,
          name: "《炉石与魔兽》",
          info: "啊!传说,快到酒馆里排排坐。",
          img: "sign-cover2.png",
          voice: "xxx",
          voicedate: "10s"
        }
      ],
      istrue: false
    };
  },
  comments: {},
  methods: {},
  directives: {
    fabulous(el) {
      el.onclick = function() {
        var eles = document.createElement("div");
        eles.innerText = "+1";
        eles.style = `
        position: absolute;
        top:-10px;
        left:10px;
        font-size:18px;
        color:#F25B86;
        `;
        eles.classList.add("fabulousAnimate", "animated", "zoomOutDown");
        el.appendChild(eles);
        setTimeout(() => {
          el.removeChild(eles);
        }, 300);
      };
    },
    switch(el, binding, vnode) {
      // el.ontouchstart() {
      // console.log("点击了")
      // }
      var vm = vnode.context;
      el.ontouchstart = function(e) {
        var startY = e.targetTouches[0].clientY;
        var endY = e.targetTouches[0].clientY;
        var istrue = 0;
        var valueC = null;
        var index1 = vm.covers.findIndex(item => item.ite == 1);
        var index2 = vm.covers.findIndex(item => item.ite == 2);
        var index3 = vm.covers.findIndex(item => item.ite == 3);
        var titmer = null;
        this.ontouchmove = function(e) {
          endY = e.targetTouches[0].clientY;
          valueC = startY - endY;
          if (Math.abs(valueC) > 100) {
            if (valueC > 0) {
              // 向上滑动    效果应该是  第一张变最后一张
              el.children[index1].classList.add("animated", "slideOutUp", "fast");
              titmer = setTimeout(function() {
                vm.covers[index1].ite = 3;
                vm.covers[index2].ite = 1;
                vm.covers[index3].ite = 2;
              }, 600);
            } else {
              // 向下滑动  效果应该是  最后一张变第一张
              el.children[index1].classList.add("animated", "slideOutDown", "fast");
              titmer = setTimeout(function() {
                vm.covers[index1].ite = 2;
                vm.covers[index2].ite = 3;
                vm.covers[index3].ite = 1;
              }, 600);
            }
          } else {
          }
        };
        this.ontouchend = function(e) {
          clearTimeout(titmer);
        };
      };
    }
  }
};
</script>
 
<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
@import "../../../../node_modules/animate.css/animate.min.css";
.sign-main {
  width: 100%;
  height: 100%;
  position: relative;
 
  //   头部
  .sign-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    padding: 0 $basePadding;
    box-sizing: border-box;
    background: url(../../../assets/imgs/home-sign/sign-bg.png) center no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: space-between;
    z-index: 1;
    .sign-header-close {
      width: 16px;
      height: 16px;
      background: url(../../../assets/imgs/home-sign/sign-close.png) center
        no-repeat;
      background-size: 16px 16px;
      margin-top: 10px;
    }
    .sign-header-list {
      width: 21px;
      height: 15px;
      background: url(../../../assets/imgs/home-sign/sign-list.png) center
        no-repeat;
      background-size: 21px 15px;
      margin-top: 10px;
    }
  }
  //   滑动
  .sign-content {
    width: 100%;
    height: 520px;
    position: fixed;
    top: 40px;
    left: 0;
    z-index: 2;
    .sign-item {
      position: absolute;
      width: 100%;
      height: 100%;
      //  transition: all .4s ease;
      .sign-cover-info {
        width: 100%;
        height: 100px;
        padding: 0 40px;
        box-sizing: border-box;
        position: absolute;
        bottom: 40px;
        left: 0;
        display: flex;
        align-items: flex-end;
        .sign-cover-text {
          width: 227px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          .sign-cover-title {
            height: 50px;
            font-size: 18px;
            text-align: left;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          .sign-cover-name {
            font-size: 14px;
          }
        }
        .sign-cover-voice {
          width: 73px;
          height: 30px;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
          border-radius: 11px;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .sign-cover-icon {
            width: 14px;
            height: 18px;
            background: url(../../../assets/imgs/home-sign/sign-play.png) center
              no-repeat;
            background-size: 14px 18px;
          }
          .sign-cover-voicedate {
            height: 20px;
            font-size: 16px;
            line-height: 20px;
            margin-right: 5px;
          }
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    .sign-item-1 {
      z-index: 9;
      // transition: all .4s ease;
    }
    .sign-item-2 {
      z-index: 8;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      // transition: all .4s ease;
      img {
        width: 80%;
        height: 80%;
        margin-bottom:-10px;
      }
      .sign-cover-info {
        bottom: 140px;
      }
    }
    .sign-item-3 {
      z-index: 7;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      img {
        width: 60%;
        height: 60%;
        margin-bottom:-16px;
      }
      .sign-cover-info {
        bottom: 140px;
      }
    }
    // swiper
    // .sign-swiper {
    //   width: 100%;
    //   height: 100%;
    // }
    // .sign-cover {
    //   width: 100%;
    //   height: 100%;
    //   position: relative;
    //   img {
    //     width: 100%;
    //     height: 100%;
    //     // box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
    //   }
    //   .sign-cover-info {
    //     width: 100%;
    //     height: 100px;
    //     padding: 0 40px;
    //     box-sizing: border-box;
    //     position: absolute;
    //     bottom: 40px;
    //     left: 0;
    //     display: flex;
    //     align-items: flex-end;
    //     .sign-cover-text {
    //       width: 227px;
    //       height: 100%;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: space-between;
    //       align-items: flex-start;
    //       .sign-cover-title {
    //         height: 50px;
    //         font-size: 18px;
    //         text-align: left;
    //         text-overflow: ellipsis;
    //         overflow: hidden;
    //       }
    //       .sign-cover-name {
    //         font-size: 14px;
    //       }
    //     }
    //     .sign-cover-voice {
    //       width: 73px;
    //       height: 30px;
    //       background: linear-gradient(
    //         150deg,
    //         rgba(242, 91, 134, 1) 0%,
    //         rgba(241, 172, 94, 1) 100%
    //       );
    //       box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
    //       border-radius: 11px;
    //       display: flex;
    //       justify-content: space-around;
    //       align-items: center;
    //       .sign-cover-icon {
    //         width: 14px;
    //         height: 18px;
    //         background: url(../../../assets/imgs/home-sign/sign-play.png) center
    //           no-repeat;
    //         background-size: 14px 18px;
    //       }
    //       .sign-cover-voicedate {
    //         height: 20px;
    //         font-size: 16px;
    //         line-height: 20px;
    //         margin-right: 5px;
    //       }
    //     }
    //   }
    // }
  }
  //   滑动动画
 
  //   底部
  .sign-footer {
    width: 100%;
    height: 60px;
    padding: 0 65px;
    box-sizing: border-box;
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    justify-content: space-between;
    z-index: 3;
    .sign-footer-item {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      .sign-footer-img {
        width: 21px;
        height: 21px;
      }
    }
    .sign-footer-share {
      background-color: #33363d;
    }
    .sign-footer-fabulous {
      background-color: #33363d;
      position: relative;
    }
  }
}
</style>