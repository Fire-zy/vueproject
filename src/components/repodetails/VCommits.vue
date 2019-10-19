<template>
	<div class="vcommits">
		<v-list>
			<v-list-item v-for="commit in commits" :key="commit.node_ids">
				<t-link :to="`/User?login=${commit.author.login}`">
					<t-avatar :url="commit.author.avatar_url"></t-avatar>
				</t-link>
				<div class="c-list-item__right">
					<t-title :title="commit.author.login"></t-title>
					<t-title :sub="commit.commit.committer.date|dateFrm"></t-title>
				</div>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import TAvatar from "../temp/TAvatar"
	import TLink from "../temp/TLink"
	import TIconBar from "../temp/TIconBar"
	import TTitle from "../temp/TTitle"
	import TAppBar from "../temp/TAppBar"
	import VList from '../list/VList'
	import VListItem from '../list/VListItem'
	import moment from 'moment'
	export default{
		name:'VCommits',
		components: {
			TAppBar,
			TTitle,
			TIconBar,
			TLink,
			TAvatar,
			VList,
			VListItem
		},
		data(){
			return{
				commits:[]
			}
		},
		props:['parentlogin','name'],
		created(){
			this.getCommits()
		},
		filters: {
			dateFrm: function(el) {
				return moment(el).format('ll');
			}
		},
		methods:{
			async getCommits(){
				const resp=await this.$axios.get(`api/repos/${this.parentlogin}/${this.name}/commits`)
				this.commits=resp.data
				console.log(resp)
			}
		}
	}
</script>

<style>
	.v_list_item{
		display: flex;
	}
	.c-list-item__right{
		flex-grow: 1;
	}
</style>