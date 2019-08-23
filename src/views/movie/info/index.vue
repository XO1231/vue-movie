<template>
    <div class="info-main">
         <div class="go" @click="$router.push({'name':'hot'})">
             <img src="../../../assets/imgs/movie-info/back.png" alt="">
         </div>
            <div class="share">
                <img src="../../../assets/imgs/movie-info/share.png" alt="">
            </div>
          <!-- 选座 固定定位 -->
        <router-link :to="{name:'seat'}" class="choose">特惠选座</router-link>
        <baseLayer>
            <template v-slot:default>
                <!-- 背景 -->
                <div class="bg">
                   
                    <div class="hot-movie">
                        <img :src="img" alt="">
                    </div>
                    <div class="stop"></div>
                </div>
                <!-- 版心 -->
                <div class="mian-c">
                     <!-- 文字简介 -->
                     <div class="text-intro">
                         <div class="title">
                             傲慢与偏见（2005）
                             <span class="play-time">120min</span>
                         </div>
                         <div class="eg-title">
                             Pride & Prejudice
                         </div>
                         <router-link class="grade" :to="{name:'score'}">
                             <start :num="number"></start>
                             <p>9.0<span>/10</span></p>
                             <div class="icon">
                                 <img src="../../../assets/imgs/movie-info/comment.png" alt="">
                                 <img src="../../../assets/imgs/movie-info/xin-0.png" alt="">
                             </div>
                         </router-link>
                         <!-- 锚点 -->
                        <div class="links" id="aa">
                            <a href="#aa" class="link" :class="numb==1?'active':''" @click="get(1)">简介</a>
                            <a href="#bb" class="link" :class="numb==2?'active':''" @click="get(2)">影评</a>
                            <a href="#" class="link" :class="numb==3?'active':''" @click="get(3)">讨论</a>
                            <a href="#" class="link" :class="numb==4?'active':''" @click="get(4)">更多</a>
                        </div>
                        <div class="box">
                            <div class="info">
                                伊丽莎白·班纳特（凯拉·奈特莉饰）和姐姐珍·班纳特（罗莎曼 德·派克 饰）、妹妹玛丽·班纳特（妲露拉·莱莉饰）、凯蒂·班 纳特（凯瑞·穆丽根饰）以及丽迪亚·班纳特（吉娜·马隆 饰） 这5个出身于小地主家庭的姐妹个个如花似玉…
                                <span>查看更多></span>
                            </div>
                         </div>
                    </div>
                </div>
                    <!-- 演员介绍 -->
                    <div class="actor">
                        <div class="title">
                            演职人员
                        </div>
                             <swiper class="actor-swiper" :options="actorOptions">
                                <!-- slides -->
                                <swiper-slide v-for="item in actorList" :key="item.id">
                                    <router-link :to="{name:'performer'}" class="actor-info" v-for="(tem,index) in item.children" :key="index">
                                        <img class="img" :src="tem.img"/>
                                        <p class="name">凯拉·奈特莉</p>
                                        <p class="movie-name">饰伊丽莎…</p>
                                    </router-link>
                                </swiper-slide>
                            </swiper>
                        <p class="all-actor">全部32位演员</p>
                    </div>
                    <!-- 视频 -->
                    <div class="video">
                        <div class="title">视频</div>
                            <swiper class="video-swiper" :options="videoOptions">
                                <!-- slides -->
                                <swiper-slide v-for="(item,index) in videoList" :key="index">
                                    <router-link :to="{name:'performer'}" class="video-info"> 
                                        <img class="img" :src="item.video"/>
                                        <p class="describe">《傲慢与偏见》:百年经典的绝美呈现,一次现实与理想的爱情碰撞</p>
                                    </router-link>
                                </swiper-slide>
                            </swiper>
                        <p class="all-video">全部10个视频</p>
                    </div>
                    <!-- 票房 -->
                    <div class="box-office">
                        <div class="title">票房</div>
                        <div class="contain">
                            <div class="left">
                                <p class="top">2</p>
                                <p class="bottom">今日票房排行</p>
                            </div>
                            <div class="center">
                                <p class="top">暂无</p>
                                <p class="bottom">首周票房（万）</p>
                            </div>
                            <div class="right">
                                <p class="top">2660</p>
                                <p class="bottom">今日票房排行</p>
                            </div>
                        </div>
                        <router-link class="office-info" :to="{name:'boxOffice'}">票房详情</router-link>
                    </div>
                    <!-- 观众热评 -->
                    <div class="hot-commit" id="bb">
                        <div class="title">观众热评
                            <span class="write">写影评</span>
                        </div>
                        <div class="commit-box">
                            <p>
                                <span class="style-1">全部</span>
                                <span class="style-1">最新</span>
                                <span class="style-2">陪伴是最长情的告白1902</span>
                            </p>
                            <p>
                                <span class="style-2">爱狗人士必看1904</span>
                                <span class="style-1">好评5412</span>
                                <span class="style-1">差评69</span>
                            </p>
                              <p>
                                <span class="style-1">点映415</span>
                                <span class="style-1">购票542</span>
                                <span class="style-1">影评达人564</span>
                            </p>
                             <p>
                                <span class="style-1">同城69</span>
                            </p>
                        </div>
                        <div class="xjt">
                            <img src="../../../assets/imgs/commit/xjt.png" alt="">
                        </div>
                    </div>
                    <!-- 用户评论区 -->
                    <div class="users">
                        <ul>
                            <li class="user" v-for="(item,index) in userList" :key="index">
                                <div class="top">
                                    <img :src="item.img" alt="">
                                    <div class="user-name">
                                       <p>yujia2754</p> 
                                       <start :num="number"></start>
                                       <span>9.0</span>
                                    </div>
                                    <div class="dots">...</div>
                                </div>
                                <div class="center">
                                    2002年，15岁的石原里美参加了HORIPRO公司第27回艺人新人 选拔，获得最佳新人“完美少女”奖 。2003年2月15日，参演的 爱情电影《小岛之恋》上映…
                                </div>
                                <div class="bottom">
                                    <div class="left">05-17 09:34</div>
                                    <div class="right">
                                        <img src="../../../assets/imgs/commit/pick.png" alt=""> <span>56</span>
                                         <img src="../../../assets/imgs/commit/commit.png" alt=""> <span>1</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
            </template>
        </baseLayer>    
    </div>
