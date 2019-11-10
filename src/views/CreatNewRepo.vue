<template>
	<div class="creat_new_reponame">
		<t-app-bar icon="fas fa-arrow-left" text="Creat a new repository"></t-app-bar>
		<div class="creat_message">

			<!--输入repo的姓名，必填-->
			<div class="creat_reponame">
				<p>Owner</p>
				<div class="creat_owner">
					<t-avatar :url="users.avatar_url"></t-avatar>
					<span>{{users.login}}</span>
				</div>
				<p>Repository name</p>
				<input type="text" v-model="reponame" class="input_control" />
			</div>

			<!--输入repo的描述-->
			<div class="creat_description">
				<p>Description (optional)</p>
				<textarea type="text" v-model="description" class="input_control"></textarea>
			</div>

			<!--选择repo的state-->
			<div class="creat_radio">
				<div class="radio">
					<input type="radio" id="one" value="false" v-model="picked" checked>
					<label for="one" class="radio-label">Public</label>
				</div>

				<div class="radio">
					<input type="radio" id="two" value="true" v-model="picked">
					<label for="two" class="radio-label">Private</label><br>
				</div>
			</div>
			<!--创建按钮-->
			<button @click="creatRepo" class="creat_button">Creat</button>

		</div>
	</div>
</template>

<script>
	import TAppBar from "../components/temp/TAppBar"
	import TAvatar from "../components/temp/TAvatar"
	export default {
		name: 'CreatNewRepo',
		components: {
			TAppBar,
			TAvatar
		},
		data() {
			return {
				reponame: '',
				description: '',
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
						private: this.picked
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
	.creat_owner {
		display: flex;
		align-items: center;
	}
	
	.creat_message {
		padding: 15px;
	}
	
	.creat_message p {
		color: #3F51B5;
		font-size: 20px;
		margin: 5px;
	}
	
	.input_control {
		width: 100%;
		display: block;
		padding: 0.5 1em;
		text-decoration: none;
		box-sizing: border-box;
		color: #3F51B5;
		font-size: 1.4em;
		border-radius: 4px;
		border: 1px solid #6495ED;
		outline: none;
		/*除去选中状态边框*/
		background-color: rgba(0, 0, 0, 0);
		/*透明背景*/
	}
	
	.input_control:focus {
		border: 1px solid #3F51B5;
	}
	
	.creat_reponame,
	.creat_description,
	.creat_radio,
	.creat_button {
		margin: 20px;
	}
	
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
	/*按钮的样式*/
	
	.creat_button {
		color: #FFFFFF;
		display: block;
		padding: .7em 1.2em;
		border: 1px solid #3197EE;
		text-align: center;
		font-size: 16px;
		outline: none;
		background-color: #3197EE;
	}
	
	.creat_message button:active {
		border: 1px solid #3197EE;
		background-color: #3F51B5;
	}
</style>