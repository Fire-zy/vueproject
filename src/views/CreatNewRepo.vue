<template>
	<div>
		<t-app-bar icon="fas fa-arrow-left" text="Creat a new repository"></t-app-bar>
		<div class="creat_message">
			
		<!--输入repo的姓名，必填-->
			<div class="creat_reponame">
				<p>Repository name</p>
				<input type="text" v-model="reponame" />
			</div>
				
			<!--输入repo的描述-->
			<div>
				<p>Description (optional)</p>
				<textarea type="text" v-model="description"></textarea>
			</div>
			
			<!--选择repo的state-->
			<div>
				<input type="radio" id="one" value="Public" v-model="picked">
				<span>Public</span><br><input type="radio" id="two" value="Private" v-model="picked">
				<span>Private</span><br></div><!--创建按钮-->
				<button @click="creatRepo">Creat</button>
		</div>
	</div>
</template>

<script>import TAppBar from "../components/temp/TAppBar"
export default {
	name: 'CreatNewRepo',
	components: {
		TAppBar
	},
	data() {
		return {
			reponame: '',
			description: '',
			picked: ''
		}
	},
	created() {
		//			console.log(this.$route.query.login)
		//			const user = localStorage.getItem('LOGIN_USER')
		//			console.log(JSON.parse(user))
	},
	methods: {
		creatRepo() {
			this.$axios.post('api/user/repos', 
			{
				name: this.reponame,
				description: this.description
			}, 
			{
				headers: {
					Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
				}
			}).then(resp=> {
				console.log('创建成功')
			})
		}
	}
}

</script><style scoped>.creat_message {
	padding: 15px;
}

.creat_message p {
	color: #3F51B5;
	font-size: 20px;
	margin: 5px;
}

</style>