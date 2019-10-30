<template>
	<div class="issueedit">
		<v-nav>
			<div class="icon">
				<i class="fas fa-less-than" @click="$router.back(-1)"></i>
				<div class="icon_right">
					<span>CLOSED</span>
					<i class="fas fa-ellipsis-v"></i>
				</div>
			</div>
		</v-nav>
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
	export default {
		name: 'VIssuesEdit',
		components: {
			TAvatar,
			VListItem,
			VList,
			VNav,
			TLink,
			GetListItem
		},
		data() {
			return {
//				following: []
			}
		},
		created() {
//			this.getMessage()
		},
		methods: {
			getMessage() {
				this.$axios.get("api/users/" + this.$route.query.login + "/following")
					.then(resp => {
						this.following = resp.data
						console.log(resp)
					})
			}
		}

	}
</script>

<style scoped lang="less">
/*.v_nav{
	display: flex;
	align-items: flex-start;
	height: 200px;
}*/
.icon{
	width: 100%;
	display: flex;
	margin: 15px;
	justify-content: space-between;
	color: white;
}
.icon_right{
	width: 25%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>