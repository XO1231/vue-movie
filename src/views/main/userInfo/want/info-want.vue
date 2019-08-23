<template>
  <div class="info-watched">
    <p class="watched-title">想看的电影</p>
    <ul class="movie-list">
      <li v-for="(item,index) in wantMovieList" :key="index">
        <div class="img-wrapper">
          <img :src="item.img" alt srcset />
        </div>
        <div class="movie-scor">
          <span class="scor-star">
            <start :num="item.scornum"></start>
          </span>
          <p>{{item.scor}}</p>
        </div>
        <div class="movie-info">
          <p class="movie-name">{{item.name}}</p>
          <p class="movie-msg">{{item.info[0]}}</p>
          <p class="movie-msg">{{item.info[1]}}</p>
          <p class="movie-msg">{{item.info[2]}}</p>
        </div>
      </li>
    </ul>
    <div class="height100px"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import start from '@/components/start.vue'
export default {
  name: 'info-watched',

  data () {
    return {
      scor: 1,
    }
  },
  computed: {
    ...mapState({
      wantMovieList: state => state.userinfo.wantMovieList
    })
  },
  components: {
    start
  },

  methods: {}
}
</script>

<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
@import "@/assets/style/common/reset.scss";
@import "~@/assets/icon/iconfont.css";
.info-watched {
  margin-top: 40px;
  .watched-title {
    text-align: start;
    padding-left: $basePadding;
    box-sizing: border-box;
    font-size: 18px;
  }
  .movie-list {
    padding-bottom: 100px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 $basePadding;
    li {
      width: 100%;
      height: 120px;
      background-color: #33363d;
      margin-top: 38px;
      position: relative;
      .movie-scor {
        position: absolute;
        width: 100%;
        left: 0;
        top: -20px;
        font-size: 14px;

        p {
          float: left;
          margin-left: 5px;
          font-size: 12px;
        }
        .scor-star {
          float: left;
        }
      }
      .img-wrapper {
        display: block;
        float: left;
        height: 100%;
        width: 94px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .movie-info {
        margin-left: 120px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        .movie-name {
          font-size: 16px;
        }
        .movie-msg {
          font-size: 12px;
          color: rgb(190, 190, 190);
        }
      }
    }
  }
  .height100px {
    height: 100px;
  }
}
</style>
