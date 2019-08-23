<template>
  <div class="seat-main">
    <div class="nav">
      <img
        class="back"
        @click="$router.go(-1)"
        src="../../../assets/imgs/cinema/icons/arrow-l.png"
        alt
      />
      <p>耀莱成龙影城 (建业店)</p>
      <img class="share" src="../../../assets/imgs/cinema/icons/share.png" alt />
    </div>
    <div class="title-wrapper">
      <p class="title">后来的我们</p>
      <span class="time">15:30—17:14</span>
      <span class="kind">原版3D</span>
    </div>
    <div class="checkbox">
      <div class="can">
        <span></span>可选
      </div>
      <div class="cannot">
        <span></span>不可选
      </div>
      <div class="checked">
        <span></span>已选
      </div>
    </div>
    <div class="session">
      <span>3号激光厅银幕</span>
    </div>
    <div class="seat-area">
      <div class="seat-slide">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
      </div>
      <div class="inner-seat-wrapper" ref="innerSeatWrapper">
        <div class="row" v-for="row in seatRow" :key="row">
          <!--这里的v-if很重要，如果没有则会导致报错，因为seatArray初始状态为空-->
          <div
            v-for="col in seatCol"
            v-if="seatArray.length > 0"
            class="seat"
            :style="{width:24+'px',height:24+'px'}"
            :key="col"
          >
            <div
              class="inner-seat"
              @click="handleChooseSeat(row-1,col-1)"
              v-if="seatArray[row-1][col-1]!==-1"
              :class="seatArray[row-1][col-1]===2?'bought-seat':(seatArray[row-1][col-1]===1?'selected-seat':'unselected-seat')"
            ></div>
          </div>
        </div>
        <div class="btn-wrapper">
          <!-- <div class="btn-buy" @click="buySeat">
                    选定座位
          </div>-->
          <!-- <div class="btn-buy" @click="resetSeat">
                    重置座位
          </div>-->
          <!--智能选择-->
          <div class="inner-wrapper">
            <span>推荐选座</span>
            <template v-for="(item,index) in smartChooseMaxNum">
              <div class="btn-buy smart" @click="smartChoose(index+1)" :key="index">{{index+1}}人</div>
            </template>
          </div>
          <div class="btn" :style="{'opacity':(isChoose?0.4391:1)}">
            <div v-if="isChoose">请先选座</div>
            <div v-else @click="makeSure">确认</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "Seat",
  components: {},
  data() {
    return {
      //电影名
      fileName: "后来的我们",
      //电影院名
      cinemaName: "耀莱成龙影城(建业店)",
      //种类
      kind: "原版2D",
      //时间
      time: "15:30",
      //场次
      session: "3号激光厅银幕",
      //票价
      price: 33,
      //影院座位的二维数组,-1为非座位，0为未购座位，1为已选座位,2为已购座位
      seatArray: [],
      //影院座位行数
      seatRow: 9,
      //影院座位列数
      seatCol: 12,
      //座位尺寸
      seatSize: "",
      //推荐选座最大数量
      smartChooseMaxNum: 4,
      //是否选了座位
      flag: false,
      //传给后台的座位(坐标)
      selectedSeat: []
    };
  },
  computed: {
    isChoose() {
      //根据用户是否选择, 展示不同内容
      /* 
                    原理: 声明一个临时变量为false,对数组进行循环,只有有一个是1就将临时变量改为true,循环完成后,判断该临时变量状态,如果为true,说明里面有1,另false为true,否则为true
                    => 不能在循环中判断choose,否则会一直改为false
                */
      var temp = false;
      for (var i = 0; i < this.seatArray.length; i++) {
        // 只要找到一个数字为1,即已经选了座位
        if (this.seatArray[i].some(item => item == 1)) {
          temp = true;
        }
      }
      if (temp) {
        this.flag = true;
      } else {
        this.flag = false;
      }

      if (this.flag) {
        //控制确认和请先选座的 消失的 显示
        return false;
      } else {
        return true;
      }
    }
  },
  methods: {
    //向前后某个方向进行搜索的函数,参数是起始行，终止行,推荐座位个数
    searchSeatByDirection: function(fromRow, toRow, num) {
      /*
       * 推荐座位规则
       * (1)初始状态从座位行数的一半处的后一排的中间开始向左右分别搜索，取离中间最近的，如果满足条件，
       *    记录下该结果离座位中轴线的距离，后排搜索完成后取距离最小的那个结果座位最终结果，优先向后排进行搜索，
       *    后排都没有才往前排搜，前排逻辑同上
       *
       * (2)只考虑并排且连续的座位，不能不在一排或者一排中间有分隔
       *
       * */

      /*
       * 保存当前方向搜索结果的数组,元素是对象,result是结果数组，offset代表与中轴线的偏移距离
       * {
       *   result:Array([x,y])
       *   offset:Number
       * }
       *
       */
      let currentDirectionSearchResult = [];

      let largeRow = fromRow > toRow ? fromRow : toRow,
        smallRow = fromRow > toRow ? toRow : fromRow;

      for (let i = smallRow; i <= largeRow; i++) {
        //每一排的搜索,找出该排里中轴线最近的一组座位
        let tempRowResult = [],
          minDistanceToMidLine = Infinity;
        for (let j = 0; j <= this.seatCol - num; j++) {
          //如果有合法位置
          if (this.checkRowSeatContinusAndEmpty(i, j, j + num - 1)) {
            //计算该组位置距离中轴线的距离:该组位置的中间位置到中轴线的距离
            let resultMidPos = parseInt(j + num / 2, 10);
            let distance = Math.abs(parseInt(this.seatCol / 2) - resultMidPos);
            //如果距离较短则更新
            if (distance < minDistanceToMidLine) {
              minDistanceToMidLine = distance;
              //该行的最终结果
              tempRowResult = this.generateRowResult(i, j, j + num - 1);
            }
          }
        }
        //保存该行的最终结果
        currentDirectionSearchResult.push({
          result: tempRowResult,
          offset: minDistanceToMidLine
        });
      }

      //处理后排的搜索结果:找到距离中轴线最短的一个
      //注意这里的逻辑需要区分前后排，对于后排是从前往后，前排则是从后往前找
      let isBackDir = fromRow < toRow;
      let finalReuslt = [],
        minDistanceToMid = Infinity;
      if (isBackDir) {
        //后排情况,从前往后
        currentDirectionSearchResult.forEach(item => {
          if (item.offset < minDistanceToMid) {
            finalReuslt = item.result;
            minDistanceToMid = item.offset;
          }
        });
      } else {
        //前排情况，从后往前找
        currentDirectionSearchResult.reverse().forEach(item => {
          if (item.offset < minDistanceToMid) {
            finalReuslt = item.result;
            minDistanceToMid = item.offset;
          }
        });
      }

      //直接返回结果
      return finalReuslt;
    },

    //推荐选座,参数是推荐座位数目
    smartChoose: function(num) {
      //找到影院座位水平垂直中间位置的后一排
      let rowStart = parseInt((this.seatRow - 1) / 2, 10) + 1;
      //先从中间排往后排搜索
      let backResult = this.searchSeatByDirection(
        rowStart,
        this.seatRow - 1,
        num
      );
      if (backResult.length > 0) {
        this.chooseSeat(backResult);
        return;
      }
      //再从中间排往前排搜索
      let forwardResult = this.searchSeatByDirection(rowStart - 1, 0, num);
      if (forwardResult.length > 0) {
        this.chooseSeat(forwardResult);
        return;
      }
      //提示用户无合法位置可选
      alert("无合法位置可选!");
    },

    /*辅助函数，判断每一行座位从i列到j列是否全部空余且连续
     *
     */
    checkRowSeatContinusAndEmpty: function(rowNum, startPos, endPos) {
      let isValid = true;
      for (let i = startPos; i <= endPos; i++) {
        if (this.seatArray[rowNum][i] !== 0) {
          isValid = false;
          break;
        }
      }
      return isValid;
    },
    //辅助函数：返回每一行的某个合理位置的座位数组
    generateRowResult: function(row, startPos, endPos) {
      let result = [];
      for (let i = startPos; i <= endPos; i++) {
        result.push([row, i]);
      }
      return result;
    },
    //辅助函数:智能推荐的选座操作
    chooseSeat: function(result) {
      let oldArray = this.seatArray.slice();
      for (let i = 0; i < result.length; i++) {
        //选定座位
        oldArray[result[i][0]][result[i][1]] = 1;
      }
      this.seatArray = oldArray;
    },

    //重置座位
    resetSeat: function() {
      //将所有座位的值变为0
      let oldArray = this.seatArray.slice();
      for (let i = 0; i < this.seatRow; i++) {
        for (let j = 0; j < this.seatCol; j++) {
          if (oldArray[i][j] !== -1) {
            oldArray[i][j] = 0;
          }
        }
      }
      this.seatArray = oldArray;
    },
    //选定且购买座位
    buySeat: function() {
      //遍历seatArray，将值为1的座位变为2
      let oldArray = this.seatArray.slice();
      for (let i = 0; i < this.seatRow; i++) {
        for (let j = 0; j < this.seatCol; j++) {
          if (oldArray[i][j] === 1) {
            oldArray[i][j] = 2;
          }
        }
      }
      this.seatArray = oldArray;
    },
    //处理座位选择逻辑
    handleChooseSeat: function(row, col) {
      let seatValue = this.seatArray[row][col];
      let newArray = this.seatArray;
      //如果是已购座位，直接返回
      if (seatValue === 2) return;
      //如果是已选座位点击后变未选
      if (seatValue === 1) {
        newArray[row][col] = 0;
      } else if (seatValue === 0) {
        newArray[row][col] = 1;
      }
      //必须整体更新二维数组，Vue无法检测到数组某一项更新,必须slice复制一个数组才行
      this.seatArray = newArray.slice();
    },
    //初始座位数组
    initSeatArray: function() {
      let seatArray = Array(this.seatRow)
        .fill(0)
        .map(() => Array(this.seatCol).fill(0));
      this.seatArray = seatArray;
      this.seatSize = this.$refs.innerSeatWrapper
        ? parseInt(
            parseInt(
              window.getComputedStyle(this.$refs.innerSeatWrapper).width,
              10
            ) / this.seatCol,
            10
          )
        : 0;
      //初始化不是座位的地方
      this.initNonSeatPlace();
    },
    //初始化座位
    initNonSeatPlace: function() {
      //不是座位的地方
      this.seatArray[0][0] = -1;
      this.seatArray[0][1] = -1;
      this.seatArray[1][0] = -1;
      this.seatArray[0][this.seatArray[0].length - 1] = -1;
      this.seatArray[0][this.seatArray[0].length - 2] = -1;
      this.seatArray[1][this.seatArray[0].length - 1] = -1;

      //不可选的地方
      this.seatArray[4][5] = 2;
      this.seatArray[4][6] = 2;

      // for(let i=0;i<9;i++){
      //     this.seatArray[i][0]=-1;
      // }
      // for(let i=0;i<8;i++){
      // this.seatArray[i][this.seatArray[0].length-1]=-1;
      // this.seatArray[i][this.seatArray[0].length-2]=-1;
      // }
      // for(let i=0;i<9;i++){
      // this.seatArray[i][this.seatArray[0].length-3]=-1;
      // }
      // for(let i=0;i<this.seatArray[0].length;i++){
      //     this.seatArray[2][i]=-1;
      // }
    },
    makeSure: function() {
      //遍历seatArray，将值为1的座位挑出来
      // 获取完 使用编程式导航
      let oldArray = this.seatArray.slice();
      for (let i = 0; i < this.seatRow; i++) {
        for (let j = 0; j < this.seatCol; j++) {
          if (oldArray[i][j] === 1) {
            //将第几排 第几列 提交
            // 第一个值为排 第二值为列
            if (i == 0) {
              //第一排
              var isExit = this.selectedSeat.find(
                item => item.row == i + 1 && item.col == j - 2 + 1
              );
              if (!isExit) {
                this.selectedSeat.push({ row: i + 1, col: j - 2 + 1 });
              }
            } else if (i == 1) {
              //第二排
              var isExit = this.selectedSeat.find(
                item => item.row == i + 1 && item.col == j - 1 + 1
              );
              if (!isExit) {
                this.selectedSeat.push({ row: i + 1, col: j - 1 + 1 });
              }
            } else {
              // 其他排
              var isExit = this.selectedSeat.find(
                item => item.row == i + 1 && item.col == j + 1
              );
              if (!isExit) {
                this.selectedSeat.push({ row: i + 1, col: j + 1 });
              }
            }
          }
        }
      }
      this.$router.push({
        name: "order",
        params: {
          info: this.selectedSeat,
          fileName: this.fileName,
          cinemaName: this.cinemaName,
          kind: this.kind,
          time: this.time,
          session: this.session,
          price: this.price
        }
      });
    },
    test() {
      this.selectedSeat.push({ row: 1, col: 1 });
    }
  },

  mounted: function() {
    this.initSeatArray(9, 12);
  },
  updated() {}
};
</script>
 
