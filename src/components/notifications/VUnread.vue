<template>
	<div>
	<span v-if="flag" class="v-tips">No Notifications</span>
	<v-list>
		<v-list-item v-for="item in unread" :key="item.id">
			
		</v-list-item>
	</v-list>
	</div>
</template>

<script>
	import moment from 'moment'
	import VList from '../list/VList'
	import VListItem from '../list/VListItem'
//	import VAvatar from '../simple/VAvatar'
	export default{
		name:'VUread',
		components: {
//			VAvatar,
			VListItem,
			VList
		},
		data(){
			return{
				unread:[],
				flag:false
			}
		},
		props:['login'],
		filters: {
			dateFrm: function(el) {
				return moment(el).format('ll');
			}
		},
		created() {
			this.getUnread()
		},
		methods: {
			getUnread() {
				this.$axios.get("/api/notifications",{
					headers: {
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
					.then(resp => {
						if(resp.data.length!=0){
							this.unread = resp.data
						}else{
							this.flag=true
						}					
						console.log(resp)
					})
			}
		}
	}
</script>

<style>
</style>