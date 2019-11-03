<template>
	<div class="gists">
		<t-app-bar icon="fas fa-arrow-left" text="Gists"></t-app-bar>
		<v-list>
      <v-list-item v-for="item in gists" :key="item.id">
        <v-avatar :url="item.avatar_url" :radius="30"></v-avatar>
        <span>{{item.login}}</span>
      </v-list-item>
    </v-list>
	</div>
</template>

<script>
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import VAvatar from '../components/simple/VAvatar'
	import TAppBar from "../components/temp/TAppBar"
	export default{
		name:'Gists',
		components: { VAvatar, VListItem, VList,TAppBar },
		data(){
			return{
				gists:[]
			}
		},
		created(){
			this.getMessage()
		},
		methods:{
			getMessage(){
				this.$axios.get("api/users/"+this.$route.query.login+"/gists")
				.then(resp=>{
					this.gists=resp.data
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
	.v_list_item span{
		margin-left: 5px;
	}
</style>