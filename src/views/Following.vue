<template>
	<div class="following">
		<t-app-bar icon="fas fa-arrow-left" text="Following"></t-app-bar>
		<v-list>
			<v-list-item v-for="item in following" :key="item.id">
				<t-link :to="{path:'/User',query:{login:item.login}}">
					<v-avatar :url="item.avatar_url" :radius="30"></v-avatar>
				</t-link>
				<span>{{item.login}}</span>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import VAvatar from '../components/simple/VAvatar'
	import TLink from '../components/temp/TLink'
	import TAppBar from "../components/temp/TAppBar"
	export default {
		name: 'Following',
		components: {
			VAvatar,
			VListItem,
			VList,
			TLink,
			TAppBar
		},
		data() {
			return {
				following: []
			}
		},
		created() {
			this.getMessage()
		},
		methods: {
			getMessage() {
				this.$axios.get("api/users/" + this.$route.query.login + "/following")
					.then(resp => {
						this.following = resp.data
						console.log(resp)
					})
			}
		}

	}
</script>

<style scoped lang="less">
	.v_list_item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.v_list_item span {
		display: block;
		width: 80px;
		height: 15px;
		margin-left: 5px;
	}
</style>
