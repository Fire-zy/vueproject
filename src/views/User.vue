<template>
	<div class="user">
		<Top :avatar_url="item.avatar_url" :login="item.login" :location="item.location" :created_at="item.created_at"></Top>
		<div class="main">
			<ul>
				<li>
					<Name :login="item.login"></Name>
					<Personal :bio="item.bio" :company="item.company" :box_location="item.box_location" :blog="item.blog"></Personal>
					<Subnav :followers="item.followers" :following="item.following" :public_repos="item.public_repos" :public_gists="item.public_gists"></Subnav>
				</li>
			</ul>
		</div>

	</div>
</template>

<script>
	//	import axios from 'axios'
	import Top from '@/components/Top.vue'
	import Name from '@/components/Name.vue'
	import Personal from '@/components/Personal.vue'
	import Subnav from '@/components/Subnav.vue'
	export default {
		name: 'user',
		components: {
			Top,
			Name,
			Personal,
			Subnav
		},
		data() {
			return {
				item: {}
			}
		},
		created() {
			// 直接取localStorage里面的
			const user = localStorage.getItem('LOGIN_USER')
			this.item = JSON.parse(user)

			/*this.$axios.get('/api/users/Fire-zy')
				.then(response => {
					self.item = response.data;
				})*/
		}
	}
</script>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
	}

	.main {
		width: auto;
		list-style: none;
		min-height: 80px;
		overflow: hidden;
		margin: 10px 10px 0 10px;
		box-shadow: 1px 1px 5px 1px #d7d7d7;
	}
</style>