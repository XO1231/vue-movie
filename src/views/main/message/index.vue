<template>
  <div class="message-main">
    <div class="header">
      <div class="back" @click="$router.go(-1)"></div>
      <div class="title">消息中心</div>
    </div>
    <div class="container">
      <BaseLayer>
        <ul class="inform">
          <li class="inform-item system">
            <span class="avatar"></span>
            <div class="detail">
              <p class="name">系统通知</p>
              <p class="detail-msg">123</p>
            </div>
            <div class="time">一个月前</div>
          </li>
          <li class="inform-item zan">
            <span class="avatar"></span>
            <div class="detail">
              <p class="name">赞</p>
              <p class="detail-msg">123</p>
            </div>
            <div class="time">一个月前</div>
          </li>
          <li class="inform-item rating">
            <span class="avatar"></span>
            <div class="detail">
              <p class="name">评论</p>
              <p class="detail-msg">123</p>
            </div>
            <div class="time">一个月前</div>
          </li>
        </ul>
        <div class="msg">
          <p class="title">全部私信</p>
          <ul class="msg-list">
            <router-link
              class="msg-item"
              v-for="item in msgList"
              :key="item.id"
              :to="`/main/message/${item.name}`"
              tag="li"
            >
              <span class="avatar">
                <img :src="item.avatar" alt />
              </span>
              <div class="detail">
                <p class="name">{{ item.name }}</p>
                <p class="detail-msg">{{ item.msg[item.msg.length-1].text }}</p>
              </div>
              <div class="time">{{ item.time }}</div>
              <span class="msg-count">{{ item.msg.length }}</span>
            </router-link>
          </ul>
        </div>
      </BaseLayer>
    </div>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayerMlj.vue";

export default {
  data() {
    return {
      msgList: [
        {
          id: 1,
          name: "zeng wen",
          avatar: require("@/assets/imgs/main/user-1.png"),
          msg: [
            { text: '在吗?', time: new Date().toLocaleString() },
            { text: '今晚去看电影', time: new Date().toLocaleString() }
          ],
          time: "2小时前"
        },
        {
          id: 2,
          name: "chikelu",
          avatar: require("@/assets/imgs/main/user-2.png"),
          msg: [
            { text: '11111', time: new Date().toLocaleString() },
            { text: '在吗?', time: new Date().toLocaleString() },
            { text: '今晚去看电影', time: new Date().toLocaleString() }
          ],
          time: "2小时前"
        },
        {
          id: 3,
          name: "kimmy",
          avatar: require("@/assets/imgs/main/user-3.png"),
          msg: [
            { text: '2222', time: new Date().toLocaleString() },
            { text: '在吗?', time: new Date().toLocaleString() },
            { text: '今晚去看电影', time: new Date().toLocaleString() },
            { text: '11111', time: new Date().toLocaleString() }
          ],
          time: "2小时前"
        },
        {
          id: 4,
          name: "xu jianhong",
          avatar: require("@/assets/imgs/main/user-4.png"),
          msg: [
            { text: '在吗?', time: new Date().toLocaleString() }
          ],
          time: "2小时前"
        },
        {
          id: 5,
          name: "kung",
          avatar: require("@/assets/imgs/main/user-5.png"),
          msg: [
            { text: '在吗?', time: new Date().toLocaleString() },
            { text: '66666', time: new Date().toLocaleString() }
          ],
          time: "2小时前"
        }
      ]
    };
  },
  components: {
    BaseLayer
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/common/common.scss";
.message-main {
  padding: 0 $basePadding;
  height: 100%;
  box-sizing: border-box;
  .header {
    position: fixed;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    margin-top: 13px;
    width: 100%;
    height: $baseNavHeight;
    font-size: 16px;
    .back {
      display: block;
      margin-left: 20px;
      width: 40px;
      height: 100%;
      background: url("~@/assets/imgs/icons/back.png") no-repeat left center;
      background-size: 50%;
    }
    .title {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .container {
    padding-top: 70px;
    height: 100%;
    box-sizing: border-box;
    .inform {
      .inform-item {
        position: relative;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
        height: 44px;
        .avatar {
          margin-right: 15px;
          display: block;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: red;
          background: no-repeat center;
          background-size: 50%;
        }
        &.system {
          .avatar {
            background-image: url("~@/assets/imgs/main/inform.png");
            background-color: #f9c34a;
          }
        }
        &.zan {
          .avatar {
            background-image: url("~@/assets/imgs/main/zan.png");
            background-color: #ef8833;
          }
        }
        &.rating {
          .avatar {
            background-image: url("~@/assets/imgs/main/rating.png");
            background-color: #6548a9;
          }
        }
        .detail {
          text-align: left;
          .name {
            margin-top: 5px;
            font-size: 16px;
          }
          .detail-msg {
            margin-top: 8px;
            font-size: 12px;
          }
        }
        .time {
          position: absolute;
          right: 0;
        }
      }
    }
    .msg {
      width: 100%;
      .title {
        font-size: 16px;
        text-align: left;
      }
      .msg-list {
        margin-top: 30px;
        padding-bottom: 30px;
        width: 100%;
        .msg-item {
          position: relative;
          margin-bottom: 30px;
          display: block;
          position: relative;
          display: flex;
          align-items: center;
          height: 44px;
          color: #fff;
          text-decoration: none;
          .avatar {
            margin-right: 15px;
            display: block;
            width: 44px;
            height: 44px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .detail {
            text-align: left;
            .name {
              margin-top: 5px;
              font-size: 16px;
              color: #f9c34a;
            }
            .detail-msg {
              margin-top: 8px;
              font-size: 12px;
            }
          }
          .time {
            position: absolute;
            right: 0;
          }
          .msg-count {
            position: absolute;
            top: 35px;
            right: 10px;
            width: 20px;
            height: 20px;
            color: #000;
            line-height: 20px;
            text-align: center;
            border-radius: 50%;
            background: #f9c34a;
          }
        }
      }
    }
  }
}
</style>