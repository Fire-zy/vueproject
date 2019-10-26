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
					<div>
						<span>{{info.stargazers_count}}</span>
						<span class="i-stargazers">Stargazers</span>
					</div>
					<div>
						<span>{{info.forks}}</span>
						<span class="i-stargazers">Forks</span>
					</div>
					<div>
						<span>{{info.watchers}}</span>
						<span class="i-stargazers">Watchers</span>
					</div>
				</v-list>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import VList from '../list/VList'
	import VListItem from '../list/VListItem'
	import moment from 'moment'
	import TLink from "../temp/TLink"
	export default{
		name:'VInfo',
		components: {VListItem, VList,TLink},
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
		color: #808080;
	}
	.v_list{
			margin-bottom: 5px;
	}
	.i-fullname{
		font-size: 18px;
	}
	.i-count{
		color: #808080;
		display: flex;
		padding: 3px;
		justify-content: space-between;
	}
	.i-count span{
		display: flex;
		margin: 5px;
		justify-content: center;
	}
</style>