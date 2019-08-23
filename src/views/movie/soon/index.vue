<template>
    <div class="soon-main">
        <div class="title">热门预告片</div>
        <div class="banner">
            <swiper :options="swiperOption" class="banner-swiper">
            <swiper-slide v-for="item in soonMoviesList" :key="item.id" class="banner-swiper-slide">
                <div class="stop"></div>
                <div class="text">变身时尚达人！！《穿普拉达的女王》</div>
                <div class="play-time">02:12</div>
                <img :src="item.img" alt="">
            </swiper-slide>
            </swiper>
        </div>
        <div class="title">即将上映</div>
        <swiper :options="dateOption" class="date-swiper">
            <swiper-slide class="date-swiper-slide" v-for="item in dateList" :key="item.class">
                <div :class="`date${activeClass==tem.id?' active':''}`" v-for="tem in item.children" :key="tem.id" @click="addAct(tem.id)">
                     {{tem.text}}
                </div>
            </swiper-slide>
        </swiper>
        <swiper class="presell-swiper" :options="presellOption" @transitionEnd="foo" ref="presell">
            <swiper-slide v-for="item in count" :key="item">
                    <div class="presell" v-for="item in presellList" :key="item.id">
                    <div class="presell-img">
                        <img :src="item.img" alt="">
                        <div class="stop"></div>
                    </div>
                    <div class="presell-text">
                        <div class="title">后来的我们</div>
                        <div class="number">
                            <span>1.4万</span>人想看
                        </div>
                        <div class="director">导演:刘若英</div>
                        <div class="actor">演员:周冬雨 井柏然</div>
                        <!-- <div class="presell-btn" >预售</div> -->
                        <router-link :to="{name:'cinemaDetail'}" class="presell-btn" tag="div">预售</router-link>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
