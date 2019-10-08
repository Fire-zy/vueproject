<template>
	<div>
		<v-container>
			<!--<v-app-bar></v-app-bar>-->
			<!--<v-list>
			<v-list-item v-for="item in stared" :key="item.id">
				<v-avatar :url="item.owner.avatar_url" :radius="30"></v-avatar>
			</v-list-item>
		</v-list>-->
			<v-list>
				<v-list-item v-for="item in stared" :key="item.id">
					<div class="pic_box">
						<v-avatar :url="item.owner.avatar_url" :radius="30"></v-avatar>
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
		</v-container>
	</div>

</template>
<script>
	import VContainer from '../components/layout/VContainer'
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import VAvatar from '../components/simple/VAvatar'

	export default {
		name: 'Vstar',
		components: {
			VAvatar,
			VListItem,
			VList,
			VContainer
		},
		data() {
			return {
				stared: []
			}
		},
		props: ['login'],
		created() {
			if(this.$route.query.login) {
				this.getStar()
			} else {
				this.getStared()
			}
		},
		methods: {
			getStared() {
				this.$axios.get('/api/users/' + this.login + '/starred').then(resp => {
					this.stared = resp.data
					console.log(resp)
				})
			},
			getStar() {
				this.$axios.get('/api/users/' + this.$route.query.login + '/starred').then(resp => {
					this.stared = resp.data
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
		font-weight: 550;
		color: black;
		margin: 5px 0 5px 0;
		font-family: "楷体";
	}
</style>