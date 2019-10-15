 <template>
	<div class="notification">
		<v-nav>
			<img src="../assets/back.png" @click="$router.back(-1)" />
			<span> Notification</span>
		</v-nav>
		<div class="v_tab_bar">	
			<span @click="tabName='VUnread'">UNREAD</span>
			<span @click="tabName='VParticipate'">PARTICIPANT</span>
			<span @click="tabName='VAll'">ALL</span>
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
				})
			}
		}
	}
</script>

<style scoped lang="less">
</style>