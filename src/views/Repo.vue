<template>
	<div class="repo">
		<!--顶部的各类来凝结-->
		<t-icon-bar>
			<span>Repo</span>
			<t-link :to="`/CreatNewRepo`">
				<i class="fas fa-plus"></i>
			</t-link>
		</t-icon-bar>
		<v-list>
			<!--遍历数组-->
			<v-list-item v-for="repo in repos" :key="repo.id">
				<t-link :to="`/User?login=${repo.owner.login}`">
					<t-avatar :url="repo.owner.avatar_url"></t-avatar>
				</t-link>
				<!--item右边的详细信息-->
				<div class="t-list-item__right">
					<t-title :title="repo.name"  :sub="repo.language" :to="`/RepoDetails?login=${repo.owner.login}&name=${repo.name}`"></t-title>
					<t-title :description="repo.description || ''"></t-title>
					
					<!--item右边底部的标识-->
					<div class="t-repo-appender">
						<t-icon-bar icon="far fa-star" :text="repo.stargazers_count" to="/"></t-icon-bar>
						<t-icon-bar icon="far fa-eye" :text="repo.watchers_count" to="/"></t-icon-bar>
						<t-icon-bar icon="far fa-user" :text="repo.owner.login" to="/"></t-icon-bar>
					</div>
				</div>
			</v-list-item>
		</v-list>
	</div>

</template>

<script>
	import TAvatar from "../components/temp/TAvatar"
	import TLink from "../components/temp/TLink"
	import TIconBar from "../components/temp/TIconBar"
	import TTitle from "../components/temp/TTitle"
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	export default {
		name: 'Repo',
		components: {
			TTitle,
			TIconBar,
			TLink,
			TAvatar,
			VList,
			VListItem
		},
		data() {
			return {
				repos: []
			}
		},
		created() {
			if(this.$route.query.login){
				this.getPublicRepo()
			}else{
				this.getAllRepo()
			}
		},
		methods: {
			async getAllRepo() {		//获取所有的repo
				const resp = await this.$axios.get(`api/user/repos`,{
					headers: {
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
				this.repos = resp.data
			},
			async getPublicRepo() {		//获取公开的repo
				const resp = await this.$axios.get(`api/users/${this.$route.query.login}/repos`,{
					headers: {
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
				this.repos = resp.data
			}
		}
	}
</script>

<style scoped lang="less">
	.v_list_item{
		display: flex;
	}
	.repo {
		padding-bottom: 30px;
	}
	
	.t-list-item__right {
		flex-grow: 1;
	}
	
	.t-repo-appender {
		color: #999999;
		font-size: 12px;
		display: flex;
		justify-content: space-between;
	}
</style>