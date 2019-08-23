<template>
  <div class="setting">
    <div class="setting-header">
      <div class="setting-title">
        <i class="iconfont icon-left" @click="$router.push({path:'/main'})"></i>
        <p>设置</p>
        <div class="trans-div"></div>
      </div>
      <div class="user-info">
        <div class="user-pic">
          <img :src="userPic" alt srcset />
        </div>
        <div class="user-name">{{username}}</div>
      </div>
    </div>
    <!--  -->
    <BaseLayer>
      <template>
        <ul class="setting-list">
          <li class="setting-safe">
            <p>账号与安全</p>
            <router-link to>
              手机绑定与换绑
              <i class="iconfont icon-next"></i>
            </router-link>
          </li>
          <li>
            <p>被赞提醒</p>
            <van-switch
              @change="cgoodNotice"
              v-model="goodN"
              active-color="#F26D7D"
              inactive-color="#fff"
            />
          </li>
          <li>
            <p>影评/话题提醒</p>
            <van-switch v-model="evaluateN" active-color="#F26D7D" inactive-color="#fff" />
          </li>
          <li>
            <p>系统通知</p>
            <van-switch v-model="sysN" active-color="#F26D7D" inactive-color="#fff" />
          </li>
          <li class="system">
            <p>系统通知复制</p>
            <van-switch v-model="sysN2" active-color="#F26D7D" inactive-color="#fff" />
          </li>
          <li>
            <p>关于</p>
            <router-link to class="aboutLink">
              <i class="iconfont icon-next"></i>
            </router-link>
          </li>
        </ul>
        <div to class="logout" @click="logout">退出登录</div>
        <div class="height100px"></div>
      </template>
    </BaseLayer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

import BaseLayer from "@/components/MainLayer";
export default {
  name: 'setting',

  data () {
    return {
      goodN: this.goodNotice,
      evaluateN: this.evaluateNotice,
      sysN: this.sysNotice,
      sysN2: this.sys2,
      username: 'yujia1130',
      userPic: require('@/assets/imgs/main/user.png'),
    }
  },
  computed: {
    ...mapState({
      goodNotice: state => state.userinfo.goodNotice,
      evaluateNotice: state => state.userinfo.evaluateNotice,
      sysNotice: state => state.userinfo.sysNotice,
      sys2: state => state.userinfo.sys2
    })
  },
  components: {
    BaseLayer
  },
  created () {
    this.goodN = this.goodNotice;
    this.evaluateN= this.evaluateNotice;
    this.sysN = this.sysNotice;
    this.sysN2 = this.sys2;
  },

  methods: {
    logout () {
    },
    ...mapMutations({
      cgoodNotice: 'userinfo/cgoodNotice',      
      cevaluateNotice: 'userinfo/cevaluateNotice',
      csysNotice: 'userinfo/csysNotice',
      csys2: 'userinfo/csys2',
    }),
  }
}
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
@import "@/assets/style/common/reset.scss";
@import "~@/assets/icon/iconfont.css";
.setting{
  height: 100%;
}
.setting-header {
  width: 100%;
  padding: 30px $basePadding 48px;
  height: 220px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  .setting-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .icon-left {
    font-size: 20px;
  }
  .user-info {
    .user-pic {
      width: 73px;
      height: 73px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.setting-list {
  width: 100%;
  padding: 0 $basePadding;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 1);
  li {
    font-size: 14px;
    height: 47px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .aboutLink {
      width: 20px;
      height: 20px;
    }
    a {
      color: rgba(255, 255, 255, 1);
    }
  }
  .setting-safe,
  .system {
    border-bottom: 6px solid #33363d;
  }
}
.logout {
  width: 335px;
  margin: 0 auto;
  line-height: 40px;
  color: #fff;
  height: 40px;
  box-sizing: border-box;
  border: 0;
  margin-top: 20px;
  font-size: 18px;
  border-radius: 5px;
  background: linear-gradient(
    150deg,
    rgba(242, 91, 134, 1) 0%,
    rgba(241, 172, 94, 1) 100%
  );
}
</style>