</template>
<script>
import BaseLayer from "@/components/BaseLayer.vue"
import start from "@/components/start.vue"
import "swiper/dist/css/swiper.css";
//引入组件 注册组件
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    components:{
        BaseLayer,
        start,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            id:"",
            // img:require("`../../../assets/imgs/movie-info/hot-movie-0${this.id}.png`")
            number:4.5,
            actorOptions:{
                
            },
            videoOptions:{
                slidesPerView: 1.6,
            },
            actorList:[
                {
                    id:1,
                    children:[
                        {
                            img:require("../../../assets/imgs/movie-info/actor-01.png")
                        },
                        {
                            img:require("../../../assets/imgs/movie-info/actor-02.png")
                        },
                        {
                            img:require("../../../assets/imgs/movie-info/actor-03.png")
                        }
                    ]
                },
                 {
                    id:2,
                    children:[
                        {
                            img:require("../../../assets/imgs/movie-info/actor-04.png")
                        },
                        {
                            img:require("../../../assets/imgs/movie-info/actor-01.png")
                        },
                        {
                            img:require("../../../assets/imgs/movie-info/actor-02.png")
                        }
                    ]
                },
                    {
                    id:3,
                    children:[
                        {
                            img:require("../../../assets/imgs/movie-info/actor-01.png")
                        },
                        {
                            img:require("../../../assets/imgs/movie-info/actor-02.png")
                        },
                        {
                            img:require("../../../assets/imgs/movie-info/actor-03.png")
                        }
                    ]
                }
            ],
            videoList:[
                {
                    video:require("../../../assets/imgs/movie-info/video-01.png")
                },
                  {
                    video:require("../../../assets/imgs/movie-info/video-02.png")
                },
                  {
                    video:require("../../../assets/imgs/movie-info/video-01.png")
                },
                  {
                    video:require("../../../assets/imgs/movie-info/video-02.png")
                }
            ],
            userList:[
                {
                    img:require("../../../assets/imgs/commit/user1.png")
                },
                 {
                    img:require("../../../assets/imgs/commit/user2.png")
                },
                 {
                    img:require("../../../assets/imgs/commit/user3.png")
                }
            ],
            numb:1
        }
    },
    methods:{
        get(num){
            this.numb=num;
        }
    },
    created(){
        this.id=this.$route.params.id;
        console.log(this.id);
    },
    computed:{
        img(){
            return require("../../../assets/imgs/movie-info/hot-movie-0"+this.id+".png") //必须加require才能解析出图片
        }
    }
}
</script>
<style lang="scss" scoped>
    .baselayer-main{
        ::v-deep.header{
            display: none;
        }
    }
    .info-main{
        height: 100%;
        width: 100%;
    }
     .share{
            width: 20px;
            height: 20px;
            position:fixed;
            z-index: 999;
            right: 20px;
            top: 20px;
            img{
               width: 19px;
                height: 19px; 
            }
        }
        .go{
            width: 20px;
            height: 20px;
            position: fixed;
            left: 20px;
            top: 20px;
            z-index:999;
             img{
               width: 19px;
                height: 19px; 
            }
        }
    .bg{
        width: 100%;
        height: 258px;
        background:url("../../../assets/imgs/movie-info/bg.png");
        background-size: 100% 100%;
        position: relative;
        .hot-movie{
            width: 96px;
            height: 131px;
            position: absolute;
            bottom: -20px;
            left: 20px;
            img{
                width: 96px;
                height: 131px;
            }
        }
        .stop{
            width: 50px;
            height: 50px;
            background:url("../../../assets/imgs/movie-info/stop.png");
            background-size:100% 100%;
            position: absolute;
            right: 105px;
            bottom: 20px;
        }
    }
    .mian-c{
        width: calc(100% - 40px);
        margin: 50px 20px 0;
         .text-intro{
             width: 100%;
             height: 230px;
            //  border: 1px solid #fff;
             position: relative;
             text-align: left;
             .title{
                height: 20px;
                width: 100%;
                font-size:20px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:20px;  
                text-align:left;
                .play-time{
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(241,116,121,1);
                    line-height:12px;
                    margin-left: 10px;
                }
             }
             .eg-title{
                 width: 100%;
                 height:14px;
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(200,200,200,1);
                line-height:14px;
                margin: 15px 0 10px;
             }
             .grade{
                 display: block;
                 height: 40px;
                 position: relative;
                    .start{
                        height: 40px;
                        width: 140px;
                        float: left;
                        ::v-deep.iconfont{
                           font-size: 22px;
                           margin-right: 5px;
                           line-height: 40px;
                        }
                    }
                    p{
                       height: 40px; 
                       width: 40px;
                       font-size: 22px;
                        line-height: 40px;
                        font-family:PingFangSC-Medium;
                        font-weight:500;
                        color:rgba(251,195,74,1);
                        float: left;
                         span{
                            font-size:12px;
                            font-family:PingFangSC-Medium;
                            font-weight:500;
                            color:rgba(255,255,255,1);
                        }
                    }
                    .icon{
                        width: 60px;
                        height: 18px;
                        position: absolute;
                        right: 0;
                        bottom:11px;
                        // border: 1px solid #fff;
                        display: flex;
                        justify-content: space-around;
                        img{
                            width: 18px;
                            height: 18px;
                        }
                    }
             }
           
                 .links{
                     height: 20px;
                     width: 100%;
                     margin-top: 15px;
                 }
                 .link{
                    width:28px;
                    height:14px;
                    font-size:14px;
                    font-weight:400;
                    margin-right: 10px;
                    color:rgba(188,188,188,1);
                    line-height:14px;
                    float: left;
                    position: relative;
                 }
                 .link.active{
                      color:rgba(255,255,255,1);
                      &::after{
                        content:"";
                        display: block;
                        width:29px;
                        height:3px;
                        background:linear-gradient(135deg,rgba(241,100,129,1) 0%,rgba(241,144,108,1) 100%);
                        position: absolute;
                        bottom:-5px;
                      }
                 }
                .box{
                 height: 100px;
                 width: 100%;
                 margin-top: 10px;
                 .info{
                     margin-top:15px;
                     font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(180,180,180,1);
                    line-height:18px;
                    span{
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(251,195,74,1);
                        line-height:14px;
                    }
                 }
             }
        }
    }
      .actor{
            margin-top: 15px;
            width: 100%;
            height: 250px;
            .title{
                height: 20px;
                width: 100%;
                text-align: left;
                font-size:20px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:20px;
                text-indent: 20px;
            }
            .actor-swiper{
                margin-top: 20px;
                height: 180px;
                width: 100%;
                .actor-info{
                    width: 100px;
                    display: block;
                    height: 180px;
                    margin-left: 20px;
                    text-align: left;
                    float: left;
                    .img{
                        width: 100px;
                        height: 140px;
                    }
                    .name{
                        font-size:14px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:20px;
                    }
                    .movie-name{
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(220,220,220,1);
                        line-height:16px;
                    }
                }
            }
            .all-actor{
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(251,195,74,1);
                line-height:20px;
                margin-top: 10px;
            }
        }
        .video{
            width: 100%;
            height: 250px;
            // border: 1px solid #fff;
            margin: 20px 0;
            .title{
                height: 20px;
                width: 100%;
                text-align: left;
                font-size:20px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:20px;
                text-indent: 20px;
                margin-bottom: 20px;
            }
            .video-swiper{
                height: 160px;
                width: 100%;
                .video-info{
                    width: 200px;
                    display: block;
                    text-align: left;
                    padding-left: 20px;
                    .img{
                    width: 200px;
                    height: 120px;
                    }
                    .describe{
                        margin-top: 5px;
                        height:36px;
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:18px;
                    }
                }
            }
            .all-video{
                margin-top:20px; 
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(251,195,74,1);
                line-height:14px;
            }
        }
        .box-office{
            width: 100%;
            height: 180px;
            .title{
                height: 20px;
                width: 100%;
                text-align: left;
                font-size:20px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:20px;
                text-indent: 20px;
                margin-bottom: 20px;
            }
            .contain{
                height: 50px;
                width: 100%;
                padding:0 20px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                .top{
                    font-size:18px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:30px;
                }
                .bottom{
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(200,200,200,1);
                    line-height:12px;
                }
            }
            .office-info{
                display: block;
                font-size:14px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(251,195,74,1);
                line-height:14px;
                margin: 20px 0;
            }
        }
        .choose{
            display: block;
            width: 100%;
            height:44px;
            position: fixed;
            z-index: 9999;
            bottom: 0;
            background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
            box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
            font-size:18px;
            font-family:PingFangSC-Medium;
            font-weight:800;
            color:rgba(255,255,255,1);
            line-height:44px;
        }
        .hot-commit{
            height:270px;
            width: 100%;
            padding: 0 20px;
            box-sizing: border-box;
            .title{
                height: 26px;
                width: 100%;
               font-size:18px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(255,255,255,1);
                line-height:26px;
                text-align:left;
                position: relative;
                .write{
                    display: block;
                    height: 25px;
                    width: 54px;
                    position: absolute;
                    right: 0;
                    top:0;
                    background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
                    box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
                    border-radius:13px;
                    font-size:12px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:25px;
                    text-align: center;
                }
            }
            .commit-box{
                height: 170px;
                width: 100%;
                margin-top: 20px;
                p{
                    height: 40px;
                    width: 100%;
                    line-height: 40px;
                    text-align: left;
                    span{
                        background:rgba(51,54,61,1);
                        border-radius:10px;
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:18px;
                        padding: 3px 6px;
                        margin-right:15px; 
                    }
                    .style-2{
                        background-color: #23262D;
                        border: 1px solid rgba(51,54,61,1);
                    }
                }
            }
            .xjt{
                width: 100%;
                height: 20px;
            }
        }
        .users{
            width: 100%;
            height: 500px;
            padding: 0 20px;
            box-sizing: border-box;
            .user{
                width: 100%;
                height: 150px;
                position: relative;
                .top{
                    height: 60px;
                    width: 100%;
                    text-align: left;
                    img{
                        height: 50px;
                        width: 50px;
                        float: left;
                    }
                    .user-name{
                        width: 100px;
                        height: 50px;
                        float: left;
                        margin-left: 15px;
                        position: relative;
                        p{
                            font-size:14px;
                            font-family:PingFangSC-Semibold;
                            font-weight:600;
                            color:rgba(255,255,255,1);
                            line-height:25px;
                        }
                        .start{
                            margin-top: 5px;
                            ::v-deep.iconfont{
                                font-size: 10px;
                            }
                        }
                        span{
                            font-size:10px;
                            font-family:PingFangSC-Medium;
                            font-weight:500;
                            color:rgba(251,195,74,1);
                            line-height:14px;
                            position: block;
                            position:absolute;
                            bottom: 8px;
                            right: 17px;
                        }
                    }
                    .dots{
                        font-size:25px;
                        position:absolute;
                        right: 6px;
                        top: 6px;
                    }
                }
                .center{
                    height: 54px;
                    width: 100%;
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:18px;
                    text-align:left;
                }
                .bottom{
                    width: 100%;
                    height: 20px;
                    margin-top: 15px;
                    .left{
                        width:70px;
                        height:17px;
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(200,200,200,1);
                        line-height:17px;
                        float: left;
                    }
                    .right{
                        width: 100px;
                        height: 20px;
                        float: right;
                        span{
                        line-height: 20px;
                        font-size:12px;
                        font-family:PingFangSC-Regular;
                        font-weight:400;
                        color:rgba(200,200,200,1);
                        margin: 0 5px;
                        vertical-align: middle;
                        }
                        img{
                            width: 20px;
                            height: 20px;
                            vertical-align: middle;
                        }
                    }
                }
            }
        }
</style>