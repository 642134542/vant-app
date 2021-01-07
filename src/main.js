import Vue from 'vue'
import App from './App.vue'


import Vant from 'vant';
import { Lazyload } from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible';

import router from "./router";
import store from "./store";

// import './permission'; // permission control

import './less/index.less';
import './less/app.less';
import './less/inverstigate.less';
import './less/homePage.less';
import './less/van.less'

Vue.use(Vant);
Vue.use(Lazyload);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
