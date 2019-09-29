//入口文件，引入了vue模块和app.vue组件以及路由router，
//我们需要在全局使用的一些东西也可以定义在这里面
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import moment from 'moment'
import animate from 'animate.css'


Vue.use(animate)

Vue.prototype.$moment = moment
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
