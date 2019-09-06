import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import App from './App.vue'
import axios from 'axios'
// todo 优化这个代码 分开导入
const routes = [{
  path: '/',
  name: 'app',
  component: App,
  children: [{
    path: 'user',
    name: 'user',
    component: () => import('@/views/User.vue')
  },
    {
      path: 'stared',
      name: 'userStared',
      component: () => import('@/views/Star.vue')
    },
    {
      path: 'login',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: 'callback',
      name: 'callback',
      component: () => import('@/views/Callback.vue')
    }
  ]
}]
Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 不在从主页直接跳去登录 用全局的导航，所有页面的访问都必须登录
const WHITE_LIST = ['login', 'callback']
router.beforeEach((to, from, next) => {

  const accessToken = localStorage.getItem('ACCESS_TOKEN')
  if (accessToken) {
    // 如果accessToken存在 取一次用户
    axios.get('/api/user', {
      headers: {
        Authorization: `token ${accessToken}`
      }
    }).then(userResp => {
			localStorage.setItem('LOGIN_USER', JSON.stringify(userResp.data)) // 存储浏览器上面，请自己看localStorage相关知识
      next()
    }).catch(e => {
      // 登录失败 accessToken 失效了 去重新授权
			localStorage.removeItem('ACCESS_TOKEN')
			console.log(e)
      next({ name: 'login' })
    })
  } else { // accessToken 没有,说明没有授权过，直接去登录
    if (WHITE_LIST.includes(to.name)) {
      next()
    } else {
      next({ name: 'login' })
    }
  }

})

export default router