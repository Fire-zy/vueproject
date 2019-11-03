<template>
	<div class="followers">
		<t-app-bar icon="fas fa-arrow-left" text="Followers"></t-app-bar>
		<v-list>
      <v-list-item v-for="item in followers" :key="item.id">
        <t-link :to="{path:'/User',query:{login:item.login}}">
					<v-avatar :url="item.avatar_url" :radius="30"></v-avatar>
        </t-link>
        <span>{{item.login}}</span>
      </v-list-item>
    </v-list>
	</div>
</template>

<script scoped>
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import VAvatar from '../components/simple/VAvatar'
	import TLink from '../components/temp/TLink'
	import TAppBar from "../components/temp/TAppBar"
	export default{
		name:'Following',
		components: { VAvatar, VListItem, VList,TLink,TAppBar },
		data(){
			return{
				followers:[]
			}
		},
		created(){
			this.getMessage()
		},
		methods:{
			getMessage(){
				this.$axios.get("/api/users/"+this.$route.query.login+"/followers")
				.then(resp=>{
					this.followers=resp.data
					console.log(resp)
				})
			}
		}	
	}
</script>

<style scoped lang="less">

	.v_list_item{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

</style>