<style lang='scss' scoped>
@import "@/assets/style/common/common.scss";
.seat-main {
  width: 100%;
  height: 100%;
  background: #23262d url(../../../assets/imgs/cinema/seat_bg.png) no-repeat top;
  background-size: 100% 30%;
  overflow: hidden;
  .nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: $baseNavHeight;
    z-index: 99;
    display: flex;
    background: transparent;
    padding: 0 $basePadding;
    font-size: 16px;
    line-height: 40px;
    color: rgba(255, 255, 255, 1);
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 10px;
    img {
      width: 22px;
      height: 22px;
    }
    .back {
      left: $basePadding;
    }
    .share {
      right: $basePadding;
    }
  }
  .title-wrapper {
    height: 60px;
    padding: 0 $basePadding;
    box-sizing: border-box;
    margin-top: 50px;
    .title {
      font-size: 16px;
      text-align: left;
      margin-bottom: 10px;
    }
    .time {
      float: left;
      width: 100px;
      height: 24px;
      line-height: 24px;
      display: block;
      font-size: 14px;
      border-radius: 5px;
      background-color: #33363d;
      opacity: 0.7293999999999999;
    }
    .kind {
      float: left;
      width: 60px;
      height: 24px;
      line-height: 24px;
      display: block;
      font-size: 14px;
      border-radius: 5px;
      margin-left: 10px;
      opacity: 0.7293999999999999;
      border: 1px solid rgba(51, 54, 61, 1);
    }
  }
  .checkbox {
    display: flex;
    font-size: 14px;
    height: 40px;
    justify-content: space-between;
    align-items: center;
    color: #efb8bb;
    padding: 15px $basePadding;
    box-sizing: border-box;
    line-height: 40px;
    text-indent: 1em;
    div {
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        width: 26px;
        height: 26px;
        border-radius: 6px;
        box-shadow: 0px 2px 4px 0px rgba(76, 41, 49, 0.54);
      }
    }
    .can {
      span {
        background-color: #909294;
      }
    }
    .cannot {
      span {
        background-color: #f9c34a;
      }
    }
    .checked {
      span {
        background-color: #6548a9;
      }
    }
  }
  .session {
    position: relative;
    margin: 30px auto 0;
    width: 140px;
    border-top: 20px solid #33363d;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    span {
      width: 100%;
      position: absolute;
      margin-left: -70px;
      margin-top: -16px;
    }
  }
  .seat-area {
    position: relative;
    width: 100%;
    height: 312px;
    color: #fff;
    .seat-slide {
      position: absolute;
      left: 0;
      text-align: left;
      display: inline-block;
      width: 20px;
      height: 312px;
      box-sizing: border-box;
      background: rgba(51, 54, 61, 1);
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.35);
      border-radius: 12px;
      opacity: 0.6233;
      padding: 30px 0;
      line-height: 25px;
      text-align: center;
      margin-left: 10px;
      span {
        display: block;
        width: 100%;
        height: 25px;
        &:nth-child(3n + 1) {
          margin-top: 10px;
        }
        &:first-child {
          margin-top: 0px;
        }
      }
    }
    .inner-seat-wrapper {
      height: 100%;
      // width: 355px;
      box-sizing: border-box;
      padding: 30px 0 30px 50px;
      .row {
        width: 100%;
        height: 24px;
        &:nth-child(3n + 1) {
          margin-top: 12px;
        }
        &:nth-child(1) {
          margin-top: 0px;
        }
        .seat {
          width: 24px;
          height: 24px;
          float: left;
          display: flex;
          justify-content: center;
          align-items: center;
          .inner-seat {
            width: 20px;
            height: 20px;
            border-radius: 3px;
            cursor: pointer;
          }
          .selected-seat {
            background: #6548a9;
          }
          .unselected-seat {
            background: #909294;
          }
          .bought-seat {
            background: #f9c34a;
          }
        }
      }
      .btn-wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 140px;
        text-align: center;
        background: rgba(51, 54, 61, 1);
        .inner-wrapper {
          padding: 0 $basePadding;
          box-sizing: border-box;
          line-height: 21px;
          padding-top: 15px;
          span {
            display: inline-block;
            height: 21px;
            font-size: 16px;
          }
          .btn-buy {
            display: inline-block;
            width: 50px;
            height: 21px;
            opacity: 0.529;
            margin-left: 15px;
            border: 1px solid rgba(151, 151, 151, 1);
          }
        }
        .btn {
          width: 335px;
          height: 40px;
          line-height: 40px;
          font-size: 18px;
          margin: 20px auto;
          background: linear-gradient(
            150deg,
            rgba(242, 91, 134, 1) 0%,
            rgba(241, 172, 94, 1) 100%
          );
          box-shadow: 0px 0px 4px 1px rgba(242, 109, 125, 0.18);
          border-radius: 6px;
          opacity: 0.4391;
        }
      }
    }
  }
}
</style>