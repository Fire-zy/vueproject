<template>
	<div class="repo animated fadeInLeft">
		<div class="top">
			<img src="../assets/back.png" @click="$router.back(-1)" />
			<div>
				<span>Repo</span>
			</div>
		</div>
		<v-list>
			<v-list-item v-for="item in item" :key="item.id">
				<div class="pic_box">
					<router-link :to="{path:'/User',query:{login:item.login}}"><v-avatar :url="item.owner.avatar_url" :radius="30"></v-avatar></router-link>
				</div>
				<div class="content_box">
					<div class="message_box">
						<span class="name">{{item.name}}</span>
						<span class="language">{{item.language}}</span>
					</div>
					<div class="description_box">
						{{item.description}}
					</div>
					<div class="data_box">
						<span><img src="../assets/star.png" />{{item.stargazers_count}}</span>
						<span><img src="../assets/forks.png" /> {{item.forks}}</span>
						<span><img src="../assets/user.png" />{{item.owner.login}}</span>
					</div>
				</div>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import VAvatar from '../components/simple/VAvatar'
	export default {
		name: 'Repo',
		components: {
			VAvatar,
			VListItem,
			VList
		},
		data() {
			return {
				item: []
			}
		},
		created() {
			this.getMessage()
		},
		methods: {
			getMessage() {
				this.$axios.get("api/users/" + this.$route.query.login + "/repos")
					.then(resp => {
						this.item = resp.data
						console.log(resp)
					})
			}
		}
	}
</script>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}
	
	.top {
		height: 50px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background-color: #3F51B5;
	}
	
	.top img {
		width: 30px;
		height: 30px;
		margin-left: 15px;
	}
	
	.v_list_item {
		display: flex;
		justify-content: flex-start;
	}
	
	.top span {
		color: #FFFFFF;
		font-size: 20px;
	}
	
	.pic_box {
		width: 10%;
	}
	
	.content_box {
		width: 90%;
		display: flex;
		flex-wrap: wrap;
	}
	
	.message_box {
		width: 90%;
		display: flex;
		justify-content: space-between;
	}
	
	.message_box span {
		margin-right: -20px;
	}
	
	.name {
		color: cornflowerblue;
	}
	
	.language {
		font-size: 12px;
		color: gray;
	}
	
	.data_box {
		width: 90%;
		display: flex;
		justify-content: space-between;
	}
	
	.data_box img {
		width: 15px;
		height: 15px;
		margin-right: 3px;
	}
	
	.data_box span {
		color: #8a8a8a;
		font-size: 12px;
		display: flex;
		align-items: center;
	}
	
	.description_box {
		width: 90%;
		font-weight: 600;
		margin: 5px 0 5px 0;
		font-family: "楷体";
	}
</style>