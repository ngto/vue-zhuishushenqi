// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'
import mock from './api/mock'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueTouch from 'vue-touch'


Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(Mint);
Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
