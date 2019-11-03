<template>
	<div class="issueedit"  v-if="edit.issue">
		<!--顶部的各类链接-->
		<div class="issues_nav_message">
			<t-icon-bar>
				<span>CLOSED</span>
				<i class="fas fa-ellipsis-v"></i>
			</t-icon-bar>
			
			<!--详细信息-->
			<div class="issues_message_item" >
				<t-avatar class="message_item_pic" v-if="edit.actor" :url="edit.issue.user.avatar_url" :radius="100"></t-avatar>
				<div class="issues_item_right">
					<div class="issues_message_issuenumber">
						<span>Issue</span>
						<i class="fas fa-edit"></i>
						<span>{{edit.issue.number}}</span>
					</div>
					<div class="issues_message_issuecomment">
						<i class="fas fa-exclamation-circle"></i>
						<span> Closed </span>&nbsp;
						<span> {{edit.issue.comments}} Comments</span>
					</div>
					<div>
						<span>{{edit.issue.title}}</span>
					</div>
				</div>
			</div>
		</div>

		<v-list>
			<v-list-item>
				<t-link :to="`/User?login=${edit.issue.user.login}`">
					<t-avatar :url="edit.issue.user.avatar_url"></t-avatar>
				</t-link>
				<div class="issueedit_list_right">
					<t-title :description="edit.issue.body" :title="edit.issue.user.login" :sub="edit.issue.created_at|dateFrm" :to="`/User?login=${edit.issue.user.login}`"></t-title>
				</div>
			</v-list-item>
			<v-list-item>
				<i class="fas fa-ban"></i>
				<t-avatar :radius="20" :url="edit.actor.login.avatar_url"></t-avatar>
				<span v-if="edit.issue.closed_at">{{edit.actor.login}} closed at {{edit.issue.closed_at|dateFrm}}</span>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import moment from 'moment'	
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import TAvatar from "../components/temp/TAvatar";
	import TLink from '../components/temp/TLink'
	import TIconBar from "../components/temp/TIconBar"
	import TTitle from "../components/temp/TTitle"
	export default {
		name: 'VIssuesEdit',
		components: {
			TAvatar,
			VListItem,
			VList,
			TLink,
			TTitle,
			TIconBar
		},
		data() {
			return {
				edit:{}
			}
		},
		filters: {
			dateFrm: function(el) {
				return moment(el).format('ll');
			}
		},
		created() {
			this.getEdit()
		},
		methods: {
			getEdit() {
				this.$axios.get(`api/repos/${this.$route.query.login}/${this.$route.query.name}/issues/events/${this.$route.query.id}`)
					.then(resp => {
						this.edit = resp.data
						console.log(this.edit)
					})
			}
		}

	}
</script>

<style scoped>
.issues_nav_message{
	height: 180px;
	background-color: #3F51B5;
}
.fas{
	margin-left: 10px;
}
.fa-ban{
	color: red;
	margin-right: 10px;
}
.message_item_pic{
	width: 33%;
	display: flex;
	justify-content: center;
}
.issues_message_item{
	display: flex;
	margin-top: 10px;
	color: #FFFFFF;
}
.issues_message_issuenumber{
	font-size: 22px;
}
.issues_message_issuecomment{
	font-size: 18px;
	margin: 5px 0 5px 0;
}
.fa-exclamation-circle{
	margin-left: 0;
}
.v_list_item{
	display: flex;
}
.issueedit_list_right{
	flex-grow: 1;
}
</style>