import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import App from './App.vue'
//import axios from 'axios'
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
		path: '/',
		redirect: '/login',
		name: 'app',
		component: App,
		children: [{
				path: 'user',
				name: 'user',
				component: () =>import('@/views/User.vue')
			},
			{
				path: 'stared',
				name: 'userStared',
				component: () =>import('@/views/Star.vue')
			},
			{
				path: 'login',
				name: 'login',
				component: () =>import('@/views/Login.vue')
			},
			{
				path: 'callback',
				name: 'callback',
				component: () =>import('@/views/Callback.vue')
			}
		]
	}]
})