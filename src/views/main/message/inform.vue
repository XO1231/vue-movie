<template>
  <div class="inform-main">
    <div class="header">
      <div class="back" @click="$router.go(-1)"></div>
      <div class="other">
        <span class="avatar">
          <img :src="currentPerson.avatar" alt />
        </span>
        <p class="name">{{ currentPerson.name }}</p>
      </div>
      <div class="setting-wrapper" @click="setOpen = !setOpen">
        <transition name="slide">
          <ul class="setting" v-if="setOpen">
            <li class="setting-item">屏蔽聊天</li>
            <li class="setting-item">删除对话</li>
            <li class="setting-item">删除好友</li>
          </ul>
        </transition>
      </div>
    </div>
    <div class="chat-wrapper">
      <BaseLayer :scrollToEndFlag="true" ref="baseLayer">
        <div class="chat-content" ref="chatContent">
          <div v-for="(item, index) in chatList" :key="index" :class="`${item.type}-word`">
            <span class="time">{{ item.time }}</span>
            <p class="word">{{ item.text }}</p>
          </div>
        </div>
      </BaseLayer>
    </div>
    <div class="input-box">
      <input type="text" placeholder="请输入想说的话" v-model.trim="myWord" />
      <span class="send" @click="sendMsg">发送</span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseLayer from "@/components/BaseLayerMlj.vue";

