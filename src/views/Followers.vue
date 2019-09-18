<template>
	<div class="followers">
		<div class="top">
			<img src="../assets/back.png" />
			<div>
				<span>Followers</span>
				<span></span>
			</div>
			
		</div>
		<v-list>
      <v-list-item v-for="item in item" :key="item.id">
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
	export default{
		name:'Followers',
		components: { VAvatar, VListItem, VList },
		data(){
			return{
				item:[]
			}
		},
		created(){
			this.getMessage()
		},
		props:['login'],
		methods:{
			getMessage(){
				this.$axios.get("https://api.github.com/users/Fire-zy/followers")
				.then(resp=>{
					this.item=resp.data
					console.log(resp)
				})
			}
		}
		
	}
</script>

<style scoped lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.top{
		height: 50px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		background-color: #3F51B5;
	}
	.top img{
		width: 30px;
		height: 30px;
		margin-left: 15px;
	}
	.v_list_item{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.v_list_item span{
		margin-left: 5px;
	}
	.top span{
		color: #FFFFFF;
		font-size: 20px;
	}
</style>