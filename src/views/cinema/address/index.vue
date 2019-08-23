<template>
    <div class='address-main'>
        <BaseLayer ref="baseLayer">
            <template v-slot:header>
                <div class="nav">
                    <img class="back" src="../../../assets/imgs/cinema/icons/arrow-l.png" @click="$router.go(-1)">
                    <p class="title">影院地图</p>
                    <img class="search" src="../../../assets/imgs/cinema/icons/search.png">
                </div>
            </template>
            <template v-slot:default>
                <!-- 创建地图元素 -->
                <div id="allmap"></div>
                <!-- 影院swiper -->
                <div class="cinema">
                    <swiper class="cinema-swiper"  :options="cinemaOptions" ref="cinemaSwiper">
                        <swiper-slide v-for="imgObj in cinemaImgs" :key="imgObj.id">
                            <img class="img" :src="imgObj.img"/>
                            <p class="title">{{imgObj.name}}</p>
                            <div class="icon">
                                <img src="../../../assets/imgs/cinema/icons/share.png" alt="">
                                <img src="../../../assets/imgs/cinema/icons/tel.png" alt="">
                                {{imgObj.time}}min
                            </div>
                            <div class="info">查看</div>
                        </swiper-slide>
                    </swiper>
                </div>
            </template>
        </BaseLayer>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import BaseLayer from '@/components/BaseLayer';
    export default {
        components: {
            BaseLayer,
            swiper,
            swiperSlide
        },
        data () {
            return {
                cinemaImgs:[
                    {
                        id:1,
                        name:"耀莱成龙影城(建业店)",
                        time:45,
                        img:require('@/assets/imgs/cinema/cinema_1.png')
                    },
                    {
                        id:2,
                        name:"五一影城",
                        time:50,
                        img:require('@/assets/imgs/cinema/cinema_2.png')
                    },
                    {
                        id:3,
                        name:"耀莱成龙影城(建业店)",
                        time:45,
                        img:require('@/assets/imgs/cinema/cinema_1.png')
                    },
                    {
                        id:4,
                        name:"五一影城",
                        time:50,
                        img:require('@/assets/imgs/cinema/cinema_2.png')
                    }
                ],
                cinemaOptions:{
                    slidesPerView: "auto"
                }
            };
        },
        computed: {

        },
        methods: {

        },
        mounted() {
            // 百度地图API功能
            var map = new BMap.Map("allmap");    // 创建Map实例
            // 初始化地图,设置中心点坐标和地图级别初始化地图,设置中心点坐标和地图级别
            map.centerAndZoom(new BMap.Point(113.774139,34.77657), 16);
            //添加地图类型控件
            map.addControl(new BMap.MapTypeControl({
                mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));
            // 左上角，添加比例尺
            map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT}));	
            //左上角，添加默认缩放平移控件        
            map.addControl(new BMap.NavigationControl());    
            //右上角，仅包含平移和缩放按钮    
            map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}));        
            // map.addControl(top_left_navigation);     
            // map.addControl(top_right_navigation);   	  
            map.setCurrentCity("郑州");          		// 设置地图显示的城市 此项是必须设置的
            // map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            //不凡坐标
            // var point = new BMap.Point(113.774139,34.77657);
            var point = new BMap.Point(113.772649,34.78376);
            var point2 = new BMap.Point(113.774139,34.77456);
            var point3 = new BMap.Point(113.776798,34.77876);
            //添加涂层
            //自定义图标
            var myIcon = new BMap.Icon(require("../../../assets/imgs/cinema/icons/point.png"), new BMap.Size(22,30),{
　　　　　　　　　　imageSize: new BMap.Size(22,30), // 引用图片实际大小
　　　　　　　　});
            //黑点
            //var 
            var marker = new BMap.Marker(point,{icon:myIcon});  // 创建标注
            var marker2 = new BMap.Marker(point2,{icon:myIcon});  // 创建标注
            var marker3 = new BMap.Marker(point3,{icon:myIcon});  // 创建标注
            map.addOverlay(marker);               // 将标注添加到地图中
            map.addOverlay(marker2);               // 将标注添加到地图中
            map.addOverlay(marker3);               // 将标注添加到地图中
            marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        },
    }
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.address-main{
    position: relative;
    height: 100%;
    width: 100%;
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
        .search{
            right:$basePadding;
        }
    }
    #allmap{
        position:absolute;
        left: 0;
        top: 40px;
        height: 584px;
        width: 375px;
        overflow: hidden;
        font-family:"微软雅黑";
    }
    .cinema{
        position:fixed;
        left: 0;
        bottom: 0;
        height: 200px;
        width: 100%;
        .cinema-swiper{
            height:100%;
            width: 100%;
            &.swiper-slide:last-child{
                margin-right:20px;
            }//不好使
            .swiper-slide{
                position:relative;
                display:block;
                width: 202px!important;
                height: 194px;
                margin:0;
                margin-left:20px;
                font-size: 12px;
                background-color: #33363D;
                .img{
                    display:block;
                    height: 133px;
                    width: 200px;
                }
                .title{
                    color:#fff;
                    height:27px;
                    width: 140px;
                    line-height:27px;
                    margin:7px 0 5px;
                    text-align: left;
                    text-indent: 1em;
                }
                .icon{
                    width: 140px;
                    text-align:right;
                    color: #73757A;
                    img{
                        float:left;
                        width: 16px;
                        height: 16px;
                        margin-left:12px;
                    }
                }
                .info{
                    position:absolute;
                    right: 6px;
                    bottom: 15px;
                    width:45px;
                    height:25px;
                    margin-top:18px;
                    background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
                    box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
                    border-radius:6px;
                    text-align: center;
                    line-height: 25px;
                }
            }
        }
    }
}

</style>