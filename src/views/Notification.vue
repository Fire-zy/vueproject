<template>
	<div class="notification">
		<v-nav>
			<img src="../assets/back.png" @click="$router.back(-1)" />
			<span> Notification</span>
		</v-nav>
		<div class="demo">
			{{item.message}}
		</div>
		<div class="v_tab_bar">
			<div class="v_title">
				<span @click="tabName='VAvatar'">信息</span>
				<span @click="tabName='VListItem'">活动</span>
				<span @click="tabName='VList'">星标</span>
			</div>
		</div>
		<keep-alive>
				<transition>
					<component :is="tabName"></component>
				</transition>
			</keep-alive>
	</div>
</template>

<script>
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import VAvatar from '../components/simple/VAvatar'
	import VNav from '../components/navbar/VNav'
	export default {
		name: 'Notification',
		components: {
			VAvatar,
			VListItem,
			VList,
			VNav
		},
		data() {
			return {
				item:{},
				tabName: 'VAvatar'
			}
		},
		created(){
			this.getNotifications()
		},
		methods:{
			getNotifications(){
				this.$axios.get("http://api.github.com/repos/octocat/Hello-World/notifications")
				.then(resp=>{
					this.item=resp.data
					console.log()
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.v_title {
		color: #fff;
		padding: 15px 0;
		display: flex;
		justify-content: space-around;
		background-color: #3F51B5;
	}

</style>