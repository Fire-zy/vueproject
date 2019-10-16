<template>
	<div class="repo animated fadeInLeft">
		<v-nav>
			<img src="../assets/back.png" @click="$router.back(-1)" />
			<span> Repos</span>
		</v-nav>
		<v-list>
			<v-list-item v-for="item in repo" :key="item.id">
				<template v-slot:pic>
					<div class="pic_box">
						<router-link :to="{path:'/User',query:{login:item.owner.login}}">
							<v-avatar :url="item.owner.avatar_url" :radius="30"></v-avatar>
						</router-link>
					</div>
				</template>
				
				<!--<div class="content_box">-->
					
					<template v-slot:header>
						<div class="message_box">
							<router-link :to="{path:'/RepoDetails',query:{login:item.owner.login,name:item.name}}">
								<span class="name">{{item.name}}</span>
							</router-link>	
							<span class="language">{{item.language}}</span>
						</div>					
					</template>

					<template v-slot:main>
						<div class="description_box">
							{{item.description}}
						</div>
					</template>
					
				<template v-slot:footer>
					<div class="data_box">
						<span><img src="../assets/star.png" />{{item.stargazers_count}}</span>
						<span><img src="../assets/forks.png" /> {{item.forks}}</span>
						<span><img src="../assets/user.png" />{{item.owner.login}}</span>
					</div>
				</template>
					
				<!--</div>-->
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import VAvatar from '../components/simple/VAvatar'
	import VNav from '../components/navbar/VNav'
	export default {
		name: 'Repo',
		components: {
			VAvatar,
			VListItem,
			VList,
			VNav
		},
		data() {
			return {
				repo: []
			}
		},
		created() {
			this.getMessage()
		},
		methods: {
			getMessage() {
				this.$axios.get("api/users/" + this.$route.query.login + "/repos")
					.then(resp => {
						this.repo = resp.data
						console.log(resp)
					})
			}
		}
	}
</script>

<style scoped lang="less">
	
/*
	.v_list_item {
		display: flex;
		justify-content: flex-start;
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
	
	.message_box a{
		text-decoration: none;
		width: 90%;
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
	}*/
</style>