<template>
	<div class="Forks">
		<t-app-bar icon="fas fa-arrow-left" to="/" text="Forks"></t-app-bar>
		<v-list>
			<v-list-item v-for="fo in forks" :key="fo.id">
				<t-avatar :url="fo.owner.avatar_url"></t-avatar>
				<div class="forks_item_right">
					<t-link :to="`/User?login=${fo.owner.login}`">
						<t-title :title="fo.name" :sub="fo.language" :to="`/User?login=${fo.owner.login}`"></t-title>
						<div class="forks_appender_icon">
							<t-icon-bar  icon="far fa-star" :text="fo.stargazers_count"></t-icon-bar>
							<div><img src="../assets/forks.png">{{fo.forks_count}}</div>
							<t-icon-bar  icon="far fa-user" :text="fo.owner.login"></t-icon-bar>
						</div>
					</t-link>
				</div>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import VList from '../components/list/VList'
//	import VBlock from '../components/list/VBlock'
	import VListItem from '../components/list/VListItem'
	import TLink from "../components/temp/TLink"
	import TAppBar from "../components/temp/TAppBar"
	import TAvatar from "../components/temp/TAvatar"
	import TTitle from "../components/temp/TTitle"
	import TIconBar from "../components/temp/TIconBar"
	export default{
		name:'Forks',
		components:{TIconBar,VList,VListItem,TLink,TAvatar,TAppBar,TTitle},
		data(){
			return{
				forks:[]
			}
		},
		created(){
			this.getForks()
		},
		methods:{
			async getForks(){
				const resp=await this.$axios.get(`api/repos/${this.$route.query.login}/${this.$route.query.name}/forks`)
				this.forks=resp.data
			}
		}
	}
</script>

<style scoped>
	.v_list_item{
		display: flex;
	}
	.forks_item_right{
		flex-grow: 1;
	}
	.forks_appender_icon{
		color: #999999;
		font-size: 12px;
		display: flex;
		justify-content: space-between;
	}
	.forks_appender_icon img{
		width: 15px;
		height: 15px;
	}
</style>