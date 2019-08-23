<template>
    <div class='detail-main'>
        <BaseLayer ref="baseLayer">
            <template v-slot:header>
                <div class="nav">
                    <img class="back" src="../../../assets/imgs/cinema/icons/arrow-l.png" @click="$router.go(-1)">
                    <p class="title">耀莱成龙影城 (建业店)</p>
                    <img class="collect" v-if="flag" @click="flag=!flag" src="../../../assets/imgs/cinema/icons/star.png">
                    <img class="collect" v-else @click="flag=!flag" src="../../../assets/imgs/cinema/icons/star-a.png">
                </div>
            </template>
            <template v-slot:default>
                <!-- 地址导航 -->
                <div class="nav add-nav" @click="hrefAddress">
                    <img class="position" src="../../../assets/imgs/cinema/icons/position.png">
                    <p class="title">
                        耀莱成龙影城 (建业店)
                        <br>
                        <span class="address">金水区中州大道建业置地</span>
                    </p>
                    <img class="next" src="../../../assets/imgs/cinema/icons/arrow-r.png">
                </div>

                <!-- 影片 swiper轮播部分 -->
                <div class="banner">
                    <swiper  class="banner-swiper" @transitionEnd="foo" :options="bannerOptions" ref="bannerSwiper" >
                        <!-- slides -->
                        <swiper-slide v-for="imgObj in bannerImgs" :key="imgObj.id">
                        <img class="img" :src="imgObj.img" alt />
                        </swiper-slide>
                    </swiper>
                </div>

                <!-- movie 信息 -->
                <div class="movie-info">
                    <div class="title">
                        {{bannerImgs[activeIndex].name}}
                    </div>
                    <div class="tag">
                        <span>{{bannerImgs[activeIndex].time}}分钟</span>
                        |
                        <span>{{bannerImgs[activeIndex].kind}}</span>
                        |
                        <span>{{bannerImgs[activeIndex].actor}}</span>
                    </div>
                    <p class="date">今天2月1日</p>  <!-- 可优化 -->
                </div>

                <!-- 场次信息 -->
                <div class="session-list">
                    <div class="session-item" v-for="sessions in bannerImgs[activeIndex].session" :key="sessions.id">
                        <div class="time">
                            {{sessions.start}}
                            <br>
                            <span>{{sessions.end}}散场</span>
                        </div>
                        <div class="address">
                            {{sessions.kind}}
                            <br>
                            <span>{{sessions.address}}</span>
                        </div>
                        <div class="price">{{sessions.price}}元</div>
                        <div class="buy" @click="hrefSeat"><div class="buy-ticket">购票</div></div>
                    </div>
                </div>
            </template>
        </BaseLayer>
    </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import BaseLayer from '@/components/BaseLayer';
    export default {
        name:"Detail",
        components: {
            BaseLayer,
            swiper,
            swiperSlide
        },
        data () {
            return {
                flag:true,
                activeIndex:0,
                bannerImgs:[
                    {
                        id: 1,
                        name:"后来的我们",
                        time:119,
                        kind:"剧情",
                        actor:"周冬雨",
                        img: require("@/assets/imgs/cinema/movie_1.png"),
                        session:[
                            {
                                id:1,
                                start:"15:30",                  //15:30
                                end:"17:14",                    //17:14
                                kind:"原版3D",                  //原版3D
                                address:"2号厅(冠名招商中)",    //2号厅(冠名招商中)
                                price:30.9,                     //30.9
                            },
                            {
                                id:2,
                                start:"15:30",                  //15:30
                                end:"17:14",                    //17:14
                                kind:"原版3D",                  //原版3D
                                address:"2号厅(冠名招商中)",    //2号厅(冠名招商中)
                                price:30.9,                     //30.9
                            },
                            {
                                id:3,
                                start:"15:30",                  //15:30
                                end:"17:14",                    //17:14
                                kind:"原版3D",                  //原版3D
                                address:"2号厅(冠名招商中)",    //2号厅(冠名招商中)
                                price:30.9,                     //30.9
                            },
                            {
                                id:4,
                                start:"15:30",                  //15:30
                                end:"17:14",                    //17:14
                                kind:"原版3D",                  //原版3D
                                address:"2号厅(冠名招商中)",    //2号厅(冠名招商中)
                                price:30.9,                     //30.9
                            }
                    ]
                    },
                    {
                        id: 2,
                        name:"春风十里不如你",
                        time:121,
                        kind:"未知",
                        actor:"不知道",
                        img: require("@/assets/imgs/cinema/movie_2.png")
                    },
                    {
                        id: 3,
                        name:"后来的我们",
                        time:119,
                        kind:"剧情",
                        actor:"周冬雨",
                        img: require("@/assets/imgs/cinema/movie_3.png")
                    },
                    {
                        id: 4,
                        name:"春风十里不如你",
                        time:119,
                        kind:"剧情",
                        actor:"周冬雨",
                        img: require("@/assets/imgs/cinema/movie_4.png")
                    },
                    {
                        id: 5,
                        name:"后来的我们",
                        time:119,
                        kind:"剧情",
                        actor:"周冬雨",
                        img: require("@/assets/imgs/cinema/movie_1.png")
                    }
                ],
                bannerOptions: {
                    slidesPerView: 5,
                    spaceBetween: -80,
                    centeredSlides: true,
                    effect: 'coverflow',
                    coverflowEffect: {
                        rotate: 0,		
                        stretch: 1,		
                        depth: 160,			
                        modifier: 2,		
                        slideShadows : false
                    }
                },
                currentFilm:{
                    id: 1,
                    name:"最好的我们",           //最好的我们
                    time:119,                   //119
                    kind:"剧情",                //剧情
                    actor:"周冬雨",             //周冬雨
                    session:[
                        {
                            id:1,
                            start:"15:30",                  //15:30
                            end:"17:14",                    //17:14
                            kind:"原版3D",                  //原版3D
                            address:"2号厅(冠名招商中)",    //2号厅(冠名招商中)
                            price:30.9,                     //30.9
                        },
                        {
                            id:2,
                            start:"15:30",                  //15:30
                            end:"17:14",                    //17:14
                            kind:"原版3D",                  //原版3D
                            address:"2号厅(冠名招商中)",    //2号厅(冠名招商中)
                            price:30.9,                     //30.9
                        },
                        {
                            id:3,
                            start:"15:30",                  //15:30
                            end:"17:14",                    //17:14
                            kind:"原版3D",                  //原版3D
                            address:"2号厅(冠名招商中)",    //2号厅(冠名招商中)
                            price:30.9,                     //30.9
                        },
                        {
                            id:4,
                            start:"15:30",                  //15:30
                            end:"17:14",                    //17:14
                            kind:"原版3D",                  //原版3D
                            address:"2号厅(冠名招商中)",    //2号厅(冠名招商中)
                            price:30.9,                     //30.9
                        }
                    ]
                }
                //date日期
            };
        },
        computed: {

        },
        methods: {
            hrefAddress(){
                this.$router.push({path:'/cinema/address'})
            },
            hrefSeat(){
                this.$router.push({path:'/cinema/seat'})
            },
            foo(e){
                console.log(this.$refs.bannerSwiper.swiper.activeIndex);
                this.activeIndex = this.$refs.bannerSwiper.swiper.activeIndex;
            }
        },
        mounted(){
            console.log(this.$refs.baseLayer);
            this.$nextTick(() => {
                this.$refs.baseLayer.$BScroll.eventTypes.refresh;
            });
        },
        updated() {
            console.log(this);
        }
    }
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.detail-main{
    width:100%;
    height:100%;
    background: #23262d url(../../../assets/imgs/cinema/movie_bg.png) no-repeat top;
    background-size: 100% 44%;
    overflow: hidden;
    .nav{
        display:flex;
        height:100%;
        background: transparent;
        padding:0 $basePadding;
        font-size: 16px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        line-height:40px;
        color:rgba(255,255,255,1);
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        margin-bottom:10px;
        img{
            width: 22px;
            height: 22px;
        }
        .back{
            left:$basePadding;
        }
        .collect{
            right:$basePadding;
        }
    }
    .add-nav{
        margin-top: 60px;
        height:$baseNavHeight;
        .position{
            height:30px;
        }
        .title{
            flex-grow: 1;
            height: 100%;
            margin-left:25px;
            line-height: 22px;
            text-align: left;
        }
        .address{
            font-weight:400;
            line-height:17px;
            font-size: 12px;
            color:#DFDFDF;
        }
    }
    .banner{
        width: 100%;
        height: 200px;
        .banner-swiper{
            height: 100%;
            padding-top: 20px;
        }
        swiper-slide{
            height: 100%;
        }
        .img{
            width: 140px;
            height: 188px;
        }
    }
    .movie-info{
        height: 70px;
        width: 100%;
        margin-top:10px;
        box-sizing: border-box;
        padding: 0 $basePadding;
        .title,
        .tag,
        .date{
            width: 100%;
        }
        .title{
            height:25px;
            font-size:18px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:25px;
        }
        .tag{
            height:20px;
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color: #9FA1A3;
            line-height: 20px;
        }
        .date{
            height:17px;
            font-size:12px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(251,195,74,1);
            line-height:17px;
            text-align:left;
            margin-top:10px;
        }
    }
    .session-list{
        width: 100%;
        padding: 0 $basePadding;
        box-sizing: border-box;
        .session-item{
            display: flex;
            height: 90px;
            margin: 10px 0 0 0;
            box-sizing: border-box;
            overflow: hidden;
            background:rgba(51,54,61,1);
            border-radius:6px;
            align-items: flex-start;
            padding-top: 21px;
            .time,
            .address,
            .price,
            .buy{
                display:inline-block;
                box-sizing: border-box;
                width: 25%;
            }
            .time{
                font-size:18px;
                span{
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    color: #9FA1A3;
                }
            }
            .address{
                text-align:left;
                line-height:18px;                
                span{
                    color: #9FA1A3;
                }
            }
            .price{
                font-size:18px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(251,195,74,1);
                line-height:25px;
            }
            .buy{
                .buy-ticket{
                    display: block;
                    margin:0 auto;
                    width: 45px;
                    height: 25px;
                    background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
                    box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
                    border-radius:6px;
                    line-height: 25px;
                }
            }
        }
    }
}
</style>