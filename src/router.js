import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import App from './App.vue'
import axios from 'axios'
Vue.use(Router)
//代码优化,分开导入
const routes = [{
	path: '/',
	name: 'app',
	redirect:'/user',
	component: App,
	children: [{
			path: 'user',
			name: 'user',
			component: () =>
				import('@/views/User.vue')
		},
		{
			path: 'stared',
			name: 'userStared',
			component: () =>
				import('@/views/Star.vue')
		},
		{
			path: 'login',
			name: 'login',
			component: () =>
				import('@/views/Login.vue')
		},
		{
			path: 'callback',
			name: 'callback',
			component: () =>
				import('@/views/Callback.vue')
		}
	]
}]


const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

// 不在从主页直接跳去登录 用全局的导航，所有页面的访问都必须登录
const WHITE_LIST = ['login', 'callback']
router.beforeEach((to, from, next) => {
	const accessToken = localStorage.getItem('ACCESS_TOKEN')
	if(accessToken) {
		//如果accessToken存在就取用户
		axios.get('/api/user', {
			headers: {
				Authorization: `token ${accessToken}`
			}
		}).then(userResp => {
			localStorage.setItem('LOGIN_USER', JSON.stringify(userResp.data))
			next()
		}).catch(e => {
			//如果授权码失效，去登陆
			localStorage.removeItem('ACCESS_TOKEN')
			console.log(e)
		})
	} else {
		//没有授权过，去登陆
		if(WHITE_LIST.includes(to.name)) {
			next()
		} else {
			next({
				name: 'login'
			})
		}
	}
})

export default router