 <template>
	<div class="notification">
		<t-app-bar icon="fas fa-arrow-left" text="Notification"></t-app-bar>
		
		<!--tab-->
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
	import TAppBar from "../components/temp/TAppBar"
	export default {
		name: 'Notification',
		components: {
			VUnread,
			VParticipate,
			VAll,
			TAppBar
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