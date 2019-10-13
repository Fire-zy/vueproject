<template>
	<div>
	<span v-if="flag" class="v-tips">No Notifications</span>
	<v-list>
		<v-list-item v-for="item in participate" :key="item.id">
			<span v-if="item==false">there is nothing</span>
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
		name:'VParticipate',
		components: {
//			VAvatar,
			VListItem,
			VList
		},
		data(){
			return{
				participate:{},
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
			this.getParticipate()
		},
		methods: {
			getParticipate() {
				this.$axios.get("/api/notifications?participating",{
					headers: {
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
					.then(resp => {
						if(resp.data.length!=0){
							this.participate = resp.data
						}else{
							this.flag=true
						}					
					})
			}
		}
	}
</script>

<style>
</style>