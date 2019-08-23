<template>
  <div class="home-main">
    <!-- 自定义组件 -->
    <BaseLayer v-show="istrue">
      <!-- 头部插槽 -->
      <template v-slot:header>
        <!-- 头部 -->
        <div class="nav">
          <!-- 定位 -->
          <router-link class="city-selector" :to="{name:'city'}">
            <div class="city-selector-text">{{currentCiyt+'__'}}</div>
            <div class="city-selector-bot"></div>
          </router-link>
          <!-- 搜索 -->
          <img class="search-img" src="../../assets/imgs/home/home-search.png" alt />
          <input
            class="search-input"
            type="text"
            placeholder="搜影片、影院、影人"
            style="background-color: #33363d"
            @click="istrue=false"
          />
          <!-- 签到 -->
          <router-link :to="{name:'sign'}" class="date-text">
            <!-- <div class="date-text"></div> -->
          </router-link>
        </div>
      </template>
      <!-- 默认插槽 就是内容区域 -->
      <!-- 主体插槽 -->
      <template v-slot:default>
        <!-- 主轮播部分 -->
        <div class="banner">
          <!-- 头部header swiper轮播部分 -->
          <swiper class="banner-swiper" :options="bannerOptions" ref="bannerSwiper">
            <!-- slides -->

            <swiper-slide v-for="imgObj in bannerImgs" :key="imgObj.id">
              <router-link to="#" class="banner-go">
                <img class="img" :src="imgObj.img" alt />
              </router-link>
            </swiper-slide>
          </swiper>
          <!-- 外写的分页器 -->
          <div class="banner-pagination" slot="pagination"></div>
        </div>
        <!-- 热映影院 -->
        <titleStyle :hrefs="'/movie/hot'">热映影院</titleStyle>

        <!-- 热映影片 轮播-->
        <div class="received">
          <swiper class="received-swiper" :options="receivedOptions">
            <!-- slides -->
            <swiper-slide class="received-slide" v-for="imgObj in receivedImgs" :key="imgObj.id">
              <router-link :to='{"name":"info","params":{"id":imgObj.id}}'>
                <img class="img" :src="imgObj.img" alt="热映电影" />
              </router-link>
              <!-- <img class="img" :src="imgObj.img" alt="热映电影" /> -->
              <div class="name">{{imgObj.name}}</div>
              <!-- <a href="#" class="ticket">购票</a> -->
              <router-link :to="{name:'seat'}" class="ticket">购票</router-link>
            </swiper-slide>
          </swiper>
        </div>

        <!-- 即将上映-->
        <titleStyle :hrefs="'/movie/soon'">即将上映</titleStyle>

        <!-- 即将上映  轮播-->
        <div class="upcoming">
          <!-- swiper主体 -->
          <swiper class="upcoming-swiper" :options="upcomingOptions">
            <!-- swiper单个页面 -->
            <swiper-slide class="upcoming-slide" v-for="item in upcomingImgs" :key="item.id">
              <router-link :to="{name:'soon'}" class="upcoming-go">
                <img class="img" :src="item.img" alt="最新电影" />
              </router-link>
              <div class="name">{{item.name}}</div>
              <div class="date">{{item.date}}</div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- 精选预告 -->
        <titleStyle :hrefs="'/movie/soon'">精选预告</titleStyle>
        <!-- 预告片轮播 -->
        <div class="trailer">
          <swiper class="trailer-swiper" :options="trailerOptions">
            <swiper-slide class="trailer-slide" v-for="item in trailerVideos" :key="item.id">
              <!-- <video class="trailer-video" controls >
                <source :src="item.video" />
              </video>-->
              <router-link class="trailer-video" :to="{name:'soon'}">
                <img class="trailer-img" :src="item.video" alt />
                <div class="trailer-but">
                  <div class="trailer-but-triangle"></div>
                </div>
                <div class="trailer-info">
                  <span class="trailer-info-hot">{{item.hot}}次播放</span>
                  <span class="trailer-info-duration">{{item.duration}}</span>
                </div>
              </router-link>

              <div class="trailer-text">{{item.text}}</div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="footerz"></div>
      </template>
    </BaseLayer>
    <div class="searchArea" v-show="!istrue">
      <!-- 搜索区域的头部 -->
      <div class="searchBox">
        <div class="searchBox-magnifier"></div>
        <input
          class="searchBox-input"
          type="text"
          style="background-color: #33363d"
          placeholder="搜影片、影院、影人"
          v-focus
        />
        <span class="searchBox-cancel" @click="istrue=true">取消</span>
      </div>

      <!-- 搜索区的热点 -->
      <div class="earchHot-title">
        <div class="earchHot-title-icon"></div>
        <div class="earchHot-title-text">萤火虫热搜</div>
      </div>
      <div class="earchHot">
        <router-link :to="{name:'movie',info:{id:1}}">
          <div class="earchHot-item">
            <span class="earchHot-item-text">一条狗的使命</span>
            <hoticon :hotColor="['#B0469D','#6148AA']">沸</hoticon>
          </div>
        </router-link>
        <router-link :to="{name:'movie',info:{id:2}}">
          <div class="earchHot-item">
            <span class="earchHot-item-text">哥斯拉2:怪兽之王</span>
          </div>
        </router-link>
        <router-link :to="{name:'movie',info:{id:3}}">
          <div class="earchHot-item">
            <span class="earchHot-item-text">大鱼海棠</span>
            <hoticon :hotColor="['#EB6E75','#F7A653']">新</hoticon>
          </div>
        </router-link>
        <router-link :to="{name:'movie',info:{id:4}}">
          <div class="earchHot-item">
            <span class="earchHot-item-text">下一任:前任</span>
          </div>
        </router-link>
        <router-link :to="{name:'movie',info:{id:5}}">
          <div class="earchHot-item">
            <span class="earchHot-item-text">人间小团圆</span>
          </div>
        </router-link>
        <router-link :to="{name:'movie',info:{id:2}}">
          <div class="earchHot-item">
            <span class="earchHot-item-text">音乐家</span>
            <hoticon :hotColor="['#EB6E75','#F7A653']">新</hoticon>
          </div>
        </router-link>
        <router-link :to="{name:'movie',info:{id:3}}">
          <div class="earchHot-item">
            <span class="earchHot-item-text">爱你直到事件尽头</span>
            <hoticon :hotColor="['#322495','#3138AC']">沸</hoticon>
          </div>
        </router-link>
        <router-link :to="{name:'movie',info:{id:1}}">
          <div class="earchHot-item">
            <router-link :to="{name:'movie'}" class="earchHot-item-all">更多热搜 ></router-link>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import titleStyle from "./title";
