<template>
  <div class="start">
        <i :class="['iconfont',num>0?'icon-star':'icon-star1',Math.ceil(num)-0==1&&(num-0)%1!==0?'icon-star-half':'']"></i>
        <i :class="['iconfont',num>1?'icon-star':'icon-star1',Math.ceil(num)-1==1&&(num-1)%1!==0?'icon-star-half':'']"></i>
        <i :class="['iconfont',num>2?'icon-star':'icon-star1',Math.ceil(num)-2==1&&(num-2)%1!==0?'icon-star-half':'']"></i>
        <i :class="['iconfont',num>3?'icon-star':'icon-star1',Math.ceil(num)-3==1&&(num-3)%1!==0?'icon-star-half':'']"></i>
        <i :class="['iconfont',num>4?'icon-star':'icon-star1',Math.ceil(num)-4==1&&(num-4)%1!==0?'icon-star-half':'']"></i>
  </div>
</template>

<script>
export default {
  name: 'start',

  data () {
    return {

    }
  },
  props:{
      num:Number/*num:0-5,10的话/2*/
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
@import "~@/assets/icon/iconfont.css";
.icon-star,
.icon-star1,
.icon-star-half{
  color: gold;
}
</style>
