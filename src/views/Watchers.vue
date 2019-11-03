<template>
	<div class="Watchers">
		<t-app-bar icon="fas fa-arrow-left"  text="Watchers"></t-app-bar>
		<v-list>
			<v-list-item v-for="wat in watchers" :key="wat.id">
				<t-avatar :url="wat.avatar_url"></t-avatar>
				<t-link :to="`/User?login=${wat.login}`">
					<span>{{wat.login}}</span>
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
		name:'Watchers',
		components:{VList,VListItem,TLink,TAvatar,TAppBar},
		data(){
			return{
				getWatchers:[]
			}
		},
		created(){
			this.getWatchers()
		},
		methods:{
			async getForks(){
				const resp=await this.$axios.get(`api/repos/${this.$route.query.login}/${this.$route.query.name}/stargazers`)
				this.watchers=resp.data
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