import "swiper/dist/css/swiper.css";
//引入组件 注册组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { constants } from 'crypto';
import { setTimeout } from 'timers';
export default {
    name:"soon",
    data(){
        return{
             swiperOption:{
                 slidesPerView: 1.2,
                spaceBetween: 40,
                centeredSlides: true,
                loop: true,
            },
            dateOption:{
                slidesPerView: 1.2,
            },
            presellOption:{
               
            },
            soonMoviesList:[
                {
                    id:1,
                    img:require("@/assets/imgs/soon-movie/soon-01.png")
                },
                 {
                    id:2,
                    img:require("@/assets/imgs/soon-movie/soon-02.png")
                },
                 {
                    id:3,
                    img:require("@/assets/imgs/soon-movie/soon-03.png")
                }
            ],
            dateList:[
                {
                   class:"one",
                   children:[
                       {
                           id:1,
                           text:"2月1日"
                       },
                       {
                           id:2,
                           text:"2月2日"
                       },
                       {
                           id:3,
                           text:"2月3日"
                       }
                   ]
                },
                {
                   class:"two",
                   children:[
                       {
                           id:4,
                           text:"2月4日"
                       },
                       {
                           id:5,
                           text:"2月5日"
                       },
                       {
                           id:6,
                           text:"2月6日"
                       }
                   ]
                },
                {
                   class:"three",
                   children:[
                       {
                           id:7,
                           text:"2月7日"
                       },
                       {
                           id:8,
                           text:"2月8日"
                       },
                       {
                           id:9,
                           text:"2月9日"
                       }
                   ]
                }
            ],
            activeClass:1,
            presellList:[
                {
                    id:1,
                    img:require("../../../assets/imgs/soon-movie/presell-01.png")
                },
                 {
                    id:2,
                    img:require("../../../assets/imgs/soon-movie/presell-02.png")
                }
            ],
            count:[1,2,3,4,5,6,7,8,9]
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    methods:{
        addAct(id){
            // console.log(111);
            this.activeClass=id;
            console.log(this.$refs.presell);
            this.$refs.presell.swiper.slideTo(id-1, 1000, false);
        },
        foo(e){
            console.log(this.$refs.presell.swiper.activeIndex);
            this.activeClass=this.$refs.presell.swiper.activeIndex+1;
        }
    },
    mounted(){
        console.log('soon...')
        if(this.$root.$BScroll){
           // 找到betterScroll对象
            this.$root.$BScroll.scrollTo(0,0,0);     
        }
        
    },
    activated(){
        this.$root.$BScroll.refresh();     
        console.log('soon...')
    }
}
</script>
<style lang="scss" scoped>
    .soon-main{
        width: 100%;
        margin: 60px 0 20px;
        .title{
            width: 100%;
            height: 40px;
            font-size:18px;
            font-weight:500;
            color:rgba(223,223,223,1);
            line-height:40px;
            text-align: left;
            text-indent: 20px;
        }
        .banner{
            height: 185px;
            width:100%;
             .banner-swiper{
                height: 185px;
                width: 100%;
                .banner-swiper-slide{
                //      transition: all .8s ease;
                    position: relative;
                    .stop{
                        width: 38px;
                        height: 38px;
                        background:url("../../../assets/imgs/soon-movie/stop.png");
                        background-size:100% 100%;
                        position: absolute;
                        left: 50%;
                        top: 60px;
                        transform: translateX(-50%);
                    }
                    .text{
                        width: 238px;
                        height: 20px;
                        position: absolute;
                        left: 0;
                        bottom: 10px;
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(223,223,223,1);
                        line-height:20px;
                    }
                    .play-time{
                        width:30px;
                        height:17px;
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:17px;
                        position: absolute;
                        bottom: 12px;
                        right:8px;
                    }
                }
                // .swiper-slide:not(.swiper-slide-active) {
                //     transform: scale(0.9);
                // }
                img{
                    width: 318px;
                    height: 185px;
                    margin-left:-20px;
                }
            }
        }
        .date-swiper{
            height: 30px;
            width:100%;
                .date{
                    width: 82px;
                    height: 26px;
                    border-radius:13px;
                    border:2px solid rgba(151,151,151,1);
                    float: left;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(150,147,147,1);
                    text-align: center;
                    line-height: 26px;
                    margin-left: 16px;
                    overflow: hidden;
                    &.active{
                        background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
                        box-shadow:0px 0px 10px 0px rgba(242,109,125,0.4);
                        padding: 2px;
                        border: none;
                    }
                }
            }
        }
        .presell-swiper{
            width: 100%;
            height: auto;
            position: relative;
        }
        .presell{
            width: 335px;
            height: 140px;
            // border: 1px solid #fff;
            margin: 20px;
            position: relative;
            .presell-img{
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 117px;
                img{
                    position: absolute;
                    top: 0;
                    left: 0;
                    height: 100%;
                    width: 117px; 
                }
                .stop{
                    width: 38px;
                    height: 38px;
                    background: url("../../../assets/imgs/soon-movie/stop.png");
                    background-size: 100% 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
            }
            .presell-text{
                width: 200px;
                height: 100%;
                position: absolute;
                right: 0;
                text-align: left;
                .title{
                    text-align: left;
                    font-size:18px;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    height: 46px;
                    line-height:46px;
                    text-indent: 0px;
                }
                .number{
                     line-height:20px;
                     font-size: 12px;
                     margin-bottom: 6px;
                    span{
                        font-size:15px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(251,195,74,1);
                        margin-right: 5px;
                    }
                }
                .director,.actor{
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(200,200,200,1);
                    line-height:20px;
                }
                .presell-btn{
                    width:54px;
                    height:25px;
                    background:linear-gradient(150deg,rgba(98,75,163,1) 0%,rgba(203,68,152,1) 100%);
                    box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
                    border-radius:6px;
                    position: absolute;
                    line-height: 25px;
                    text-align: center;
                    top:50%;
                    transform: translateY(-50%);
                    right:15px;
                }
            }
        }
</style>