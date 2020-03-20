import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import VeLine from 'v-charts/lib/line.common'
import 'element-ui/lib/theme-chalk/index.css'
import './fonts/iconfont.css'

import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(ElementUI)
Vue.component(VeLine.name, VeLine)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
