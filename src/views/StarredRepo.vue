<template>
	<div class="StarredRepo">
		<v-nav>
			<img src="../assets/back.png" @click="$router.back(-1)" />
			<span> StarredRepo</span>
		</v-nav>
		<!--<v-list>
			<v-list-item>
				<router-link :to="{path:'/User',query:{login:item.login}}">
					<v-avatar :url="item.avatar_url" :radius="30"></v-avatar>
				</router-link>
				<span>{{item.login}}</span>
			</v-list-item>
		</v-list>-->
		<div>
			<v-star></v-star>
		</div>
		
	</div>
</template>

<script>
//	import VList from '../components/list/VList'
//	import VListItem from '../components/list/VListItem'
//	import VAvatar from '../components/simple/VAvatar'
	import VNav from '../components/navbar/VNav'
	import VStar from '../components/users/VStar'
	export default{
		name:'StarredRepo',
		components: {
//			VAvatar,
//			VListItem,
//			VList,
			VNav,
			VStar
		},
		data(){
			return{
				item:[]
			}
		},
		created() {
			this.getStarredRepo()
		},
		methods: {
			getStarredRepo() {
				this.$axios.get("api/users/" + this.$route.query.login + "/starred")
					.then(resp => {
						this.item = resp.data
						console.log(resp)
					})
			}
		}
	}
</script>

<style>
</style>