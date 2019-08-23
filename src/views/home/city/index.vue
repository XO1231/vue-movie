<template>
  <div class="city-main" ref="citymain">
    <!-- 百度地图容器 -->
    <div id="allmap"></div>
    <!-- 滑动组件 -->
    <BaseLayer ref="baselayer">
      <!-- 头部插槽 -->
      <template v-slot:header>
        <!-- 头部标题 -->
        <div class="nav">
          <span class="close" @click="$router.go(-1)">关闭</span>
          <p class="title">选择城市</p>
        </div>
        <!-- 头部搜索 -->
        <div class="search">
          <div class="search-enlarge"></div>
          <input
            type="text"
            class="search-inp"
            placeholder="请输入城市"
            style="background-color: #33363d"
            v-model="searchvalue"
            @input="search()"
          />
          <div class="search-cancel" @click="cancel">取消</div>
        </div>
      </template>

      <!-- 滑动区插槽 -->
      <template v-slot:default>
        <!-- 滑动部分 -->
        <div class="container">
          <!-- 定位 -->
          <div class="location" v-show="isShow">
            <span class="city-title-block">定位城市</span>
            <div @click="currentcity(locationCity)">
              <cityblock class="location-cityblock" :currentcitys="locationCity"></cityblock>
            </div>
          </div>

          <!-- 历史访问城市 -->
          <div class="history" v-if="historys.length > 0" v-show="isShow">
            <span class="city-title-block">历史访问城市</span>

            <div class="history-citys">
              <div v-for=" item in historys" :key="item.index" @click="currentcity(item)">
                <cityblock class="history-cityblock" :currentcitys="item"></cityblock>
              </div>
            </div>
          </div>

          <!-- 热门城市 -->
          <div class="hotsity" v-show="isShow">
            <span class="city-title-block">热门城市</span>
            <div class="hotsity-citys">
              <div v-for="item in hotsity" :key="item.id" @click="currentcity(item.name)">
                <cityblock class="hotsity-cityblock" :currentcitys="item.name"></cityblock>
              </div>
            </div>
          </div>
          <!-- 生成基于首字母的块 -->
          <div v-for="(citys,key) in cityDatas" :key="key" class="citys-block">
            <p class="title" :class="'title-'+key" v-show="isShow">{{key}}</p>
            <ul class="city-list">
              <li v-for="item in citys" :key="item.id" @click="currentcity(item.name)">{{item.name}}</li>
            </ul>
          </div>
        </div>
      </template>
    </BaseLayer>
    <!-- 侧边导航 -->
    <div class="go-top" v-gotop v-show="isShow">
      <span>定位</span>
      <span>历史</span>
      <span>热门</span>
    </div>
    <ul class="city-nav" v-touch v-show="isShow">
      <li class="cha-item" v-for="cha in cityChars" :key="cha">{{cha}}</li>
    </ul>
    <!-- 滑动显示模块 -->
    <div class="fixed-char" v-show="currentChar">{{currentChar}}</div>
  </div>
</template>

