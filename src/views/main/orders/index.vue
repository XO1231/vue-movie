<template>
  <div class="order">
    <div class="order-top">
      <div class="options">
        <!-- <span @click="$router.go(-2)"></span> -->
        <router-link :to="{name:'main'}" tag="span"></router-link>
        <span>我的订单</span>
        <span @click="edit=!edit">{{ edit==true?'编辑':'保存' }}</span>
      </div>
      <div class="order-nav">
        <a href="javaScript:;" @click="all" :class="{active:status=='all'}">全部</a>
        <a href="javaScript:;" @click="waitpay" :class="{active:status==0}">待付款</a>
        <a href="javaScript:;" @click="waitapprise" :class="{active:status==2}">待评价</a>
        <a href="javaScript:;" @click="drawback" :class="{active:status==3}">退款</a>
      </div>
    </div>
    <div class="all-content">
      <BaseLayer>
        <template v-solt:default>
          <div
            class="movie-order"
            v-for="order in orders"
            :key="order.id"
            @click="checkTicket(order.id)"
          >
            <div class="order-head">
              <p class="cinema">{{ order.cinema }}</p>
              <p class="status">{{ order.status | change }}</p>
            </div>
            <div class="order-main">
              <img :src="order.src" alt />
              <div class="movie-desc">
                <div class="movie-title">
                  <span>{{ order.movieTitle }}</span>
                  <span>{{ order.left }}张</span>
                </div>
                <div class="movie-time">
                  <span>{{ order.date }}</span>
                  <span>{{ order.time }}</span>
                </div>
                <div class="place">
                  <span>{{ order.place }}</span>
                  <span>{{ order.seatA }}</span>
                  <span>{{ order.seatB }}</span>
                </div>
              </div>
            </div>
            <div class="order-footer">
              <span>总价: {{ order.price }}元</span>
              <span v-if="!edit" @click.stop="remove(order.id)">删除</span>
            </div>
          </div>
          <div class="empty"></div>
        </template>
      </BaseLayer>
    </div>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer.vue";
export default {
  data() {
    return {
      orders: [],
      status: "",
      edit: true
    };
  },
  components: {
    BaseLayer
  },
  filters: {
    change(val) {
      if (val == 0) {
        return "待付款";
      } else if (val == 1) {
        return "已完成";
      } else if (val == 2) {
        return "待评价";
      } else {
        return "等待退款";
      }
    }
  },
  created() {
    console.log(this.$store.state)
    this.all();
  },
  methods: {
    all() {
      this.orders = this.$store.state.orders;
      this.status = "all";
    },
    waitpay() {
      this.orders = this.$store.state.orders.filter(order => order.status == 0);
      this.status = "0";
    },
    waitapprise() {
      this.orders = this.$store.state.orders.filter(order => order.status == 2);
      this.status = "2";
    },
    drawback() {
      this.orders = this.$store.state.orders.filter(order => order.status == 3);
      this.status = "3";
    },
    checkTicket(id) {
      this.$router.push({ name: "ticketDetail", params: { id } });
    },
    remove(id) {
      var index = this.$store.state.orders.findIndex(order => order.id == id);
      this.$store.state.orders.splice(index, 1);
      if (this.status == 0) {
        this.waitpay();
      } else if (this.status == 2) {
        this.waitapprise();
      } else if (this.status == 3) {
        this.drawback();
      }
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.order {
  width: 100%;
  height: 100%;
  .order-top {
    width: 100%;
    padding: $basePadding $basePadding 0;
    background-color: $baseBgColor;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    .options {
      width: 100%;
      height: $baseNavHeight;
      display: flex;
      justify-content: space-between;
      span {
        display: block;
        &:nth-child(1) {
          background: url(../../../assets/imgs/orders/back.png) no-repeat center;
          background-size: cover;
          width: 14px;
          height: 26px;
        }
        &:nth-child(2) {
          font-size: 16px;
          font-family: PingFangSC-Medium;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          line-height: 22px;
        }
        &:nth-child(3) {
          border-radius: 2px;
          border: 1px solid rgba(249, 195, 74, 1);
          font-size: 12px;
          height: 20px;
          line-height: 20px;
          padding: 0 2px;
          color: rgba(249, 195, 74, 1);
        }
      }
    }
    .order-nav {
      width: 100%;
      height: $baseNavHeight;
      display: flex;
      justify-content: space-between;
      padding: 10px 0 0;
      a {
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        height: 20px;
      }
      .active {
        color: rgba(249, 195, 74, 1);
        border-bottom: 2px solid rgba(249, 195, 74, 1);
      }
    }
  }
  .all-content {
    width: 100%;
    height: 100%;
    margin-top: 120px;
    .movie-order {
      width: 335px;
      height: 161px;
      margin: 20px auto;
      background: rgba(51, 54, 61, 1);
      border-radius: 6px;
      border-top: 0.1px solid transparent;
      .order-head {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        .cinema {
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-left: 14px;
          position: relative;
          &::after {
            position: absolute;
            left: 90px;
            content: "";
            width: 7px;
            height: 13px;
            background: url(../../../assets/imgs/orders/all/right.png) no-repeat
              center;
            background-size: cover;
          }
        }
        .status {
          font-size: 14px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          margin-right: 14px;
        }
      }
      .order-main {
        display: flex;
        margin-left: 14px;
        margin-top: 15px;
        img {
          width: 70px;
          height: 80px;
        }
        .movie-desc {
          margin-left: 14px;
          text-align: left;
          padding-top: 10px;
          .movie-title span {
            font-size: 14px;
            font-family: PingFangSC-Medium;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            &:nth-child(2) {
              margin-left: 80px;
            }
          }
          .movie-time,
          .place {
            margin-top: 10px;
            font-size: 12px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            opacity: 0.4;
            span:nth-child(n + 2) {
              margin-left: 5px;
            }
          }
        }
      }
      .order-footer {
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        span:nth-child(1) {
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          opacity: 0.4;
          text-align: left;
          text-indent: 14px;
        }
        span:nth-child(2) {
          margin-right: 14px;
          color: #f9c34a;
          border: 1px solid #f9c34a;
          border-radius: 18px;
          padding: 4px 5px;
          background: white;
        }
      }
    }
    .empty {
      width: 335px;
      height: 120px;
      margin: 20px auto;
    }
  }
}
</style>
