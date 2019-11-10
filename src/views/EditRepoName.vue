<template>
	<div>
		<!--<t-app-bar icon="fas fa-arrow-left" text="Edit the repository name"></t-app-bar>-->
		<t-icon-bar>
			<span>Edit the repository name</span>
			<span @click="editName($event.target.value)">完成</span>
		</t-icon-bar>
		<div class="edit_item">
			<input type="text" class="edit_name_box" :value="item.name" />
		</div>
	</div>
</template>

<script>
	import TIconBar from "../components/temp/TIconBar"
	export default{
		name:'EditRepoName',
		components:{TIconBar},
		data(){
			return{
				item:{
					name:''
				},
			}
		},
		created(){
			this.getRepoName()
		},
		methods:{
			async getRepoName(){
				const resp=await this.$axios.get(`api/repos/${this.$route.query.login}/${this.$route.query.name}`)
				this.item.name=resp.data.name
			},
			editName(value){
				this.$emit('input', value)
				this.$axios.patch(`api/repos/${this.$route.query.login}/${this.$route.query.name}`,
				{
					name:this.name
				},
				{
					headers:{
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
				.then(()=>{
					console.log('修改成功')
				})
			}
		}
	}

</script>

<style scoped>
	.icon{
		font-size: 18px;
	}
.edit_item{
	width: 100%;
	height: 620px;
	background-color: #f4f5fa;
}
.edit_name_box{
	width: 100%;
	height: 50px;
	border: none;
	padding: 10px;
	font-size: 20px;
	font-family: arial;
	line-height: 50px;
	margin-top: 15px;
	outline: none;
}
</style>