<script>
import cityblock from "./cityblock";
//城市列表数据
import cityData from "@/assets/cityData.json";
import BaseLayer from "@/components/BaseLayer";
import cityblockVue from "./cityblock.vue";
export default {
  name: "City",
  // 组件
  components: {
    BaseLayer,
    cityblock
  },
  // 数据
  data() {
    return {
      cityChars: [], //城市首字母数组
      currentChar: "", //选中的字符
      cityData, // 引入城市文件
      locationCity: "定位中...", //定位城市
      historys: ["郑州", "商丘"], //历史访问城市
      hotsity: [], //热门城市
      currentcitys: "",
      searchvalue: "", //搜索框的内容
      isShow: true,
      cityDatas: {},
      cityDataArr:[],
    };
  },

  created() {
    this.initCityChars();
    this.cityDatas = this.cityData;
  },
  computed: {},
  mounted() {
    // 定位获取当前位置
    var that = this;
    var map = new BMap.Map("allmap");
    var point = new BMap.Point();
    map.centerAndZoom(point, 12);

    var geolocation = new BMap.Geolocation();
    var geoc = new BMap.Geocoder();
    geolocation.getCurrentPosition(
      function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point);
          // map.addOverlay(mk);
          // map.panTo(r.point);
          // 获取坐标
          // alert("您的位置：" + r.point.lng + "," + r.point.lat);

          // var pt = e.point;
          geoc.getLocation(r.point, function(rs) {
            var addComp = rs.addressComponents;
            // console.log(that)
            that.locationCity = addComp.city;
            // console.log(addComp.city , addComp.district , addComp.streetNumber)
            // alert(
            //   addComp.province +
            //     ", " +
            //     addComp.city +
            //     ", " +
            //     addComp.district +
            //     ", " +
            //     addComp.street +
            //     ", " +
            //     addComp.streetNumber
            // );
          });
        } else {
          // alert("failed" + this.getStatus());
        }
      },
      { enableHighAccuracy: true }
    );

    // 获取所有城市节点
  },
  // 方法
  methods: {
    //初始化字母
    initCityChars() {
      this.hotsity = cityData.hot;
      for (var i = 65; i <= 90; i++) {
        //把ascii ==>  字母
        var cha = String.fromCharCode(i);
        this.cityChars.push(cha);
      }
    },
    // 选中地址 并赋给home的meta
    currentcity(item) {
      console.log('===>',item);
      var cityObj = {
        id: new Date().getTime(),
        name: item
      }
      // vuex
      this.$store.commit('city/setCurrentCity',cityObj)

      // localStorage
      // session

      // window.localStorage.setItem('movie-city',item);
      // this.$router.options.routes.find(
      //   el => el.name == "home"
      // ).meta.city = item;
      // console.log(item)
      this.$router.push({name: "home",});
    },
    cancel() {
      this.searchvalue = "";
      this.isShow = true;
    }
  },
  // 自定义指令
  directives: {
    // 让导航带动 页面 和 显示 提示字符
    touch(el, binding, vnode) {
      // 通过vnode获取  当前页的vue 的实例对象
      var vm = vnode.context;
      function updateVm(endY, baseTop, baseHeight, vm) {
        //需要计算当前位置的比例
        var bl = (endY - baseTop) / baseHeight;
        //元素下标
        var index = Math.floor(bl * vm.cityChars.length);
        //修正
        if (index > 25) {
          index = 25;
        }
        if (index < 0) {
          index = 0;
        }
        //设置 vm的 当前字符
        vm.currentChar = vm.cityChars[index];
        // 根据dom的选择器 滚动到特定位置:
        var dom = document.querySelector(
          ".citys-block .title.title-" + vm.currentChar
        );
        if (dom) {
          vm.$refs.baselayer.$BScroll.scrollToElement(
            dom,
            400,
            0,
            -100,
            "easing"
          );
        }
      }
      el.ontouchstart = function(e) {
        e.preventDefault();
        var tou = e.touches[0];
        // 元素距离顶部距离
        var baseTop = this.offsetTop;
        // 元素高度
        var baseHeight = this.offsetHeight;
        //   console.log('baseHeight',baseHeight);
        //初始位置
        var startY = tou.clientY;
        // 默认初始位置不变
        var endY = startY;

        updateVm(endY, baseTop, baseHeight, vm);

        el.ontouchmove = function(e) {
          var tou = e.touches[0];
          //更新endY
          endY = tou.clientY;
          updateVm(endY, baseTop, baseHeight, vm);
        };
        el.ontouchend = function() {
          el.ontouchmove = null;
          vm.currentChar = "";
        };
      };
    },
    // 让页面回到最上
    gotop(el, binding, vnode) {
      var vm = vnode.context;
      // console.log(vm.$refs);
      var timer = null;
      el.onclick = function() {
        // 根据dom的选择器 滚动到特定位置:
        var dom = document.querySelector(".location");
        if (dom) {
          vm.$refs.baselayer.$BScroll.scrollToElement(
            dom,
            400,
            0,
            -100,
            "easing"
          );
        }
      };
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.city-main {
  height: 100%;
  color: #fff;
  // 头部标题区
  .nav {
    position: relative;
    width: 100%;
    height: $baseNavHeight;
    background-color: $baseBgColor;
    .close {
      position: absolute;
      left: $basePadding;
      top: 0;
      width: 40px;
      height: 40px;
      font-size: 12px;
      text-align: center;
      line-height: 40px;
    }
    .title {
      font-size: 14px;
      text-align: center;
      line-height: 40px;
    }
  }
  // 头部搜索区
  .search {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 $basePadding;
    box-sizing: border-box;
    background-color: $baseBgColor;
    position: relative;
    .search-enlarge {
      position: absolute;
      top: 17px;
      left: 36px;
      width: 18px;
      height: 18px;
      background: url(../../../assets/imgs/home/home-search.png) center
        no-repeat;
      background-size: 17px 17px;
    }
    .search-inp {
      // flex: 1;
      width: 290px;
      height: 34px;
      border-radius: 26px;
      background-color: #33363d;
      background: none;
      border: none;
      outline: none;
      text-indent: 50px;
      color: #dfdfdf;
    }
    .search-cancel {
      width: 36px;
      height: 36px;
      font-size: 16px;
      line-height: 36px;
    }
  }
  // 滑动 导航时 显示字母区
  .fixed-char {
    position: fixed;
    width: 100px;
    height: 100px;
    left: 50%;
    top: 50%;
    margin-left: -50px;
    margin-top: -50px;
    background-color: rgba(0, 0, 0, 0.3);
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    font-size: 20px;
    text-align: center;
    line-height: 100px;
    color: #fff;
  }
  // 侧边导航区
  .city-nav {
    position: fixed;
    right: $basePadding;
    top: 160px;
    color: #ddd;
    .cha-item {
      padding: 2px 4px;
    }
  }
  // 回到顶部
  .go-top {
    width: 24px;
    height: 54px;
    position: fixed;
    right: $basePadding;
    top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 12px;
    color: #f1a363;
  }
  // 主体城市区
  .container {
    margin-top: 80px;
    width: 100%;
    padding: $basePadding;
    box-sizing: border-box;
    text-align: left;
    .location {
      width: 100%;

      .location-cityblock {
        // margin-top: 20px;
        &.active {
          box-sizing: border-box;
          border: 2px #f9c34a solid;
        }
      }
    }
    .history {
      width: 100%;
      margin-top: 23px;

      .history-citys {
        display: flex;
        flex-wrap: wrap;
      }
    }
    .hotsity {
      width: 100%;
      margin-top: 23px;
      .hotsity-citys {
        display: flex;
        flex-wrap: wrap;
      }
    }
    .city-title-block {
      font-size: 12px;
      color: #ddd;
    }
    .citys-block {
      width: 100%;
      font-size: 14px;
      color: #f7f7f7;
      line-height: 40px;
      text-align: left;
    }
  }
}
</style>
