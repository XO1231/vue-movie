<template>
  <div class="purch">
    <div class="purch-header">
      <i class="iconfont icon-left" @click="$router.go(-1)"></i>

      <routerLink tag="div" class="usermsg" :to="{name:'main'}">

        <div class="user-pic">
          <img :src="userPic" alt srcset />
        </div>

        <div class="username">hi,{{username}}</div>
      </routerLink>

    </div>
    <BaseLayer>
      <template>
        <div class="movie-list">
          <div class="purch-banner">
            <div class="search">
              <input type="text" placeholder="试试搜索影片" v-model="searchContent" />
              <i class="iconfont icon-next"></i>
            </div>
            <div class="cinema">
              <p>{{cinema}}</p>
              <i class="iconfont icon-next"></i>
            </div>
            <div class="watch-select">
              <span class="watch-date">
                <div class="date-month">{{dateMonth}}</div>
                <div class="date-time">{{dateTime}}</div>
              </span>
              <i class="iconfont icon-next"></i>
            </div>
            <div class="bannerSelect">
              <div class="discount">
                <van-checkbox shape="square" v-model="discount" checked-color="#F16D7D"></van-checkbox>
                <label for="discount">特惠票</label>
              </div>
              <div class="recSet">
                <van-checkbox shape="square" v-model="recSet" checked-color="#F16D7D"></van-checkbox>
                <label for="recSet">推荐座位</label>
              </div>
            </div>
            <router-link :to="{name:'seat'}" tag="div" class="purchBtn-c">
              <div class="purchBtn">购票</div>
            </router-link>
            <ul class="search-list">
              <li v-for="(item,index) in searchList" :key="index">{{item}}</li>
              <span @click="clsHistory">清除历史</span>
            </ul>
            <div class="more-cinema">
              <img :src="morePosition" alt />
            </div>
          </div>
          <div class="cheaper">
            <div class="cheaper-title">
              <p style="font-size:16px">特惠票</p>
              <router-link :to="{name:'coupon'}">
                更多优惠
                <i class="iconfont icon-next"></i>
              </router-link>
            </div>
            <ul class="cheaper-content">
              <li v-for="item in cheaperList" :key="item.id">
                <div class="time">
                  <p>{{item.starttime}}</p>
                  <p>{{item.endtime}}</p>
                </div>
                <div class="movie">
                  <p>{{item.movie}}</p>
                  <p>{{item.address}}</p>
                </div>
                <div class="money">{{item.money}}</div>
                <routerLink tag="div" :to="{name:'seat'}" class="paybtn">购票</routerLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="height100px"></div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/MainLayer";
import { mapState, mapMutations } from "vuex";
export default {
  name: "purch",

  data() {
    return {
      userPic: require("@/assets/imgs/main/user.png"),
      morePosition: require("@/assets/imgs/main/position.png"),
      username: "znkk",
      cinema: "万达影城",
      searchContent: "",
      dateMonth: "5月9日",
      dateTime: "1:34pm",
      discount: true,
      recSet: false,
      searchLists: []
    };
  },
  components: {
    BaseLayer
  },
  created() {},
  computed: {
    ...mapState({
      searchList: state => state.userinfo.searchList,
      cheaperList: state => state.userinfo.cheaperList
    })
  },
  methods: {
    ...mapMutations({
      clsHistory: "userinfo/clsHistory"
    })
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
@import "@/assets/style/common/reset.scss";
@import "~@/assets/icon/iconfont.css";

.purch {
  height: 100%;
  .height100px {
    height: 100px;
  }
  .purch-header {
    overflow: hidden;
  }
  .purch-header {
    @include flexcenter;
    padding: 40px $basePadding 0;
    box-sizing: border-box;
    .usermsg {
      display: flex;
      border-radius: 50%;
      align-items: center;
      .user-pic {
        width: 33px;
        height: 33px;
        border-radius: 50%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .username {
        margin-left: 8px;
        font-size: 12px;
      }
    }
  }
  .movie-list {
    width: 100%;
    margin-top: 25px;
    padding: 0 $basePadding;
    box-sizing: border-box;
    .purch-banner {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      height: 300px;
      width: 100%;
      padding: 0 $basePadding;
      box-sizing: border-box;
      border-radius: 5px;
      background-color: #33363d;
      position: relative;
      .search,
      .cinema,
      .watch-select {
        display: flex;
        margin-top: 20px;
        width: 100%;
        height: 25px;
        justify-content: space-between;
        align-items: center;
        .iconfont {
          margin-right: 80px;
        }
      }
      .search {
        font-size: 12px;
        color: rgba(255, 255, 255, 1);
        input {
          height: 22px;
          background-color: transparent;
          border: 0;
        }
      }
      .cinema {
        font-size: 16px;
        .iconfont {
          font-size: 12px;
        }
      }
      .watch-select {
        font-size: 16px;
        .iconfont {
          font-size: 12px;
        }
        .watch-date {
          display: flex;
        }
      }
      .bannerSelect {
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 20px;
        margin-top: 25px;
        .selectedBgc {
          background: pink;
        }
        .discount,
        .recSet {
          display: flex;
          align-items: center;
          .van-checkbox {
            margin-right: 8px;
          }
        }
      }
      .purchBtn-c {
        width: 100%;
        height: 40px;
        margin-top: 30px;
        .purchBtn {
          width: 100%;
          height: 100%;
          border-radius: 5px;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          font-size: 18px;
          line-height: 40px;
        }
      }
      .search-list {
        margin-top: 20px;
        display: flex;
        li {
          margin-right: 5px;
        }
      }
      .more-cinema {
        width: 15px;
        height: 18px;
        position: absolute;
        right: 43px;
        top: 62px;
        animation: more 0.7s infinite ease;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .cheaper {
      margin-top: 29px;
      .cheaper-title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        a {
          color: #fff;
        }
      }
      .cheaper-content {
        overflow: hidden;
        margin-top: 7px;
        width: 100%;
        box-sizing: border-box;
        li {
          margin-top: 15px;
          background-color: #33363d;
          width: 100%;
          height: 70px;
          border-radius: 6px;
          padding: 0 10px;
          box-sizing: border-box;
          @include flexcenter;
          .time {
            p:nth-child(1) {
              font-size: 16px;
            }
            p:nth-child(2) {
              margin-top: 4px;
              color: rgba(255, 255, 255, 0.4);
              font-size: 12px;
            }
          }
          .movie {
            p:nth-child(1) {
              font-size: 16px;
            }
            p:nth-child(2) {
              margin-top: 4px;
              font-size: 12px;
              color: rgba(255, 255, 255, 0.4);
            }
          }
          .money {
            font-size: 20px;
            color: #fbc34a;
          }
          .paybtn {
            width: 45px;
            height: 25px;
            line-height: 25px;
            border-radius: 6px;
            background: linear-gradient(
              150deg,
              rgba(242, 91, 134, 1) 0%,
              rgba(241, 172, 94, 1) 100%
            );
          }
        }
      }
    }
  }
}
@keyframes more {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
