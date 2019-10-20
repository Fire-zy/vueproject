<template>
	<div class="activity">
		<v-list>
			<v-list-item v-for="item in activity" :key="item.id">
				<div class="message_box">
					<t-link :to="`/User?login=${item.actor.login}`">
						<t-avatar :url="item.actor.avatar_url"></t-avatar>
					</t-link>
					<t-title :title="item.actor.login" :sub="item.created_at|dateFrm"></t-title>
				</div>
				<div class="push_box">
					<span v-if="item.type==='PushEvent'">Push to master at {{item.repo.name}}</span>					
					<span v-for="items in item.payload.commits" :key="items.id" class="message">{{items.message}}</span>
				</div>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import moment from 'moment'
	import VList from '../list/VList'
	import VListItem from '../list/VListItem'
	import VAvatar from '../simple/VAvatar'
	import TLink from "../temp/TLink"
	import TAvatar from "../temp/TAvatar"
	import TTitle from "../temp/TTitle"
	export default {
		name: 'Activity',
		components: {
			VAvatar,
			VListItem,
			VList,
			TLink,
			TAvatar,
			TTitle
		},
		data() {
			return {
				activity: {}
			}
		},
		props:['login'],
		filters: {
			dateFrm: function(el) {
				return moment(el).format('ll');
			}
		},
		created() {
			this.getActivity()
		},
		methods: {
			getActivity() {
				this.$axios.get("https://api.github.com/users/"+this.login+"/events")
					.then(resp => {
						this.activity = resp.data
					})
			}
		}
	}
</script>

<style scoped lang="less">
	.push_box span {
		display: flex;
		justify-content: flex-start;
	}
	.message_box{
		display: flex;
		margin-left: 6px;
	}
	.login_box{
		width: 65%;
		color: #6495ED;
		margin-left: 10px;
	}
	.date_box {
		color: #8A8A8A;
		font-size: 12px;
	}
	.push_box{
		margin: 5px 0 0 10px;
	}
	.message{
		font-size: 14px;
		color: #8A8A8A;
	}
</style>