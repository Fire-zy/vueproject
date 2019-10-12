<template>
	<div>
	<v-list>
		<v-list-item v-for="item in unread" :key="item.id">
			<span v-if="item==='null'">there is nothing</span>
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
				unread:[]
				
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
						if(JSON.stringify(resp.data)=='{}'){
							this.unread[0]="null"
						}else{
							this.unread = resp.data
						}					
						console.log(resp)
						console.log(this.unread[0])
					})
			}
		}
	}
</script>

<style>
</style>