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
				<span @click="tabName='VUnread'">UNREAD</span>
				<span @click="tabName='VParticipate'">PARTICIPANT</span>
				<span @click="tabName='VAll'">ALL</span>
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
	import VAll from '../components/notifications/VAll'
	import VParticipate from '../components/notifications/VParticipate'
	import VUnread from '../components/notifications/VUnread'
	import VNav from '../components/navbar/VNav'
	export default {
		name: 'Notification',
		components: {
			VUnread,
			VParticipate,
			VAll,
			VNav
		},
		data() {
			return {
				item:{},
				tabName: 'VUnread'
			}
		},
		created(){
			this.getNotifications()
		},
		methods:{
			getNotifications(){		
				this.$axios.get("/api/notifications",{
					headers: {
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
				.then(resp=>{
					this.notification=resp.data
//					console.log(resp)
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