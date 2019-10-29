<template>
	<div>
	<span v-if="flag" class="v-tips">No Issues</span>
	<v-list>
		<v-list-item v-for="event in events" :key="event.id">
			<t-avatar :url="event.user.avatar_url"></t-avatar>
			<div class="v_open_right">
				<t-title :title="event.user.login" :sub="event.created_at|dateFrm" :to="`/User?login=${event.user.login}`"></t-title>
				<t-title :description="event.title || ''"></t-title>
				<div class="t-event-appender">
					<t-icon-bar icon="far fa-tag" :text="event.number" to="/"></t-icon-bar>
					<t-icon-bar icon="far fa-comment" :text="event.comments" to="/"></t-icon-bar>
				</div>
			</div>
		</v-list-item>
	</v-list>
	</div>
</template>

<script>
	import moment from 'moment'
	import VList from '../list/VList'
	import VListItem from '../list/VListItem'
	import TAvatar from "../temp/TAvatar"
	import TTitle from "../temp/TTitle"
	import TIconBar from "../temp/TIconBar"
	export default{
		name:'VOpen',
		components: {
			VListItem,
			VList,
			TAvatar,
			TTitle,
			TIconBar
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
			}
		}
	}
</script>

<style scoped>
	.v_list_item{
		display: flex;
	}
	.v_open_right{
		flex-grow: 1;
	}
	.t-event-appender{
		color: #999999;
		font-size: 12px;
		display: flex;
		justify-content: space-between;
	}
</style>