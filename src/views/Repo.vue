<template>
	<div class="repo">
		<t-app-bar icon="fas fa-less-than" to="/" text="Repo"></t-app-bar>
		<v-list>
			<v-list-item v-for="repo in repos" :key="repo.id">
				<t-link :to="`/User?login=${repo.owner.login}`">
					<t-avatar :url="repo.owner.avatar_url"></t-avatar>
				</t-link>
				<div class="t-list-item__right">
					<t-title :title="repo.name"  :sub="repo.language" :login="repo.owner.login"></t-title>
					<t-title :description="repo.description || ''"></t-title>
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
	import TAvatar from "../components/temp/TAvatar";
	import TLink from "../components/temp/TLink";
	import TIconBar from "../components/temp/TIconBar";
	import TTitle from "../components/temp/TTitle";
	import TAppBar from "../components/temp/TAppBar";
	import VList from '../components/list/VList';
	import VListItem from '../components/list/VListItem';
	export default {
		name: 'Repo',
		components: {
			TAppBar,
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
			this.getMessage()
		},
		methods: {
			async getMessage() {
				const resp = await this.$axios.get(`api/users/${this.$route.query.login}/repos`)
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
		justify-content: space-around;
	}
</style>