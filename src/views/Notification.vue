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
				<span @click="tabName='VAvatar'">UNREAD</span>
				<span @click="tabName='VListItem'">PARTICIPANT</span>
				<span @click="tabName='VList'">ALL</span>
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
				notification:{},
				tabName: 'VAvatar'
			}
		},
		created(){
			this.getNotifications()
		},
		methods:{
			getNotifications(){		
//				const accessToken = localStorage.getItem('ACCESS_TOKEN')
				this.$axios.get("/api/notifications",{
					headers: {
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
				.then(resp=>{
					this.notification=resp.data
					console.log(resp)
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