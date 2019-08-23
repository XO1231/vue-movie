import Vue from 'vue'
import Vuex from 'vuex'
import tickets from '@/store/modules/moduleTickets.js'
import userinfo from './modules/userinfo'
import city from './modules/city'
Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    tickets,
    userinfo,
    city
  },
state: {
    orders: [{
        id: 1,
        cinema: "万达国际影城",
        status: 1,
        src: require("@/assets/imgs/orders/all/order-1.png"),
        movieTitle: "后来的我们",
        left: 2,
        date: "05月16日",
        time: "17:00",
        place: "五号厅",
        seatA: "5排14座",
        seatB: "5排15座",
        price: 70
      },
      {
        id: 2,
        cinema: "万达国际影城",
        status: 0,
        src: require("@/assets/imgs/orders/all/order-2.png"),
        movieTitle: "帕丁顿熊",
        left: 1,
        date: "05月17日",
        time: "17:00",
        place: "五号厅",
        seatA: "5排14座",
        seatB: "",
        price: 70
      },
      {
        id: 3,
        cinema: "万达国际影城",
        status: 2,
        src: require("@/assets/imgs/orders/all/order-3.png"),
        movieTitle: "大鱼海棠",
        left: 1,
        date: "05月17日",
        time: "17:00",
        place: "五号厅",
        seatA: "5排14座",
        seatB: "",
        price: 70
      },
      {
        id: 4,
        cinema: "万达国际影城",
        status: 3,
        src: require("@/assets/imgs/orders/all/order-4.png"),
        movieTitle: "星空",
        left: 1,
        date: "05月17日",
        time: "17:00",
        place: "五号厅",
        seatA: "5排14座",
        seatB: "",
        price: 70
      }
    ]
  }
})
