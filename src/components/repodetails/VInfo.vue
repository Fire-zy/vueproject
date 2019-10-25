<template>
	<div class="vinfo">
		<v-list>
			<v-list-item>
				<span class="i-fullname">{{info.full_name}}</span>
				<div class="i-parent">
					<span v-if="info.fork===true">Forked</span>
					<span v-if="info.parent">{{info.parent.full_name}}</span>
				</div>
				<div class="i-time">
					<span v-if="info.fork===true">Forked at </span>
					<span>{{info.created_at|dateFrm}}, </span>
					<span v-if="info.fork===true">Lastest commit </span>
					<span>{{info.pushed_at|dateFrm}}</span>
				</div>
				<div class="i-count">
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
				</div>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import VList from '../list/VList'
	import VListItem from '../list/VListItem'
	import moment from 'moment'
	export default{
		name:'VInfo',
		components: {VListItem, VList},
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
	.v_list_item span{
			margin-bottom: 5px;
	}
	.i-fullname{
		font-size: 18px;
	}
	.i-count{
		display: flex;
		padding: 5px;
		justify-content: space-between;
	}
	.i-count span{
		display: flex;
		justify-content: center;
	}
</style>