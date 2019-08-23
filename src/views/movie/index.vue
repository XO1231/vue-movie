<template>
  <div class="movie-main">
      <BaseLayer>
          <template v-slot:header>
            <div class="nav">
                <div class="city" @click="$router.push({name:'city'})">
                  {{city}}
                </div>
                <div class="nav-box">
                    <div class="nav-l">
                      <router-link class="hot" to="/movie/hot">正在热映</router-link>
                    </div>
                    <div class="nav-r">
                       <router-link class="soon" to="/movie/soon">即将上映</router-link>
                    </div>
                </div>
            </div>
          </template>
          <template v-slot:default>
            	<transition mode="">
                  <router-view></router-view>
                
            	</transition>
          </template>
      </BaseLayer>
  </div>
</template>

<script>
import BaseLayer from "@/components/BaseLayer.vue";
export default {
  name: 'Movie',
  components:{
    BaseLayer
  },
  data () {
    return {
      city:'地址'
    }
  },
  created() {
     this.currentcity();
  },
  methods: {
    currentcity() {
      // console.log(this.$router.options.routes.find(el => el.name == 'home').meta)
      var ct =this.$router.options.routes.find(el => el.name == 'home').meta.city;
      if (ct) {
        this.city = ct
      }
    }
  },
 
}
</script>

<style lang='scss' scoped>

    

    .movie-main{
        width:100%;
        height:100%;
        // padding:0 20px;
        box-sizing: border-box;
        // 解决滚动条问题
        overflow-x: hidden;
        .nav{
          width: 100%;
          height: 100%;
          background:rgba(51,54,61,1);
          padding:0 20px;
          box-sizing: border-box;
          .city{
            width: 30px;
            height: 100%;
            font-size:14px;
            text-align: center;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(223,223,223,1);
            line-height:40px;
            overflow: hidden;
          }
          .nav-box{
            width: 164px;
            height: 25px;
            position: absolute;
            top: 7px;
            // border:1px solid;
            box-sizing: border-box;
            left: 50%;
            transform: translateX(-50%);
            border-radius:5px 5px 5px 5px;
             border:1px solid rgba(242,105,127,1);
            //  overflow: hidden;
            .nav-l{
              height: 100%;
              width:50%;
              float: left;
              .hot{
                display: block;
                width: 100%;
                height: 100%;
                font-size:14px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                line-height:25px;
                text-align: center;
                text-decoration: none;
                color:rgba(150,147,147,1);
                &.router-link-active{
                      background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
                      box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
                      color:rgba(245,245,245,1);
                }
              }
            }
            .nav-r{
              height: 100%;
              width:50%;
              float: left;
              border-left: none;
              box-sizing: border-box;
              .soon{
                display: block;
                width: 100%;
                height: 100%;
                font-size:14px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(150,147,147,1);
                line-height:25px;
                text-decoration: none;
                  &.router-link-active{
                      background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
                      box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
                      color:rgba(245,245,245,1);
                }
              }
            }
          }
        }
    }
  // .v-enter{
	//   opacity:0;
	//   transform: translateX(100%);	//右侧进来
  //   // position: absolute;
  // }
  .v-leave-to,.v-enter{
	   opacity:0;
	  transform: translateX(-100%); //左侧消失
	  // position: absolute; //解决离开时候往上飘的问题
  }
  .v-enter-active,
  .v-leave-active{
	  transition: all .5s ease; 
  }
</style>