import hoticon from "./hoticon";
import "swiper/dist/css/swiper.css";
//引入组件 注册组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BaseLayer from "@/components/BaseLayer";

// 通过api获取电影数据
import movieApi from '@/api/movie'
export default {
  name: "Home",
  components: {
    swiper,
    swiperSlide,
    BaseLayer,
    titleStyle,
    hoticon,
  },
  data() {
    return {
      city: "地址",
      istrue: true,
      movieList: [], // 模拟数据
      bannerImgs: [
        {
          id: 1,
          // img: require("@/assets/imgs/home/banner1.png")
          img: 'https://images.weserv.nl?url=http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2549558913.jpg'
        },
        {
          id: 2,
          img: require("@/assets/imgs/home/banner2.png")
        },
        {
          id: 3,
          img: require("@/assets/imgs/home/banner3.png")
        }
      ],
      bannerOptions: {
        spaceBetween: -5,
        centeredSlides: true,
        loop: true,
        loopAdditionalSlides: 1,
        pagination: {
          el: ".banner-pagination"
        }
      },
      receivedImgs: [
        {
          id: 1,
          img: require("@/assets/imgs/home/home-received1.png"),
          name: "傲慢与偏见"
        },
        {
          id: 2,
          img: require("@/assets/imgs/home/home-received2.png"),
          name: "韩国电影"
        },
        {
          id: 3,
          img: require("@/assets/imgs/home/home-received3.png"),
          name: "帕丁熊"
        },
        {
          id: 4,
          img: require("@/assets/imgs/home/home-received4.png"),
          name: "超体"
        },
        {
          id: 5,
          img: require("@/assets/imgs/home/home-received5.png"),
          name: "凹凸曼"
        }
      ],
      receivedOptions: {
        slidesPerView: 3.5
        // spaceBetween: 15
      },
      upcomingImgs: [
        {
          id: 1,
          img: require("@/assets/imgs/home/home-upcoming1.png"),
          date: "1月5日",
          name: "My bluebery…"
        },
        {
          id: 2,
          img: require("@/assets/imgs/home/home-upcoming2.png"),
          date: "1月12日",
          name: "THE WORLD…"
        },
        {
          id: 3,
          img: require("@/assets/imgs/home/home-upcoming3.png"),
          date: "1月30日",
          name: "BABBIT HOLE"
        }
      ],
      upcomingOptions: {
        slidesPerView: 2.5
      },
      trailerVideos: [
        {
          id: 1,
          video: require("@/assets/imgs/home/home-video1.png"),
          text:
            "讲个笑话,<炉石传说>是一部能够体现反专制、反乌托邦,的免费暴雪游戏",
          hot: 894,
          duration: "04:43"
        },
        {
          id: 2,
          video: require("@/assets/imgs/home/home-video1.png"),
          text:
            "讲个笑话,<炉石传说>是一部能够体现反专制、反乌托邦,的免费暴雪游戏",
          hot: 1894,
          duration: "02:43"
        }
      ],
      trailerOptions: {
        slidesPerView: 1.2,
        spaceBetween: 10
      }
    };
  },
  created() {
    this.currentcity();
    // console.log(this.$route);
    // 初始化电影数据
    // this.getMovieList();
    this.getMovieListByNet();
  },
  activated(){
    console.log('act...')
  },
  deactivated(){
    console.log('deact...')
  },
  methods: {
    currentcity() {
      // if (this.$route.meta.city) {
      //   this.city = this.$route.meta.city;
      // }
      if(window.localStorage.getItem('movie-city')){
        this.city = window.localStorage.getItem('movie-city');
      }
    },
    getMovieList(){
      // 通过api  获取了电影明细
      // this.movieList = movieApi.getMovieList()
      movieApi.getMovieList()
        .then(res=>{
          this.movieList = res;
        })
    },
    getMovieListByNet(){
      // axios封装 返回的结果是promise对象
      movieApi.getMovieListByNet()
        .then(res=>{
          // console.log(res);
          this.movieList = res.data;
        })
    }
  },
  computed:{
    currentCiyt(){
      // if(window.localStorage.getItem('movie-city')){
      //   return window.localStorage.getItem('movie-city');
      // }
      return this.$store.state.city.currentCity.name || '';
      // return '';
    }
  },
  directives: {
    focus(el) {
      el.focus();
    }
  }
};
</script>
<style scoped lang="scss">
@import "@/assets/style/common/common.scss";

