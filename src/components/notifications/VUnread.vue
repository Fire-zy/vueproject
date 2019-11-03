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
	export default{
		name:'VUread',
		components: {
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
						if(resp.data.length!=0){		//如果有数据，就存入unread
							this.unread = resp.data
						}else{
							this.flag=true		//如果美誉哦数据，则flag为true,显示No Notifications
						}					
						console.log(resp)
					})
			}
		}
	}
</script>

<style>
</style>