<template>
	<div>
	<span v-if="flag" class="v-tips">No Issues</span>
	<v-list>
		<v-list-item v-for="event in events" :key="event.id">
			<t-avatar :url="event.user.avatar_url"></t-avatar>
			<span>{{event.user.login}}</span>
		</v-list-item>
	</v-list>
	</div>
</template>

<script>
	import moment from 'moment'
	import VList from '../list/VList'
	import VListItem from '../list/VListItem'
	import TAvatar from "../temp/TAvatar"
	export default{
		name:'VOpen',
		components: {
//			VAvatar,
			VListItem,
			VList,
			TAvatar
		},
		data(){
			return{
				opening:{},
				flag:false,
				events:[]
			}
		},
		filters: {
			dateFrm: function(el) {
				return moment(el).format('ll');
			}
		},
		created() {
			if(this.$route.query.login){
				this.getIssuesEvents()
			}else{
				this.getVAll()
			}
		},
		methods: {
			getVAll() {
				this.$axios.get("/api/issues",{
					headers: {
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
					.then(resp => {	
						if(resp.data.length!=0){
							this.opening = resp.data	
						}else{
							this.flag=true
						}
					})
			},
			async getIssuesEvents() {
				const resp = await this.$axios.get(`api/repos/${this.$route.query.login}/vueproject/issues`)
				this.events = resp.data
				console.log(resp)
			}
		}
	}
</script>

<style>
</style>