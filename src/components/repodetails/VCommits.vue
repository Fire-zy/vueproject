<template>
	<div class="vcommits">
		<v-list>
			<v-list-item v-for="com in commits" :key="com.node_ids">
				<t-link :to="`/User?login=${com.author.login}`">
					<t-avatar :url="com.author.avatar_url"></t-avatar>
				</t-link>
				<div class="c-list-item__right">
					<t-title :title="com.author.login" :sub="com.commit.committer.date|dateFrm"></t-title>
					<t-title :description="com.commit.message"></t-title>
					<div class="c-commit-appender">
						<span>{{com.sha}}</span>
						<t-icon-bar icon="far fa-comments" :text="com.commit.comment_count" to="/"></t-icon-bar>
					</div>
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
	import VList from '../list/VList'
	import VListItem from '../list/VListItem'
	import moment from 'moment'
	export default{
		name:'VCommits',
		components: {
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
		props:['parentlogin','name','login'],
		created(){
			if(this.parentlogin){
				this.getParentLogin()
			}else{
				this.getLogin()
			}
		},
		filters: {
			dateFrm: function(el) {
				return moment(el).format('ll');
			}
		},
		methods:{
			async getParentLogin(){
				const resp=await this.$axios.get(`api/repos/${this.parentlogin}/${this.name}/commits`)
				this.commits=resp.data
				for(let v of resp.data){
					v.sha=v.sha.slice(0,6)
				}
			},
			async getLogin(){
				const resp=await this.$axios.get(`api/repos/${this.login}/${this.name}/commits`)
				this.commits=resp.data
				for(let v of resp.data){
					v.sha=v.sha.slice(0,6)
				}
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
	.c-commit-appender{
		color: #999999;
		font-size: 12px;
		display: flex;
		justify-content: space-between;
	}
</style>