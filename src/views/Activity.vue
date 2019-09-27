<template>
	<div class="activity">
		<v-list>
			<v-list-item v-for="item in item" :key="item.id">
				<div class="message_box">
					<router-link :to="{path:'/User',query:{login:item.login}}"><v-avatar :url="item.actor.avatar_url" :radius="30"></v-avatar></router-link>
					<span class="login_box">{{item.actor.login}}</span>
					<span class="date_box">{{item.created_at|dateFrm}}</span>				
				</div>
				<div class="push_box">
					<span v-if="item.type=='PushEvent'">Push to master at {{item.repo.name}}</span>					
					<span v-for="items in item.payload.commits" :key="items.id" class="message">{{items.message}}</span>
				</div>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import moment from 'moment'
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import VAvatar from '../components/simple/VAvatar'
	export default {
		name: 'Activity',
		components: {
			VAvatar,
			VListItem,
			VList
		},
		data() {
			return {
				item: {}
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
						this.item = resp.data
					})
			}
		}
	}
</script>

<style scoped lang="less">
	* {
		margin: 0;
		padding: 0;
	}

	.push_box span {
		display: flex;
		justify-content: flex-start;
	}
	.message_box{
		display: flex;
		margin-left: 6px;
		align-items: center;
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