export default {
  data() {
    return {
      currentPerson: {},
      myWord: "",
      nowTime: new Date().toLocaleString(),
      msgList: [
        {
          id: 1,
          name: "zeng wen",
          avatar: require("@/assets/imgs/main/user-1.png"),
          msg: [
            { text: "在吗?", time: new Date().toLocaleString() },
            { text: "今晚去看电影", time: new Date().toLocaleString() }
          ],
          time: "2小时前"
        },
        {
          id: 2,
          name: "chikelu",
          avatar: require("@/assets/imgs/main/user-2.png"),
          msg: [
            { text: "11111", time: new Date().toLocaleString() },
            { text: "在吗?", time: new Date().toLocaleString() },
            { text: "今晚去看电影", time: new Date().toLocaleString() }
          ],
          time: "2小时前"
        },
        {
          id: 3,
          name: "kimmy",
          avatar: require("@/assets/imgs/main/user-3.png"),
          msg: [
            { text: "2222", time: new Date().toLocaleString() },
            { text: "在吗?", time: new Date().toLocaleString() },
            { text: "今晚去看电影", time: new Date().toLocaleString() },
            { text: "11111", time: new Date().toLocaleString() }
          ],
          time: "2小时前"
        },
        {
          id: 4,
          name: "xu jianhong",
          avatar: require("@/assets/imgs/main/user-4.png"),
          msg: [{ text: "在吗?", time: new Date().toLocaleString() }],
          time: "2小时前"
        },
        {
          id: 5,
          name: "kung",
          avatar: require("@/assets/imgs/main/user-5.png"),
          msg: [
            { text: "在吗?", time: new Date().toLocaleString() },
            { text: "66666", time: new Date().toLocaleString() }
          ],
          time: "2小时前"
        }
      ],
      chatList: [],
      setOpen: false
    };
  },
  created() {
    this.nowPerson();
    this.initChatList();
    console.log(this.currentPerson);
  },

  methods: {
    nowPerson() {
      var person = this.msgList.find(
        item => item.name == this.$route.params.name
      );
      this.currentPerson = person;
    },
    initChatList() {
      // 遍历当前对话的 msg
      this.currentPerson.msg.forEach(item => {
        var otherObj = {
          text: item.text,
          time: item.time,
          type: "other"
        };
        this.chatList.push(otherObj);
      })
      console.log(this.chatList);
    },
    sendMsg() {
      if (this.myWord) {
        var myObj = {
          text: this.myWord,
          time: new Date().toLocaleString(),
          type: "my"
        };
        this.chatList.push(myObj);
        //  图灵机器人接口 一天只能请求 5 次
        //  超出显示 请求次数超限！
        this.getTuling();
        //  计算高度
        this.resizeScrollY();
        this.myWord = "";
      }
    },
    getTuling() {
      var params = {
        reqType: 0,
        perception: {
          inputText: {
            text: this.myWord
          }
        },
        userInfo: {
          apiKey: "46de8603daa04671b5dbe67442b2d19e",
          userId: "0075834"
        }
      };
      //  保留 this 指向
      var that = this;
      //  请求 api
      axios
        .post("/chat/api/v2", params)
        .then(function(response) {
          var obj = {
            text: response.data.results[0].values.text,
            time: new Date().toLocaleString(),
            type: "other"
          };
          console.log(obj);
          setTimeout(() => {
            that.chatList.push(obj);
            // better-scroll 重新计算高度滚动
            that.resizeScrollY();
          }, 1000);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    resizeScrollY() {
      // better-scroll 重新计算高度滚动
      //  当高度超出时重新计算高度, 并滚动到最大位置
      this.$refs.baseLayer.$scroll.refresh();
      var maxY = this.$refs.baseLayer.$scroll.maxScrollY;
      if (maxY != 0) {
        this.$refs.baseLayer.$scroll.scrollBy(0, -88, 400, "easing");
      }
    }
  },
  components: {
    BaseLayer
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/common/common.scss";
/* 动画样式 */
.slide-enter {
  transform: translateX(150%);
}
.slide-leave-to {
  transform: translateX(150%);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}
/* 动画样式 */
.inform-main {
  height: 100%;
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
    z-index: 999;
    .back {
      display: block;
      margin-left: 20px;
      width: 40px;
      height: 100%;
      background: url("~@/assets/imgs/icons/back.png") no-repeat left center;
      background-size: 50%;
    }
    .other {
      display: flex;
      align-items: center;
      .avatar {
        display: block;
        width: 32px;
        height: 32px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .name {
        margin-left: 10px;
        font-size: 14px;
      }
    }
    .setting-wrapper {
      position: absolute;
      right: 20px;
      width: 40px;
      height: 100%;
      background: url("~@/assets/imgs/main/news-setting.png") no-repeat center;
      background-size: cover;
      .setting {
        position: absolute;
        padding: 10px;
        left: -60px;
        top: 40px;
        width: 100px;
        box-sizing: border-box;
        background-color: rgba(0, 0, 0, 0.8);
        overflow: hidden;
        .setting-item {
          width: 100%;
          height: 30px;
          line-height: 30px;
          text-align: center;
          font-size: 12px;
        }
      }
    }
  }
  .chat-wrapper {
    padding: 0 $basePadding;
    padding-top: 66px;
    height: 100%;
    box-sizing: border-box;
    .chat-content {
      padding-bottom: 150px;
      overflow: hidden;
      .other-word {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        height: 78px;
        .word {
          margin-top: 10px;
          padding: 20px;
          width: 70%;
          font-size: 16px;
          text-align: left;
          border-radius: 10px;
          background-color: #33363d;
        }
      }
      .my-word {
        position: relative;
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        height: 78px;
        .word {
          position: absolute;
          top: 20px;
          right: 0;
          padding: 20px;
          width: 70%;
          color: #000;
          font-size: 16px;
          text-align: left;
          border-radius: 10px;
          background-color: #f9c34a;
        }
      }
    }
  }
  .input-box {
    position: fixed;
    padding: 0 20px;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 50px;
    color: #000;
    box-sizing: border-box;
    background-color: $baseBgColor;
    input {
      width: 80%;
      height: 60%;
      border: none;
      outline: none;
      text-indent: 20px;
      border-radius: 5px;
      background: #f9c34a;
    }
    .send {
      width: 50px;
      height: 32px;
      line-height: 32px;
      font-size: 14px;
      text-align: center;
      border-radius: 5px;
      background: #f9c34a;
    }
  }
}
</style>