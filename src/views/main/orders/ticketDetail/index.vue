<template>
  <div class="my-ticket">
    <div class="my-ticket-head">
      <span @click="$router.go(-1)"></span>
      <span>我的影票</span>
    </div>
    <div class="my-ticket-main">
      <div class="ticket-head">
        <div class="movie-detail">
          <p class="movie-title">{{ currentOrder.movieTitle }}</p>
          <div class="movie-time">
            <span>{{ currentOrder.date }}</span>
            <span>{{ currentOrder.time }}</span>(英语3D)
          </div>
          <p class="cinema">耀莱成龙影城（建业店）</p>
          <div class="place">
            <span>{{ currentOrder.place }}</span>
            <span>{{ currentOrder.seatA }}</span>
            <span>{{ currentOrder.seatB }}</span>
          </div>
        </div>
        <img :src="currentOrder.src" alt />
      </div>
      <div class="qr-code">
        <div class="qr-head">
          <span>取票码</span>
          <span>284856992589858F</span>
          <span>&nbsp;&nbsp;&nbsp;33元</span>
        </div>
        <img src="@/assets/imgs/orders/all/myTicket/qrcode.png" alt />
        <p>{{ currentOrder.left}}张电影票</p>
      </div>
      <div class="ticket-footer">
        <div class="cinema-name">
          <span>耀莱成龙影城（建业店）</span>
          <span>1.3km</span>
        </div>
        <div class="address">
          <span>地址：云龙区万达广场3层</span>
          <span class="tel"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentOrder: {}
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      var temp = this.$store.state.orders.filter(
        order => order.id == this.$route.params.id
      );
      this.currentOrder = temp[0];
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.my-ticket {
  width: 100%;
  height: 100%;
  .my-ticket-head {
    width: 100%;
    padding: $basePadding;
    position: fixed;
    top: 0;
    left: 0;
    position: relative;
    span {
      &:nth-child(1) {
        background: url(../../../../assets/imgs/orders/back.png) no-repeat
          center;
        position: absolute;
        left: $basePadding;
        top: 50%;
        margin-top: -13px;
        background-size: cover;
        width: 14px;
        height: 26px;
      }
      &:nth-child(2) {
        font-size: 20px;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  .my-ticket-main {
    width: 330px;
    height: 520px;
    margin: 50px auto;
    border-top: 0.1px solid transparent;
    background: url(../../../../assets/imgs/orders/all/myTicket/bgc.png)
      no-repeat center;
    background-size: cover;
    .ticket-head {
      width: 268px;
      margin: 30px auto;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px dotted black;
      padding-bottom: 30px;
      .movie-detail {
        text-align: left;
        color: rgba(58, 58, 58, 1);
        .movie-title {
          font-size: 18px;
          font-family: PingFangSC-Semibold;
          font-weight: 600;
        }
        .movie-time {
          opacity: 0.4;
          margin-top: 15px;
          span {
            font-size: 12px;
            font-family: PingFangSC-Regular;
            font-weight: 400;
            &:nth-child(n + 2) {
              margin-left: 15px;
            }
          }
        }
        .cinema,
        .place {
          opacity: 0.4;
          font-size: 12px;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: rgba(58, 58, 58, 1);
          margin-top: 15px;
        }
      }
      img {
        width: 78px;
        height: 114px;
      }
    }
    .qr-code {
      width: 268px;
      margin: 30px auto;
      .qr-head {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(58, 58, 58, 1);
        span:nth-child(2) {
          background: rgba(255, 255, 255, 0.5);
          border-radius: 3px;
          border: 1px solid rgba(151, 151, 151, 0.39);
          padding: 4px 10px;
        }
      }
      img {
        width: 144px;
        height: 144px;
        margin: 15px auto;
      }
      p {
        font-size: 10px;
        font-family: PingFangSC-Regular;
        font-weight: 400;
        color: rgba(58, 58, 58, 1);
        opacity: 0.4;
      }
    }
    .ticket-footer {
      width: 100%;
      font-size: 14px;
      font-family: PingFangSC-Regular;
      font-weight: 400;
      color: rgba(58, 58, 58, 1);
      .cinema-name {
        width: 268px;
        margin: 10px auto;
        display: flex;
        justify-content: space-between;
      }
      .address {
        width: 268px;
        font-size:12px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        span:nth-child(1){
            align-self: flex-end;
        }
        span:nth-child(2){
            width: 18px;
            height: 19px;
            background: url(../../../../assets/imgs/orders/all/myTicket/tel.png) no-repeat center;
            background-size: cover;
        }
      }
    }
  }
}
</style>
