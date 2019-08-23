<template>
    <div class="hot-main">
        <div class="hot-movie" v-for="item in hotMoviesList" :key="item.id">
            <router-link :to='{"name":"info","params":{"id":item.id}}'>
                <div class="hot-movie-img">
                    <img :src="item.img" alt="">
                    <div class="stop"></div>
                </div>
                <div class="hot-movie-text">
                    <p class="movie-title">CRACKS（2018)</p>
                    <p class="grade">影火虫评分 <span>9.1</span></p>
                    <p class="director">导演：赞恩.阿尔.拉菲亚</p>
                    <p class="actor">主演：赞恩.阿尔.拉菲亚</p>
                    <div class="label">
                        <div class="label-1">
                            今日最热
                        </div>
                        <div class="label-2">
                            一周最热
                        </div>
                    </div>
                    <!-- <div class="buy">购票</div> -->
                    <router-link :to="{name:'seat'}" tag="div" class="buy">购票</router-link>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'hot',
    data(){
        return{
            hotMoviesList:[
                {
                    id:1,
                    img:require('../../../assets/imgs/hot-movie/hot-movie-01.png')
                },
                {
                    id:2,
                    img:require('../../../assets/imgs/hot-movie/hot-movie-02.png')
                },
                {
                    id:3,
                    img:require('../../../assets/imgs/hot-movie/hot-movie-03.png')
                },
                {
                    id:4,
                    img:require('../../../assets/imgs/hot-movie/hot-movie-04.png')
                },
                {
                    id:5,
                    img:require('../../../assets/imgs/hot-movie/hot-movie-05.png')
                }
            ]
        }
    },
    created(){
        console.log('..')
       
    },
    mounted(){
        
    },
    //  activated(){
    //      this.$root.$BScroll.refresh();     
    //     console.log('hot...')
    // }
}
</script>
<style lang="scss" scoped>
    .hot-main{
        margin: 70px 0;
        padding:0 20px;
        padding-bottom: 150px;
         .hot-movie{
            width:100%;
            height:130px;
            background:rgba(51,54,61,1);
            box-shadow:0px 0px 4px 2px rgba(0,0,0,0.04);
            border-radius:6px;
            position: relative;
            margin-top: 25px;
            .hot-movie-img{
                width: 105px;
                height: 156px;
                position: absolute;
                left: -6px;
                bottom: -6px;
                // background:url('../../../assets/imgs/hot-movie/hot-movie-01.png');
                background-size:100% 100%;
                img{
                    display: block;
                    width: 105px;
                    height: 156px;
                    position: absolute;
                    left: -6px;
                    bottom: -6px; 
                }
                .stop{
                    width: 38px;
                    height: 38px;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    background:url('../../../assets/imgs/hot-movie/stop.png');
                    background-size:100% 100%;
                }
            }
            .hot-movie-text{
                width: 220px;
                height: 100%;
                position: absolute;
                left:110px; 
                text-align: left;
                .movie-title{
                    height:16px;
                    font-size:16px;
                    font-family:PingFangSC-Medium;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    line-height:16px;
                    margin: 14px 0;
                }
                .grade{
                    height:14px;
                    font-size:14px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(240,240,240,1);
                    line-height:14px;
                    margin-bottom:10px;
                    span{
                        color: rgba(251,195,74,1);
                    }
                }
                .director,.actor{
                    height:18px;
                    font-size:12px;
                    font-family:PingFangSC-Regular;
                    font-weight:400;
                    color:rgba(200,200,200,1);
                    line-height:18px;
                }
                .label{
                    width: 100%;
                    height: 20px;
                    margin-top: 3px;
                    .label-1{
                        width: 48px;
                        height: 17px;
                        float: left;
                        line-height: 17px;
                        text-align: center;
                        margin-right: 4px;
                        border-radius:3px;
                        border:1px solid rgba(251,195,74,1);
                        color: rgba(251,195,74,1);
                    }
                    .label-2{
                        width: 48px;
                        height: 17px;
                        float: left;
                        line-height: 17px;
                        text-align: center;
                        margin-right: 4px;
                        border-radius:3px;
                       border:1px solid rgba(242,108,126,1);
                        color:rgba(242,108,126,1);
                    }
                }
                .buy{
                    width:54px;
                    height:25px;
                    background:linear-gradient(150deg,rgba(242,91,134,1) 0%,rgba(241,172,94,1) 100%);
                    box-shadow:0px 0px 4px 1px rgba(242,109,125,0.18);
                    border-radius:6px;
                    position: absolute;
                    right: 15px;
                    bottom: 45px;
                    line-height: 25px;
                    text-align: center;
                    color: aliceblue;
                }
            }
        }
    }
</style>