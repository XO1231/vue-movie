<template>
  <div id="app">
    <transition :name="transitionName" mode="out-in">
      <!-- https://cn.vuejs.org/v2/api/#keep-alive -->
      <!-- 对全局生效 -->
      <keep-alive include="Home">
        <router-view />
      </keep-alive>
    </transition>
    <Footer v-if="$route.meta.footerShow"></Footer>
  </div>
</template>
<script>
// 引入公共组件
import Footer from "@/components/Footer";
export default {
  name: "App",
  // 注册组件,
  data(){
    return {
      transitionName: 'fade'
    }
  },
  components: {
    Footer
  },
  watch: {
    $route(to, from) {
      const tabPath = [
        "/home",
        "/cinema",
        "/movie",
        "/ticket",
        "/main"
      ];
      if (
        tabPath.some(item => item == to.path) &&
        tabPath.some(item => item == from.path)
      ) {
        this.transitionName = "fade";
      } else {
        // console.log('to.path',to.path)
        const toDepth = to.path.split("/").length;
        const fromDepth = from.path.split("/").length;
        this.transitionName =
          toDepth < fromDepth ? "slide-right" : "slide-left";
      }
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/style/common/common.scss";

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body {
  background-color: $baseBgColor;
  color: #dfdfdf;
  -webkit-tap-highlight-color: rgba($color: #000000, $alpha: 0);
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}
.transitionMain-enter-active,.transitionMain-leave-active {
  transition: all 0.4s ease;
}
.transitionMain-enter,.transitionMain-leave-to{
  transform: translateX(-100%);
  opacity: 0;
}
.transitionMain-enter-to,.transitionMain-leave{
  transform: translateX(100%);
  opacity: 1;
}


.slide-left-enter-active {
  animation: slideLeft 0.4s;
}
.slide-right-enter-active {
  animation: slideRight 0.4s;
}
.fade-enter-active {
  transition: all ease 0.2s;
}
.fade-enter {
  opacity: 0;
}
@keyframes slideLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideRight {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
