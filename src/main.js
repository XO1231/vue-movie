import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

// 初始化 html的font-size
import 'lib-flexible';
// 初始化 css样式
import '@/assets/style/common/reset.scss'
import { Switch } from 'vant';
import 'vant/lib/switch/style';
import 'vant/lib/checkbox/style';
import 'vant/lib/checkbox-group/style';

import { Checkbox, CheckboxGroup } from 'vant';

Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(Switch);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
