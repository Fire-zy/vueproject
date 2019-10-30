<template>
	<div class="vinfo">
		<v-list>
			<v-list-item>
				<v-list>{{info.full_name}}</v-list>
				<v-list v-if="info.parent" class="i-parent">
					<t-link :to="`/RepoDetails?login=${info.parent.owner.login}&name=${info.parent.name}`">
						<span v-if="info.fork===true">Forked </span>
						<span v-if="info.parent">{{info.parent.full_name}}</span>
					</t-link>
				</v-list>
				<v-list class="i-time">
					<span v-if="info.fork===true">Forked at </span>
					<span v-else-if="info.fork===false">Created at </span>
					<span>{{info.created_at|dateFrm}}, </span>
					<span v-if="info.fork===true">Lastest commit </span>
					<span>{{info.pushed_at|dateFrm}}</span>
				</v-list>
				<v-list class="i-count">
					<v-block v-if="info.owner" :para="info.open_issues_count" :text="`Issues`" :to="{path:'/Issues',query:{login:info.owner.login}}"></v-block>
					<v-block :para="info.stargazers_count" :text="`Stargazers`" :to="{path:'/Issues'}"></v-block>
					<v-block v-if="info.owner" :para="info.forks" :text="`Forks`" :to="{path:'/Forks'}"></v-block>
					<v-block :para="info.watchers" :text="`Watchers`" :to="{path:'/Issues'}"></v-block>
				</v-list>
			</v-list-item>
		</v-list>
	</div>
</template>

<script scoped>
	import VList from '../list/VList'
	import VBlock from '../list/VBlock'
	import VListItem from '../list/VListItem'
	import moment from 'moment'
	import TLink from "../temp/TLink"
	export default{
		name:'VInfo',
		components: {VListItem, VList,TLink,VBlock},
		data(){
			return{
				info:{},
			}
		},
		props:['repologin','reponame'],
		created(){
			this.getInfo()
		},
		filters: {
			dateFrm: function(el) {
				return moment(el).format('ll');
			}
		},
		methods:{
			async getInfo(){
				const resp=await this.$axios.get(`api/repos/${this.repologin}/${this.reponame}`)
				this.info=resp.data
			}
		}
		
	}
</script>

<style scoped lang="less">
	.v_list_item{
		display: flex;
		justify-content: space-around;
		flex-direction: column;
	}
	.i-parent{
		color: #6495ED;
	}
	.i-time{
		margin: 7px 0 7px 0;
		color: #808080;
	}
	.i-fullname{
		font-size: 18px;
	}
	.i-count{
		color: #808080;
		display: flex;
		justify-content: space-between;
	}
</style>