.home-main {
  height: 100%;
  .nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background-color: $baseBgColor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 $basePadding;
    box-sizing: border-box;
    z-index: 2;
    .city-selector {
      width: 50px;
      height: $baseNavHeight;
      color: #dfdfdf;
      position: relative;
      line-height: $baseNavHeight;
      text-align: left;
      overflow: hidden;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .city-selector-text {
        overflow: hidden;
        width: 24px;
        height: 100%;
      }
      .city-selector-bot {
        width: 20px;
        height: 6px;
        background: url(../../assets/imgs/home/arr-bot.png) center no-repeat;
        background-size: contain;
        margin-top: -3px;
      }
    }

    .search-img {
      position: absolute;
      width: 17px;
      height: 17px;
      top: 16px;
      left: 82px;
    }
    .search-input {
      flex: 1;
      width: 250px;
      height: 34px;
      border-radius: 26px;
      background: none;
      border: none;
      outline: none;
      text-indent: 50px;
      color: #dfdfdf;
      // margin-left: 5px;
    }
    .date-text {
      display: block;
      width: 20px;
      height: $baseNavHeight;
      line-height: $baseNavHeight;
      background: url(../../assets/imgs/home/home-sign.png) no-repeat right;
      background-size: 18px 19px;
      margin-left: 7px;
    }
  }
  .banner {
    width: 100%;
    height: 156px;
    margin-top: 52px;
    .banner-swiper {
      width: 100%;
      height: 145px;
      padding: 0 20px;
      box-sizing: border-box;
      transition: all 0.6s ease;
      .banner-go {
        display: block;
        .img {
          width: 335px;
          height: 145px;
        }
      }
      // 不包含 激活样式的
      .swiper-slide:not(.swiper-slide-active) {
        transform: scale(0.9);
      }
    }
    // 通过组件 修改组件内部的样式 需要 穿透   >>>
    // 参考: https://vue-loader.vuejs.org/zh/guide/scoped-css.html#%E6%B7%B1%E5%BA%A6%E4%BD%9C%E7%94%A8%E9%80%89%E6%8B%A9%E5%99%A8
    .banner-pagination {
      ::v-deep.swiper-pagination-bullet {
        width: 4px;
        height: 4px;
        border-radius: 2px;
        margin: 0 7px;
        background-color: #fff;
        transition: all ease 0.4s;
        &.swiper-pagination-bullet-active {
          width: 14px;
          height: 3px;
        }
      }
    }
  }
  .received {
    width: 100%;
    height: 172px;
    margin-top: 11px;
    overflow: hidden;
    padding-left: $basePadding;
    .received-swiper {
      width: 100%;
      height: 100%;
      .received-slide {
        width: 90px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .img {
          width: 90px;
          height: 122px;
        }
        .name {
          font-size: 12px;
          color: #dfdfdf;
          margin: 10px 0 6px;
        }
        .ticket {
          width: 50px;
          height: 22px;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
          border-radius: 11px;
          line-height: 22px;
          color: #dfdfdf;
        }
      }
    }
  }
  .upcoming {
    width: 100%;
    height: 220px;
    padding-left: 7px;
    box-sizing: border-box;
    .upcoming-swiper {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      text-align: left;
      .upcoming-slide {
        .upcoming-go {
          display: block;

          .img {
            width: 146px;
            height: 188px;
          }
        }
        .name {
          // width: 96px;
          // height: 20px;
          padding-left: 13px;
          box-sizing: border-box;
          font-size: 14px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          // color: rgba(223, 223, 223, 1);
          // line-height: 20px;
        }
        .date {
          padding-left: 13px;
          box-sizing: border-box;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #777;
          margin-top: 5px;
        }
      }
    }
  }
  .trailer {
    width: 100%;
    height: 206px;
    margin-top: 10px;
    padding-left: $basePadding;
    box-sizing: border-box;
    .trailer-swiper {
      width: 100%;
      height: 100%;
      .trailer-slide {
        width: 100%;
        height: 100%;

        .trailer-video {
          width: 100%;
          // height: 100%;
          position: relative;
          display: block;
          .trailer-img {
            width: 100%;
            height: 100%;
          }
          .trailer-but {
            width: 38px;
            height: 38px;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -19px;
            margin-left: -19px;
            border-radius: 50%;
            background: rgba(51, 54, 61, 1);
            opacity: 0.8806;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            .trailer-but-triangle {
              position: absolute;
              top: 9px;
              left: 13px;
              width: 1px;
              height: 1px;
              border-right: solid rgba($color: #000000, $alpha: 0) 10px;
              border-left: solid rgba($color: #d8d8d8, $alpha: 1) 15px;
              border-top: solid rgba($color: #000000, $alpha: 0) 10px;
              border-bottom: solid rgba($color: #000000, $alpha: 0) 10px;
              border-radius: 2px;
            }
          }
          .trailer-info {
            width: 100%;
            display: flex;
            justify-content: space-between;
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 9px;
            box-sizing: border-box;
            span {
              color: #aaa;
              font-size: 10px;
            }
          }
        }
        .trailer-text {
          text-align: left;
          font-size: 12px;
          // color: rgba(223, 223, 223, 1);
          line-height: 18px;
        }
      }
    }
  }
  .footerz {
    width: 100%;
    height: 150px;
  }
  .searchArea {
    width: 100%;
    height: 50px;
    padding: 0 $basePadding;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    background-color: $baseBgColor;
    .searchBox {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .searchBox-magnifier {
        position: absolute;
        width: 17px;
        height: 17px;
        background: url(../../assets/imgs/home/home-search.png) center no-repeat;
        background-size: 17px 17px;
        left: 17px;
      }
      .searchBox-input {
        flex: 1;
        width: 100%;
        height: 34px;
        border-radius: 26px;
        background: none;
        border: none;
        outline: none;
        text-indent: 50px;
        color: #dfdfdf;
      }
      .searchBox-cancel {
        display: block;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        font-size: 16px;
        color: #777;
      }
    }
  }
  .earchHot-title {
    width: 100%;
    height: 24px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-top: 19px;
    .earchHot-title-icon {
      width: 24px;
      height: 24px;
      background: url(../../assets/imgs/home/home-search-hot.png) center
        no-repeat;
      background-size: 24px 24px;
    }
    .earchHot-title-text {
      font-size: 16px;
      margin-left: 7px;
    }
  }
  .earchHot {
    width: 100%;
    height: 154px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
    a {
      display: block;
      color: #ddd;
      width: 50%;
      
      .earchHot-item {
        display: flex;
        align-items: center;
        font-size: 16px;
        .earchHot-item-all {
          color: #f1a363;
        }
      }
    }
  }
}
</style>


