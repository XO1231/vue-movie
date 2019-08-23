<template>
  <div class="score-main">
    <BaseLayer>
      <template v-slot:header>
        <div class="nav">
          <span class="nav-close" @click="$router.go(-1)"></span>
          <span class="nav-title">电影评分</span>
          <span class="nav-share"></span>
        </div>
      </template>
      <!-- 默认插槽 就是内容区域 -->
      <template v-slot:default>
        <div class="score-content">
          <div class="score-content-h">
            <div class="score-title">《大鱼海棠》</div>
            <div class="score-star">
              <start :num="4.5"></start>
              <span class="num">9.5</span>
              <span class="branch">分</span>
            </div>
            <div class="score-branch">28.5万人评分</div>
            <ul class="histogram" ref="histogram">
              <li class="histogram-column" v-for="item in list" :key="item">
                <span class="column-percentage">{{item}}</span>
                <div class="column"></div>
                <span class="fraction">9-10分</span>
              </li>
            </ul>
            <p class="tips">以上数据，实时更新</p>
          </div>
          <div class="score-content-d">
            <div class="title">观众评分画像</div>
            <div class="man-woman">
              <div class="man">
                <i class="symbol"></i>男性观众
                <span class="golden">9.5分</span>
              </div>
              <span class="vs">VS</span>
              <div class="man">
                <i class="symbol"></i>女性观众
                <span class="golden">9.5分</span>
              </div>
            </div>
            <ul class="audience">
              <li class="audience-column">
                <span class="column-year">95后</span>
                <div class="column-box">
                  <div class="column"></div>
                </div>
                <span class="fraction">9.5分</span>
              </li>
              <li class="audience-column">
                <span class="column-year">90后</span>
                <div class="column-box">
                  <div class="column"></div>
                </div>
                <span class="fraction">9.5分</span>
              </li>
              <li class="audience-column">
                <span class="column-year">80后</span>
                <div class="column-box">
                  <div class="column"></div>
                </div>
                <span class="fraction">9.5分</span>
              </li>
              <li class="audience-column">
                <span class="column-year">70后</span>
                <div class="column-box">
                  <div class="column"></div>
                </div>
                <span class="fraction">9.4分</span>
              </li>
            </ul>
            <p class="renew">以上数据，每30分钟更新一次</p>
          </div>
        </div>
      </template>
    </BaseLayer>
  </div>
</template>
 
<script>
import BaseLayer from "@/components/BaseLayer";
import start from "@/components/start";
export default {
  name: "Score",
  components: {
    BaseLayer,
    start
  },
  data() {
    return {
      list: ["56.4%", "29.4%", "12.3%", "1.1%", "0.8%"]
    };
  },
  mounted() {
    var ul = this.$refs.histogram;
    var li = ul.children;
    console.log(li[0]);
    for (var i = 0; i < li.length; i++) {
      li[i].children[1].style.height = this.list[i];
    }
  },
  computed: {},
  methods: {}
};
</script>
 
<style lang='scss' scoped>
.score-main {
  height: 100%;
 
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 40px;
    padding: 0 20px;
    box-sizing: border-box;
    .nav-close {
      display: block;
      width: 40px;
      height: 40px;
      background: url(../../../assets/imgs/movie/score/return.png) no-repeat
        center;
      background-size: 25%;
    }
    .nav-title {
      font-size: 16px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
    }
    .nav-share {
      display: block;
      width: 40px;
      height: 40px;
      background: url(../../../assets/imgs/movie/score/share.png) no-repeat
        center;
      background-size: 19px;
    }
  }
  .score-content {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
     background: url(../../../assets/imgs/movie/score/bg.png) no-repeat top left;
  background-size: 100%;
 
    .score-content-h {
      position: relative;
      width: 100%;
      height: 404px;
      padding: 87px 32px 100px;
      box-sizing: border-box;
      border-bottom: 6px solid #33363d;
      .score-title {
        width: 100%;
        height: 25px;
        font-size: 18px;
        font-weight: 500;
        line-height: 25px;
      }
      .score-star {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: #fbc34a;
        ::v-deep .start {
          line-height: 25px;
          .iconfont {
            font-size: 8px;
          }
        }
 
        .num {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          font-size: 22px;
          margin-left: 2px;
        }
        .branch {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          line-height: 25px;
        }
      }
      .score-branch {
        width: 100%;
        height: 17px;
        line-height: 17px;
        opacity: 0.8;
      }
      .histogram {
        position: absolute;
        bottom: 44px;
        left: 0px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        height: 55%;
        padding: 0 63px;
        box-sizing: border-box;
        .histogram-column {
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-end;
          align-items: center;
          width: 40px;
          height: 100%;
          .column-percentage {
            color: #fbc34a;
            font-size: 12px;
            line-height: 17px;
            margin-bottom: 5px;
          }
          .column {
            width: 22px;
 
            background: linear-gradient(
              180deg,
              rgba(241, 162, 99, 1) 0%,
              rgba(242, 94, 132, 1) 100%
            );
            border-radius: 5px;
          }
          .fraction {
            margin-top: 10px;
            font-size: 12px;
            color: rgba(255, 255, 255, 1);
            line-height: 17px;
            opacity: 0.8;
          }
        }
      }
      .tips {
        position: absolute;
        bottom: 15px;
        left: 0;
        display: block;
        width: 100%;
        text-align: center;
        opacity: 0.8;
      }
    }
    .score-content-d {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 32px;
      box-sizing: border-box;
      .title {
        width: 96px;
        height: 22px;
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
        margin: 20px 0 20px;
      }
      .man-woman {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 36px;
        .man {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 138px;
          height: 36px;
          background: rgba(51, 54, 61, 1);
          border-radius: 6px;
          .symbol {
            display: block;
            width: 20px;
            height: 20px;
          }
          &:nth-child(1) .symbol {
            background: url(../../../assets/imgs/movie/score/man.png) no-repeat
              center;
            background-size: 20px;
          }
          &:nth-child(3) .symbol {
            background: url(../../../assets/imgs/movie/score/woman.png)
              no-repeat center;
            background-size: 13px;
          }
        }
        .vs {
          font-size: 16px;
          font-weight: 500;
          line-height: 22px;
        }
      }
      .audience {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 189px;
        margin-top: 17px;
        .audience-column {
          display: flex;
          flex-flow: row nowrap;
          justify-content: flex-start;
          align-items: center;
          width: 231px;
          height: 100%;
          .column-year {
            font-size: 14px;
            line-height: 20px;
            margin-right: 10px;
          }
 
          .column-box {
            width: 155px;
            height: 12px;
            .column {
              width: 95%;
              height: 12px;
              background: linear-gradient(
                180deg,
                rgba(241, 162, 99, 1) 0%,
                rgba(242, 94, 132, 1) 100%
              );
              border-radius: 5px;
            }
          }
          &:nth-child(2) .column-box .column {
            width: 95%;
          }
          &:nth-child(3) .column-box .column {
            width: 95%;
          }
          &:nth-child(4) .column-box .column {
            width: 90%;
          }
          .fraction {
            font-size: 14px;
            color: rgba(251, 195, 74, 1);
            line-height: 20px;
          }
        }
      }
      .renew {
        font-size: 12px;
        font-weight: 400;
        line-height: 17px;
        opacity: 0.8;
      }
    }
  }
}
</style>