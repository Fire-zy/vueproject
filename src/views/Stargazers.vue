<template>
	<div class="Stargazers">
		<t-app-bar icon="fas fa-arrow-left" text="Stargazers"></t-app-bar>
		<v-list>
			<v-list-item v-for="sta in stargazers" :key="sta.id">
				<t-avatar :url="sta.avatar_url"></t-avatar>
				<t-link :to="`/User?login=${sta.login}`">
					<span>{{sta.login}}</span>
				</t-link>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import TLink from "../components/temp/TLink"
	import TAppBar from "../components/temp/TAppBar"
	import TAvatar from "../components/temp/TAvatar"
	export default{
		name:'Stargazers',
		components:{VList,VListItem,TLink,TAvatar,TAppBar},
		data(){
			return{
				stargazers:[]
			}
		},
		created(){
			this.getStargazers()
		},
		methods:{
			async getStargazers(){
				const resp=await this.$axios.get(`api/repos/${this.$route.query.login}/${this.$route.query.name}/stargazers`)
				this.stargazers=resp.data
			}
		}
	}
</script>

<style scoped>
	.v_list_item{
		display: flex;
		align-items: center;
	}
	
</style>