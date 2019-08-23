<template>
  <div class="performer-main">
    <BaseLayer>
      <template v-slot:header>
        <div class="nav">
          <span class="nav-close" @click="$router.go(-1)"></span>
        </div>
      </template>
      <!-- 默认插槽 就是内容区域 -->
      <template v-slot:default>
        <div class="performer-content">
          <div class="portrait"></div>
          <div class="performer-name">凯拉·奈特莉</div>
          <p class="performer-names">Satomi lshihara</p>
          <p class="performer-follow" @click="follow" v-if="whether">{{foll}}</p>
          <p class="performer-follow choice" @click="follow" v-else>{{foll}}</p>
          <p class="concerned-num">{{num}}人关注</p>
          <div class="synopsis">
            <div class="synopsis-title">简介</div>
            <div class="synopsis-content">
              2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，
              获得最佳新人“完美少女”奖 。2003年2月15日，参演的爱 情电影《小岛之恋》
              上映；4月5日，参演的喜剧电影《我的爷爷 》上映，在片中饰演五代家的独生女五代珠子
              ，她则凭借该片获 得了第27届日本…
              <a
                href="#"
                class="more"
              >查看更多 ></a>
            </div>
          </div>
          <div class="works">
            <div class="works-title">个人作品</div>
            <ul class="works-content">
              <li class="works-item">
                <img
                  class="item-img"
                  src="../../../assets/imgs/movie/performer/movie1.png"
                  alt="忍者之国"
                />
                <div class="item-information">
                  <div class="information-title">忍者之国</div>
                  <div class="information-score">
                    评分
                    <span class="information-span score-num">9.0</span>
                  </div>
                  <div class="information-performer">
                    演员
                    <span class="information-span">大野智</span>
                  </div>
                  <div class="information-time">
                    上映时间
                    <span class="information-span">2017年7月1日</span>
                  </div>
                </div>
              </li>
              <li class="works-item">
                <img
                  class="item-img"
                  src="../../../assets/imgs/movie/performer/movie2.png"
                  alt="忍者之国"
                />
                <div class="item-information">
                  <div class="information-title">新·哥斯拉</div>
                  <div class="information-score">
                    评分
                    <span class="information-span score-num">9.0</span>
                  </div>
                  <div class="information-performer">
                    演员
                    <span class="information-span">长谷川博己，竹…</span>
                  </div>
                  <div class="information-time">
                    上映时间
                    <span class="information-span">2016年7月29日</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="album">
            <div class="album-title">相册</div>
            <div class="photo">
              <div class="photo-l">
                <div class="photo-l-h"></div>
                <div class="photo-l-d">
                  <div class="photo-l-d-l"></div>
                  <div class="photo-l-d-r"></div>
                </div>
              </div>
              <div class="photo-r"></div>
            </div>
          </div>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>
 
<script>
import BaseLayer from "@/components/BaseLayer";
export default {
  name: "Performer",
  components: {
    BaseLayer
  },
  data() {
    return {
      num: 138585,
      foll: "关注",
      whether: true
    };
  },
  computed: {
    quantity() {}
  },
  methods: {
    follow: function() {
      if (this.whether) {
        this.num += 1;
        this.foll = "已关注";
      } else {
        this.num -= 1;
        this.foll = "关注";
      }
      this.whether = !this.whether;
    }
  }
};
</script>
 
<style lang='scss' scoped>
.performer-main {
  height: 100%;
 
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 45px 20px 0;
    box-sizing: border-box;
    .nav-close {
      display: block;
      width: 40px;
      height: 40px;
      background: url(../../../assets/imgs/movie/score/return.png) no-repeat
        center;
      background-size: 25%;
    }
  }
  .performer-content {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 91px 20px 0;
    box-sizing: border-box;
 background: url(../../../assets/imgs/movie/performer/performer-bg.png)
    no-repeat top center;
  background-size: 100%;
    .portrait {
      width: 85px;
      height: 85px;
      background: url(../../../assets/imgs/movie/performer/portrait.png)
        no-repeat center;
      background-size: 100%;
      margin: 0 auto;
    }
    .performer-name {
      font-size: 20px;
      font-weight: 500;
      line-height: 20px;
      margin: 12px auto 7px;
    }
    .performer-names {
      font-size: 12px;
      line-height: 12px;
    }
    .performer-follow {
      display: block;
      width: 48px;
      height: 24px;
      line-height: 24px;
      background: linear-gradient(
        150deg,
        rgba(242, 91, 134, 1) 0%,
        rgba(241, 172, 94, 1) 100%
      );
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.5);
      border-radius: 11px;
      margin: 10px auto 11px;
    }
    .performer-follow.choice {
      background: rgba(51, 54, 61, 1);
    }
    .concerned-num {
      font-size: 12px;
      font-weight: 400;
      line-height: 12px;
    }
    .synopsis {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      margin: 27px auto 33px;
      .synopsis-title {
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 16px;
        margin: 0 auto 10px 0;
      }
      .synopsis-content {
        width: 341px;
        height: 90px;
        font-size: 12px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 18px;
        text-align: left;
        opacity: 0.8;
        .more {
          width: 56px;
          height: 14px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(251, 195, 74, 1);
          line-height: 14px;
        }
      }
    }
    .works {
      width: 100%;
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      margin-bottom: 20px;
      .works-title {
        font-size: 16px;
        line-height: 16px;
        margin: 0 auto 11px 0;
      }
      .works-item {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        height: 140px;
        margin-bottom: 10px;
        .item-img {
          width: 100px;
          height: 140px;
        }
        .item-information {
          display: flex;
          flex-flow: column nowrap;
          align-items: flex-start;
          justify-content: space-around;
          margin-left: 16px;
          font-size: 14px;
          line-height: 14px;
          .information-title {
            font-size: 18px;
            line-height: 18px;
          }
          .information-score {
            line-height: 19px;
            opacity: 0.8;
            .score-num {
              color: rgba(251, 195, 74, 1);
            }
          }
          .information-performer {
            opacity: 0.8;
          }
          .information-time {
            opacity: 0.8;
          }
          .information-span {
            margin-left: 7px;
          }
        }
      }
    }
    .album {
      width: 100%;
      // padding-bottom: 100px;
      .album-title {
        text-align: left;
        font-size: 16px;
        line-height: 16px;
        margin-bottom: 10px;
      }
      .photo {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 229px;
        .photo-l {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
          justify-content: space-between;
          width: 192px;
          height: 100%;
          .photo-l-h {
            width: 100%;
            height: 100px;
            background: url(../../../assets/imgs/movie/performer/performer1.png)
              no-repeat center;
            background-size: contain;
          }
          .photo-l-d {
             display: flex;
              justify-content: space-between;
            width: 100%;
            height: 122px;
            .photo-l-d-l {
             
              width: 94px;
              height: 123px;
              background: url(../../../assets/imgs/movie/performer/performer2.png)
                no-repeat center;
              background-size: contain;
            }
            .photo-l-d-r {
              width: 94px;
              height: 122px;
              background: url(../../../assets/imgs/movie/performer/performer3.png)
                no-repeat center;
              background-size: contain;
            }
          }
        }
        .photo-r {
          width: 138px;
          height: 100%;
          background: url(../../../assets/imgs/movie/performer/performer4.png)
            no-repeat center;
          background-size: contain;
        }
      }
    }
  }
}
</style>