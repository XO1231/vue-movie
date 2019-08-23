import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/index.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/home',
        name: 'home',
        component: Home,
        meta: {
            footerShow: true
        }
    },
    {
        path: '/home/city', // 为了从逻辑上划分 当前组件页面的 关系 但是由于希望使用全局的router-view 所以必须是一级路由
        name: 'city',
        component: () =>
            import( /* webpackChunkName: "city" */ '../views/home/city/index.vue')
    },
    {
        path: '/home/sign', // 为了从逻辑上划分 当前组件页面的 关系 但是由于希望使用全局的router-view 所以必须是一级路由
        name: 'sign',
        component: () =>
            import( /* webpackChunkName: "city" */ '../views/home/sign/index.vue')
    },
    {
        path: '/movie',
        redirect: '/movie/hot',
        name: 'movie',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import( /* webpackChunkName: "movie" */ '../views/movie/index.vue'),
        meta: {
            footerShow: true
        },
        children: [{
            path: 'hot',
            name: "hot",
            component: () =>
                import( /* webpackChunkName: "movie" */ '../views/movie/hot/index.vue'),
            meta: {
                footerShow: true
            }
        },
        {
            path: 'soon',
            name: "soon",
            component: () =>
                import( /* webpackChunkName: "movie" */ '../views/movie/soon/index.vue'),
            meta: {
                footerShow: true
            }
        }
        ]
    },
    {
        path: '/movie/hot/info/:id',
        name: "info",
        component: () =>
            import( /* webpackChunkName: "movie" */ '../views/movie/info/index.vue'),
    },
    {
        path: '/movie/score',
        name: 'score',
        component: () =>
            import( /* webpackChunkName: "score" */ '../views/movie/score/index.vue'),

    },
    {
        path: '/movie/performer',
        name: 'performer',
        component: () =>
            import( /* webpackChunkName: "performer" */ '../views/movie/performer/index.vue'),

    },
    {
        path: '/movie/boxOffice',
        name: 'boxOffice',
        component: () =>
            import( /* webpackChunkName: "boxOffice" */ '../views/movie/boxOffice/index.vue'),

    },
    {
        path: '/ticket',
        name: 'ticket',
        component: () =>
            import( /* webpackChunkName: "ticket" */ '../views/ticket/index.vue'),
        meta: {
            footerShow: true
        }
    },

    {
        path: '/cinema',
        name: 'cinema',
        component: () =>
            import( /* webpackChunkName: "cinema" */ '../views/cinema/index.vue'),
        meta: {
            footerShow: true
        }
    },
    {
        path: '/main',
        name: 'main',
        component: () =>
            import( /* webpackChunkName: "main" */ '../views/main/index.vue'),
        meta: {
            footerShow: true
        }
    },
    {
        path: '/main/orders',
        name: 'orders',
        component: () =>
            import( /* webpackChunkName: "orders" */ '../views/main/orders/index.vue'),
    },
    {
        path: '/main/orders/ticketDetail',
        name: 'ticketDetail',
        component: () =>
            import( /* webpackChunkName: "ticketDetail" */ '../views/main/orders/ticketDetail/index.vue'),
    },
    {
        path: '/main/userInfo',
        name: 'info',
        redirect: '/main/userInfo/want',
        component: () =>
            import( /* webpackChunkName: "info" */ '../views/main/userInfo/userInfo.vue'),
        children: [{
            path: '/main/userInfo/want',
            name: 'info-want',
            component: () =>
                import( /* webpackChunkName: "info-want" */ '../views/main/userInfo/want/info-want.vue'),
        },
        {
            path: '/main/userInfo/watched',
            name: 'info-watched',
            component: () =>
                import( /* webpackChunkName: "info-watched" */ '../views/main/userInfo/watched/info-watched.vue'),
        }
        ]
    },
    {
        path: '/main/userInfo/coupon',
        name: 'coupon',
        component: () =>
            import( /* webpackChunkName: "info-coupon" */ '../views/main/userInfo/coupon')
    },
    {
        path: '/main/userInfo/cinemaCard',
        name: 'cinemaCard',
        component: () =>
            import( /* webpackChunkName: "info-cinemaCard" */ '../views/main/userInfo/cinemaCard')
    },
    {
        path: '/main/setting',
        name: 'setting',
        component: () =>
            import( /* webpackChunkName: "setting" */ '../views/main/setting/setting.vue'),
    },
    {
        path: '/purch',
        name: 'purch',
        component: () =>
            import( /* webpackChunkName: "purch" */ '../views/purch/purch.vue'),
    },
    {
        path: '/main/message',
        name: 'message',
        component: () =>
            import( /* webpackChunkName: "main" */ '../views/main/message')
    },
    {
        path: '/main/message/:name',
        name: 'inform',
        component: () =>
            import( /* webpackChunkName: "main-message" */ '../views/main/message/inform.vue')
    },
    {
        path: '/cinema/cinemaDetail',
        name: 'cinemaDetail',
        component: () =>
            import( /* webpackChunkName: "cinemaDetail" */ '../views/cinema/cinemaDetail/index.vue'),
        meta: {
            footerShow: false
        }
    },
    {
        path: '/cinema/seat',
        name: 'seat',
        component: () =>
            import( /* webpackChunkName: "seat" */ '../views/cinema/seat/index.vue'),
        meta: {
            footerShow: false
        }
    },
    {
        path: '/cinema/order',
        name: 'order',
        component: () =>
            import( /* webpackChunkName: "order" */ '../views/cinema/order/index.vue'),
        meta: {
            footerShow: false
        }
    },
    {
        path: '/cinema/address',
        name: 'address',
        component: () =>
            import( /* webpackChunkName: "address" */ '../views/cinema/address/index.vue'),
        meta: {
            footerShow: false
        }
    },

    {
        path: '*', // 除了已经被配置过的路由 其余全部重定向到 /home
        redirect: '/home'
    }
    ],
})