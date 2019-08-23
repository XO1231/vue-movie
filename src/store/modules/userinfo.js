const userInfo = {
    namespaced: true,
    state: {
        goodNotice: true,
        evaluateNotice: false,
        sysNotice: true,
        sys2: false,
        searchList:['一条狗的使命','我是药神'],
        cheaperList:[
            {   
                id:1,
                starttime:'18:15',
                endtime:'21:16',
                movie:'哪吒之魔童',
                address:'万达影城6号激光厅',
                money:'40.9元',                
            },
            {   
                id:2,
                starttime:'19:15',
                endtime:'22:16',
                movie:'使徒行者',
                address:'万达影城6号激光厅',
                money:'33.9元',                
            },
            {   
                id:3,
                starttime:'20:15',
                endtime:'23:16',
                movie:'烈火英雄',
                address:'万达影城6号激光厅',
                money:'22.9元',                
            },
            {   
                id:4,
                starttime:'18:15',
                endtime:'00:16',
                movie:'速度与激情:特别',
                address:'万达影城6号激光厅',
                money:'11.9元',                
            },
            {   
                id:5,
                starttime:'18:15',
                endtime:'00:16',
                movie:'随便什么电影',
                address:'万达影城6号激光厅',
                money:'40.9元',                
            },
        ],
        watchedMovieList:[
            {
              name: '后来的我们',
              info: ['剧情', '中国/105分钟', '购票时间2017-8-4'],
              scor: '9分,很好',
              scornum:4.5,
              img: require('@/assets/imgs/main/watched-1.png'),
            },
            {
              name: '帕丁顿熊',
              info: ['动画/奇幻', '美国/105分钟', '购票时间2017-8-4'],
              scor: '8分,一般',
              scornum:4,
              img: require('@/assets/imgs/main/watched-2.png'),
            },
            {
              name: '大鱼海棠',
              info: ['动画/奇幻', '中国/105分钟', '购票时间2017-8-4'],
              scor: '8分,一般',
              scornum:4,
              img: require('@/assets/imgs/main/watched-3.png'),
            },
            {
              name: '星空',
              info: ['剧情', '中国/105分钟', '购票时间2017-8-4'],
              scor: '9分,很好',
              scornum:4.5,
              img: require('@/assets/imgs/main/watched-4.png'),
            },    
          ],
          wantMovieList:[
            {
              name: '哪吒之魔童降世',
              info: ['剧情', '中国/105分钟', '购票时间2019-8-1'],
              scor: '10分,满分',
              scornum:5,
              img: require('@/assets/imgs/main/want-1.webp'),
            },
            {
              name: '使徒行者2：谍影行动',
              info: ['动作', '中国/98分钟', '购票时间2019-8-4'],
              scor: '6.6分,差评',
              scornum:3.3,
              img: require('@/assets/imgs/main/want-2.webp'),
            },
            {
              name: '烈火英雄',
              info: ['剧情', '中国/105分钟', '购票时间2019-7-24'],
              scor: '6.6分,差评',
              scornum:3.3,
              img: require('@/assets/imgs/main/want-3.webp'),
            },
            {
              name: '加油,你是最棒的',
              info: ['剧情', '中国/105分钟', '购票时间2019-7-24'],
              scor: '8分,很好',
              scornum:4,
              img: require('@/assets/imgs/main/want-4.jpg'),
            },
    
          ]
    },
    getters: {

    },
    mutations: {
        cgoodNotice(state) {
            state.goodNotice = !state.goodNotice
        },
        cevaluateNotice(state) {
            state.evaluateNotice = !state.evaluateNotice
        },
        csysNotice(state) {
            state.sysNotice = !state.sysNotice
        },
        csys2(state) {
            state.sys2 = !state.sys2
        },
        clsHistory(state){
            state.searchList = []
        }
    },
    actions: {

    }
}
export default userInfo