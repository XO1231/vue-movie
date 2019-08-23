<template>
  <div class="boxOffice-main">
    <div class="nav">
      <span class="nav-close" @click="$router.go(-1)"></span>
      <span class="nav-title">傲慢与偏见</span>
    </div>
 
    <div class="boxOffice-content">
      <ul class="boxOffice-ranking">
        <li class="ranking">
          <p class="ranking-num">2</p>
          <p class="ranking-text">今日票房排行</p>
        </li>
        <li class="ranking">
          <p class="ranking-num">暂无</p>
          <p class="ranking-text">首周票房（万）</p>
        </li>
        <li class="ranking">
          <p class="ranking-num">2660</p>
          <p class="ranking-text">今日票房排行</p>
        </li>
      </ul>
      <div class="boxOffice-total">
        <div class="total-title">总票房</div>
        <ul class="total-ranking">
          <li class="ranking">
            <p class="ranking-num">地区</p>
            <p class="ranking-text">中国</p>
          </li>
          <li class="ranking">
            <p class="ranking-num">每周末票房</p>
            <p class="ranking-text">暂无数据</p>
          </li>
          <li class="ranking">
            <p class="ranking-num">总票房</p>
            <p class="ranking-text">501万元</p>
          </li>
        </ul>
      </div>
      <div class="boxOffice-detailed">
        <div class="detailed-title">
          <span class="title">日票房明细</span>
          <span class="title-company">单位：万元</span>
        </div>
        <ul class="detailed">
          <li class="detailed-item">
            <span class="item-td l">日期</span>
            <span class="item-td">当日票房</span>
            <span class="item-td">票房占比</span>
            <span class="item-td">拍片占比</span>
            <span class="item-td">场均人次</span>
          </li>
          <li class="detailed-item">
            <span class="item-td l">
              <span class="red">2018-05-17</span>
              <span class="golden">周五上映首日</span>
            </span>
            <span class="item-td">538.6</span>
            <span class="item-td">8.3%</span>
            <span class="item-td">21.3%</span>
            <span class="item-td">3</span>
          </li>
          <li class="detailed-item">
            <span class="item-td l">
              <span>2018-05-18</span>
              <span>周六零点场</span>
            </span>
            <span class="item-td">--</span>
            <span class="item-td">--</span>
            <span class="item-td">0.0%</span>
            <span class="item-td">0</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "BoxOffice",
 
  data() {
    return {};
  },
 
  methods: {}
};
</script>
 
<style lang='scss' scoped>
.boxOffice-main {
  width: 100%;
  height: 100%;
 
  .nav {
    width: 100%;
    height: 40px;
    padding: 0 20px;
    box-sizing: border-box;
    .nav-close {
      position: absolute;
 
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
      line-height: 40px;
    }
  }
  .boxOffice-content {
    width: 100%;
    .boxOffice-ranking {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      width: 100%;
      height: 68px;
      padding: 0 20px;
      box-sizing: border-box;
      border-bottom: 6px solid #33363d;
      .ranking {
        .ranking-num {
          font-size: 18px;
          font-weight: 500;
          color: rgba(251, 195, 74, 1);
        }
        &:nth-child(2) .ranking-num {
          color: #fff;
        }
        .ranking-text {
          font-size: 12px;
          margin: 6px auto 9px;
          opacity: 0.8;
        }
      }
    }
    .boxOffice-total {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      height: 129px;
      padding: 0 20px;
      box-sizing: border-box;
      border-bottom: 6px solid #33363d;
      .total-title {
        font-size: 16px;
        margin-top: 19px;
      }
      .total-ranking {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        .ranking {
          .ranking-num {
            font-size: 12px;
            opacity: 0.8;
          }
          .ranking-text {
            font-size: 12px;
            margin: 20px auto 18px;
          }
        }
      }
    }
    .boxOffice-detailed {
      padding: 0 20px;
      box-sizing: border-box;
      .detailed-title {
        display: flex;
        justify-content: space-between;
        margin: 20px auto 30px;
        .title {
          font-size: 16px;
          line-height: 18px;
        }
        .title-company {
          font-size: 12px;
          line-height: 12px;
          opacity: 0.8;
        }
      }
      .detailed {
        width: 100%;
        .detailed-item {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          opacity: 0.8;
          margin-bottom: 20px;
          .item-td {
            display: block;
            width: 50px;
            height: 12px;
            line-height: 12px;
            text-align: center;
          }
          .item-td.l {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: flex-start;
            width: 84px;
            text-align: left;
            .red {
              color: #c01212;
            }
            .golden {
              color: #fbc34a;
            }
          }
        }
      }
    }
  }
}
</style>