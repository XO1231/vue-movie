<template>
    <div class='order-main'>
        <div class="nav">
            <img class="back" @click="$router.go(-1)" src="../../../assets/imgs/cinema/icons/arrow-l.png" alt="">
        </div>
        <!-- 上页传值过来 -->
        <div class="title-wrapper">
            <p class="title">{{fileName}}</p>
            <p class="time">今天2月1日 {{time}}({{kind}})</p>
            <p class="address">{{cinemaName}}</p>
            <p class="seat">{{session}} 
                <span v-for="(seat,index) in selectedSeat[0]" :key="index">{{seat.row}}排{{seat.col}}座</span>
            </p>
        </div>
        <div class="order-wrapper">
            <div class="discount">
                <span class="order-item">电影优惠券</span>
                <div class="order-val">
                    <span>1张优惠券可用</span>
                    <span class="icon-r"></span>
                </div>
            </div>
            <div class="vip">
                <span class="order-item">会员卡</span>
                <div class="order-val">
                    <span>去使用</span>
                    <span class="icon-r"></span>
                </div>
            </div>
            <div class="total">
                <span class="order-item">票价总计</span>
                <div class="order-val">
                    <span class="total-price">{{totalPrice}}</span>
                    <span class="rmb">元</span>
                </div>
            </div>
            <div class="tel">
                <span class="order-item">手机号</span>
                <br>
                <div class="order-val-tel">
                    <span>购票成功后将收到取票码</span>
                    <span>13858574848</span>
                </div>
            </div>
        </div>
        <div class="order-footer">
            <div class="tips">
                <div class="refund">
                    <span class="text">查看退票、改签协议</span>
                    <i></i>
                </div>
                <div class="pay">
                    <span class="text">还需支付:</span>
                    <div class="order-val">
                        <span class="total-price">{{totalPrice}}</span>
                        <span class="rmb">元</span>
                    </div>
                    <i></i>
                </div>
            </div>
            <div class="btn">
                <routerLink tag="div" :to="{name:'orders'}">确认订单</routerLink>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        components: {

        },
        data () {
            return {
                selectedSeat:[],
                //电影名
                fileName:"",
                //电影院名
                cinemaName:"",
                //种类
                kind:"",
                //时间
                time:"",
                //场次
                session:"",
                //票价
                price:0,
            };
        },
        computed: {
            totalPrice(){
                return this.$route.params.info.length * this.price;
            }
        },
        methods: {
            initSeat:function(){
                // console.log(this.$route);
                // console.log(this.$route.params.info);
                this.selectedSeat.push(this.$route.params.info);
                // console.log(this.selectedSeat[0]);
                //电影名
                this.fileName = this.$route.params.fileName;
                //电影院名
                this.cinemaName = this.$route.params.cinemaName;
                //种类
                this.kind = this.$route.params.kind;
                //时间
                this.time = this.$route.params.time;
                //场次
                this.session = this.$route.params.session;
                //票价
                this.price = this.$route.params.price;
            }
        },
        created() {
            this.initSeat();
        },
    }
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";

.order-main{
    width:100%;
    height:100%;
    background: #23262d url(../../../assets/imgs/cinema/order_bg.png) no-repeat top;
    background-size: 100%;
    overflow: hidden;
    .nav{
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: $baseNavHeight;
        z-index: 99;
        display:flex;
        background: transparent;
        padding:0 $basePadding;
        font-size: 16px;
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
    }
    .title-wrapper{
        box-sizing: border-box;
        padding:0 $basePadding;
        margin-top:50px;
        color:#fff;
        border-bottom:1px dashed #92959A;
        text-align: left;
        .title{
            font-size: 24px;
        }
        .time,
        .address,
        .seat{
            color:#A1A4A8;
            font-size: 14px;
            margin-top: 15px;
        }
        .seat{
            margin-bottom:45px;
            span{
                display: inline-block;
                margin-left:15px;
            }
        }
    }
    .order-wrapper{
        width: 335px;
        box-sizing:border-box;
        margin: 0 auto;
        margin-top:40px;
        background-color: #33363d;
        overflow: hidden;
        border-radius:6px;
        .discount,
        .vip,
        .total{
            display: flex;
            width: 100%;
            margin:20px 0;
            justify-content: space-between;
            .order-item{
                font-size: 16px;
                text-indent:.5em;
            }
            .order-val{
                margin-right:10px;
            }
        }
        .tel{
            display:flex;
            flex-direction: column;
            width: 100%;
            margin:20px 0;
            .order-item{
                display:flex;
                justify-content: flex-start;
                font-size: 16px;
                text-indent:.5em;
            }
            .order-val-tel{
                display: flex;
                justify-content: space-between;
                padding:0 10px;
                color: #92959A;
            }
        }
        .discount,
        .vip{
            .order-val{
                display: flex;
                font-size: 12px;
                color:#fbc34a;
                .icon-r{
                    display:block;
                    width: 12px;
                    height: 12px;
                    margin-left:2px;
                    background: url(../../../assets/imgs/cinema/icons/arrow-r-y.png) no-repeat center;
                    background-size: cover;
                }
            }
        }
        .total{
            .order-val{
                color:#c21313;
                :first-child{
                    font-size: 20px;
                }
                .rmb{
                    font-size: 12px;
                }
            }
        }
    }
    .order-footer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 140px;
        text-align: center;
        background: rgba(51,54,61,1);
        .tips{
            display:flex;
            width: 100%;
            height: 50px;
            box-sizing: border-box;
            padding:0 $basePadding;
            justify-content: space-between;
            align-items: center;
            .refund{
                display:flex;
                i{
                    display:block;
                    width: 13px;
                    height: 13px;
                    margin-left:8px;
                    background: url(../../../assets/imgs/cinema/icons/arrow-t.png) no-repeat center;
                    background-size: cover;
                }
            }
            .pay{
                display:flex;
                font-size:16px;
                align-items: center;
                .order-val{
                    color:#c21313;
                    margin-left:10px;
                    :first-child{
                        font-size: 20px;
                    }
                    .rmb{
                        font-size: 12px;
                    }
                }
                i{
                    display:block;
                    width: 13px;
                    height: 13px;
                    margin-left:8px;
                    background: url(../../../assets/imgs/cinema/icons/arrow-t.png) no-repeat center;
                    background-size: cover;
                }
            }
        }
        .btn{
            width: 335px;
            height: 40px;
            line-height: 40px;
            font-size:18px;
            margin:20px auto;
            background:linear-gradient(150deg,#f25b86,#f1ac5e);
            border-radius:6px;
        }
    }
}
</style>
