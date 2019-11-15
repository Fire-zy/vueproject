<template>
	<div class="create_new_repo">
		<t-app-bar icon="fas fa-arrow-left" text="Create a new repository"></t-app-bar>
		<div class="create_message">

			<!--选择owner-->
			<div class="create_owner">
				<p>Owner</p>
				<div class="create_owner">
					<t-avatar :url="users.avatar_url"></t-avatar>
					<span>{{users.login}}</span>
				</div>
			</div>
			
			<!--创建name-->
			<div class="creat_name">
				<input type="text" placeholder="Repository name" v-model="reponame" class="input_control" />
			</div>
			
			<!--输入repo的描述-->
			<div class="create_description">
				<textarea placeholder="Description (optional)" v-model="description" class="input_control"></textarea>
			</div>

			<!--选择repo的state-->
			<div class="create_radio">
				<div class="radio">
					<input type="radio" id="one" value="false" v-model="picked" checked>
					<label for="one" class="radio-label">Public</label>
				</div>

				<div class="radio">
					<input type="radio" id="two" value="true" v-model="picked">
					<label for="two" class="radio-label">Private</label><br>
				</div>
			</div>
			
			
			<!--Skip this step if you’re importing an existing repository.-->
			<span class="create_tips">Skip this step if you’re importing an existing repository.</span>
			<div class="create_step">
				<von-toggle
					text="auto_init" 
					:checked="false" 
					v-model="AutoInit">
				</von-toggle>
				
				<e-edit-content
					:to="`/AddGitignore`"
					title='AddGitignore' 
					:content='content'>
				</e-edit-content>
			</div>
			
			<!--创建按钮-->
			<div class="button_true">
				<button @click="creatRepo" class="create_button">Creat</button>
			</div>
			
		</div>
	</div>
</template>

<script>
	import TAppBar from "../components/temp/TAppBar"
	import TAvatar from "../components/temp/TAvatar"
	import VonToggle from '../components/toggle/VonToggle'
	import EEditContent from "../components/edit/EEditContent"
	export default {
		name: 'CreatNewRepo',
		components: {
			TAppBar,
			TAvatar,
			VonToggle,
			EEditContent
		},
		data() {
			return {
				reponame: '',
				description: '',
				content:'',
				AutoInit:'false',
				picked: 'false',
				users: {}
			}
		},
		created() {
			const user = localStorage.getItem('LOGIN_USER')
			this.users = JSON.parse(user)
		},
		methods: {
			creatRepo() {
				if(this.reponame === '') {
					alert("please input reponame")
				} else {
					this.$axios.post('api/user/repos', {
						name: this.reponame,
						description: this.description,
						private: this.picked,
						auto_init:this.AutoInit
					}, {
						headers: {
							Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
						}
					}).then(() => {
						alert("创建成功")
					})
				}
			}
		}
	}
</script>

<style scoped>
	.create_new_repo {
		width: 100%;
		height: 665px;
		background-color: #f4f5fa;
	}
	.create_owner {
		display: flex;
		padding: 0 5px 0 5px;
		align-items: center;
		margin: 10px 0 10px 0;
		background-color: #FFFFFF;
		justify-content: space-between;
	}

	
	.input_control {
		width: 98%;
		height: 50px;
		font-size: 1em;
		font-family: "微软雅黑";
		outline: none;
		border: none;
		margin: 10px 0;
		padding: 2%;
		background-color: #FFFFFF;
	}
	
	.create_description{
		height: 100px;
		margin: 10px 0;
		background-color: #FFFFFF;
	}
	
	.create_radio{
		display: flex;
		align-items: center;
		background-color: #FFFFFF;
		height: 50px;
		margin: 20px 0;
	}
	
	.input_control:focus {
		border: none;
	}
	
	.create_step{
		height: 100px;
		background-color: #FFFFFF;
	}
	.create_tips{
		display: block;
		font-size: 13px;
		margin-bottom: 5px;
	}
	
	/*选择按钮开始*/
	.radio {
		margin: 0.5rem;
	}
	
	/*隐藏原来的radio样式*/
	
	.radio input[type="radio"] {
		position: absolute;
		opacity: 0;
	}
	
	.radio input[type="radio"]+.radio-label:before {
		content: '';
		background: #f4f4f4;
		border-radius: 100%;
		border: 1px solid #b4b4b4;
		display: inline-block;
		width: 1.4em;
		height: 1.4em;
		position: relative;
		top: -0.2em;
		margin-right: 1em;
		vertical-align: top;
		cursor: pointer;
		text-align: center;
		transition: all 250ms ease;
	}
	
	.radio input[type="radio"]:checked+.radio-label:before {
		background-color: #3197EE;
		box-shadow: inset 0 0 0 4px #f4f4f4;
	}
	
	.radio input[type="radio"]:focus+.radio-label:before {
		outline: none;
		border-color: #3197EE;
	}
	
	.radio input[type="radio"]:focus+.radio-label:before {
		outline: none;
		border-color: #3197EE;
	}
	
	/*选择按钮结束*/
	
	/*按钮的样式*/
	
	/*确认按钮开始*/
	.create_button {
		color: #FFFFFF;
		width: 95%;
		margin-top: 20px;
		padding: .7em 1.2em;
		border: 1px solid #3197EE;
		border-radius: 10px;
		text-align: center;
		font-size: 18px;
		outline: none;
		background-color: #3F51B5;
	}
	
	.create_message button:active {
		transition: .5s;
		background-color: #3197EE;
	}
	.button_true{
		display: flex;
		justify-content: center;
	}
	/*确认按钮结束*/
	
</style>