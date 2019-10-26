<template>
	<div class="v_star">
		<v-list>
			<v-list-item v-for="star in stared" :key="star.id">
				<t-link :to="`/User?login=${star.owner.login}`">
					<t-avatar :url="star.owner.avatar_url"></t-avatar>
				</t-link>
				<t-link :to="`/RepoDetails?login=${star.owner.login}&name=${star.name}`">
					<div class="t-list-item__right">
						<t-title :title="star.name" :sub="star.language" :login="star.owner.login"></t-title>
						<t-title :description="star.description || ''"></t-title>
						<div class="t-star-appender">
							<t-icon-bar icon="far fa-star" :text="star.stargazers_count" to="/"></t-icon-bar>
							<t-icon-bar icon="far fa-eye" :text="star.watchers_count" to="/"></t-icon-bar>
							<t-icon-bar icon="far fa-user" :text="star.owner.login" to="/"></t-icon-bar>
						</div>
					</div>
				</t-link>
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
	export default {
		name: 'Vstar',
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
				stared: []
			}
		},
		props: ['login'],
		created() {
			if(this.$route.query.login) {
				this.getStar()
			} else {
				this.getStared()
			}
		},
		methods: {
			getStared() {
				this.$axios.get('/api/users/' + this.login + '/starred').then(resp => {
					this.stared = resp.data
				})
			},
			getStar() {
				this.$axios.get('/api/users/' + this.$route.query.login + '/starred').then(resp => {
					this.stared = resp.data
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.v_list_item {
		display: flex;
	}
	
	.v_star {
		padding-bottom: 30px;
	}
	
	.t-list-item__right {
		flex-grow: 1;
	}
	
	.t-star-appender {
		color: #999999;
		font-size: 12px;
		display: flex;
		justify-content: space-between;
	}
</style>