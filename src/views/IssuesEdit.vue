<template>
	<div class="issueedit">
		<div class="issues_nav_message">
			<t-icon-bar>
				<span>CLOSED</span>
				<i class="fas fa-ellipsis-v"></i>
			</t-icon-bar>
			<div>
				<t-avatar v-if="edit.actor" :url="edit.issue.user.avatar_url" :radius="100"></t-avatar>
				<get-list-item></get-list-item>
			</div>
		</div>

		<div class="issues_item_message">
			<!--<t-avtar :url=""></t-avtar>-->
			<get-list-item></get-list-item>
		</div>
		<v-list>
			<v-list-item>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import GetListItem from '../components/list/GetListItem'
	import TAvatar from "../components/temp/TAvatar";
	import VNav from '../components/navbar/VNav'
	import TLink from '../components/temp/TLink'
	import TIconBar from "../components/temp/TIconBar"
	export default {
		name: 'VIssuesEdit',
		components: {
			TAvatar,
			VListItem,
			VList,
			VNav,
			TLink,
			GetListItem,
			TIconBar
		},
		data() {
			return {
				edit:{}
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
.t_avatar{
	background-color: pink;
	width: 33%;
	display: flex;
	margin-top: 10px;
	justify-content: center;
}
</style>