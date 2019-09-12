<template>
	<div class="user">
		<Top :avatar_url="item.avatar_url" :login="item.login" :location="item.location" :created_at="item.created_at"></Top>
		<!--<List :login="item.login" :bio="item.bio" :company="item.company" :blog="item.blog" :followers="item.followers" :following="item.following" :public_repos="item.public_repos" :public_gists="item.public_gists"></List>-->
	</div>	
		
</template>

<script>
	//	import axios from 'axios'
	import Top from '@/components/Top.vue'
//	import List from '@/components/List.vue'
	export default {
		name: 'user',
		components: {
			Top
//			List
		},
		data() {
			return {
				item: {}
			}
		},
		created() {
			//直接取localStorage里面的数据
			const user=localStorage.getItem('LOGIN_USER')
			this.item=JSON.parse(user)
		}
	}
</script>

<style lang="less">

</style>