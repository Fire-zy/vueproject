<template>
	<div class="activity">
		<v-list>
			<v-list-item v-for="item in activity" :key="item.id">
				<div class="message_box">
					<t-link :to="`/User?login=${item.actor.login}`">
						<t-avatar :url="item.actor.avatar_url"></t-avatar>
					</t-link>
					<t-title :title="item.actor.login" :sub="item.created_at|dateFrm"  :to="`/User?login=${item.actor.login}`"></t-title>
				</div>
				<div class="push_box" v-if="item.type">
					<span v-if="item.type==='PushEvent'">Push to master at {{item.repo.name}}</span>
					<span v-else-if="item.type==='CreateEvent'">CreateEvent</span>
					<span v-else-if="item.type==='ForkEvent'">ForkEvent</span>
					<span v-else-if="item.type==='DeleteEvent'">DeleteEvent</span>
					<span v-else-if="item.type==='WatchEvent'">WatchEvent</span>
					<span v-else-if="item.type==='PullRequestEvent'">Opened pull request {{item.repo.name}}</span>
				</div>
				<span class="message" v-for="items in item.payload.commits" :key="items.id" >{{items.message}}</span>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import moment from 'moment'
	import VList from '../list/VList'
	import VListItem from '../list/VListItem'
	import TLink from "../temp/TLink"
	import TAvatar from "../temp/TAvatar"
	import TTitle from "../temp/TTitle"
	export default {
		name: 'Activity',
		components: {
			VListItem,
			VList,
			TLink,
			TAvatar,
			TTitle
		},
		data() {
			return {
				activity: {},
//				parameter:{}
			}
		},
		props:['parentlogin','userlogin','repologin'],
		filters: {
			dateFrm: function(el) {
				return moment(el).format('ll');
			}
		},
		created() {
			if(this.parentlogin){	//如果有RepoDetails组件传过来的parentlogin，就调用getParent()
				this.getParent()
			}else if(this.repologin){		//如果有RepoDetails组件传过来的repologin，就调用getRepo()
				this.getRepo()
			}else if(this.userlogin){		//如果有User组件传过来的userlogin，就调用getUser()
				this.getUser()
			}else{
				this.getEvents()		//如果没有任何参数传过来，就
			}
		},
		methods: {
			async getParent(){
				const resp=await this.$axios.get(`api/users/${this.parentlogin}/events`)
				this.activity = resp.data
			},
			async getRepo(){
				const resp=await this.$axios.get(`api/users/${this.repologin}/events`)
				this.activity = resp.data
			},
			async getUser(){
				const resp=await this.$axios.get(`api/users/${this.userlogin}/events`)
				this.activity = resp.data
			},
			async getEvents(){
				const resp=await this.$axios.get(`api/events`)
				this.activity = resp.data
			},
		}
	}
</script>

<style scoped lang="less">
	.v_list_item{
		display: flex;
		flex-direction: column;
	}
	.message_box{
		display: flex;
		width: 100%;
	}
	.t-title{
		display: flex;
		width: 100%;
		padding: 3px;
		justify-content: space-between;
	}
	.push_box{
		margin: 5px;
	}
	.message{
		margin: 5px;
		font-size: 15px;
		color: #808080;
	}
</style>