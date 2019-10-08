<template>
	<div>
		<v-nav>
			<img src="../assets/back.png" @click="$router.back(-1)" />
			<span> Global News</span>
		</v-nav>
		<v-list>
			<v-list-item v-for="item in item" :key="item.id">
				<div class="message_box">
					<router-link :to="{path:'/User',query:{login:item.actor.login}}">
						<v-avatar :url="item.actor.avatar_url" :radius="30"></v-avatar>
					</router-link>
					<span class="login_box">{{item.actor.login}}</span>
					<span class="date_box">{{item.created_at|dateFrm}}</span>
				</div>
				<div class="push_box">
					<span v-if="item.type=='PushEvent'">Push to master at {{item.repo.name}}</span>
					<span v-else-if="item.type=='CreateEvent'">CreateEvent</span>
					<span v-else-if="item.type=='ForkEvent'">ForkEvent</span>
					<span v-else-if="item.type=='DeleteEvent'">DeleteEvent</span>
					<span v-else-if="item.type=='WatchEvent'">WatchEvent</span>
					<span v-else="item.type=='PullRequestEvent'">Opened pull request {{item.repo.name}}</span>
					<span v-for="items in item.payload.commits" :key="items.id" class="message">{{items.message}}</span>
				</div>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import moment from 'moment'
	import VNav from '../components/navbar/VNav'
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import VAvatar from '../components/simple/VAvatar'
	export default {
		name: 'Event',
		components: {
			VNav,
			VAvatar,
			VListItem,
			VList
		},
		data() {
			return {
				item: []
			}
		},
		filters: {
			dateFrm: function(el) {
//				return moment(el).format('ll');
				return moment(el).startOf('hour').fromNow();
			}
		},
		created() {
			this.getEvent()
		},
		methods: {
			getEvent() {
				this.$axios.get("api/events")
					.then(resp => {
						this.item = resp.data
						console.log(resp)
					})
			}
		}
	}
</script>

<style>
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
		width: 64%;
		color: #6495ED;
		margin-left: 10px;
	}
	.date_box {
		color: #8A8A8A;
		font-size: 12px;
	}
	.push_box{
		margin: 5px 0 0 10px;
		word-wrap: break-all;
	}
	.message{
		font-size: 14px;
		color: #8A8A8A;
	}
</style>