import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import axios from 'axios'
Vue.use(Router)
//代码优化,分开导入
const routes = [{
	path: '/',
	name: 'app',
	component: App,	
	redirect:'/HomePage',
	children: [
		{
			path: 'HomePage',
			name: 'HomePage',
			component: () =>
				import('@/views/HomePage.vue')
		},
		{
			path: 'user',
			name: 'user',
			component: () =>
				import('@/views/User.vue')
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
		},
		{
			path: 'Followers',
			name: 'Followers',
			component: () =>
				import('@/views/Followers.vue')
		},
		{
			path: 'Following',
			name: 'Following',
			component: () =>
				import('@/views/Following.vue')
		},
		{
			path: 'Repo',
			name: 'Repo',
			component: () =>
				import('@/views/Repo.vue')
		},
		{
			path: 'Gists',
			name: 'Gists',
			component: () =>
				import('@/views/Gists.vue')
		},
		{
			path: 'Notification',
			name: 'Notification',
			component: () =>
				import('@/views/Notification.vue')
		},
		{
			path: 'Issues',
			name: 'Issues',
			component: () =>
				import('@/views/Issues.vue')
		},
		{
			path: 'Search',
			name: 'Search',
			component: () =>
				import('@/views/Search.vue')
		},
		{
			path: 'StarredRepo',
			name: 'StarredRepo',
			component: () =>
				import('@/views/StarredRepo.vue')
		},
		{
			path: 'Event',
			name: 'Event',
			component: () =>
				import('@/views/Event.vue')
		},
		{
			path: 'RepoDetails',
			name: 'RepoDetails',
			component: () =>
				import('@/views/RepoDetails.vue')
		},
		{
			path: 'IssuesEdit',
			name: 'IssuesEdit',
			component: () =>
				import('@/views/IssuesEdit.vue')
		},
		{
			path: 'Forks',
			name: 'Forks',
			component: () =>
				import('@/views/Forks.vue')
		},
		{
			path: 'Stargazers',
			name: 'Stargazers',
			component: () =>
			import('@/views/Stargazers.vue')
		},
		{
			path: 'Watchers',
			name: 'Watchers',
			component: () =>
			import('@/views/Watchers.vue')
		}
	]
}]


const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

// 不再从主页直接跳去登录 用全局的导航，所有页面的访问都必须登录
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