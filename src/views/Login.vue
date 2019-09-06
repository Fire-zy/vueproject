<template>
	<div class="login">
		<button @click="onLoginClick">登 陆</button>
	</div>
</template>

<script>
	export default{
		name:'login',
		methods:{
			onLoginClick(){
				window.location.href='https://github.com/login/oauth/authorize?'+
				'client_id=4af3400d61f2ba9c28f3'+
				'&redirect_uri=http://localhost:8080/callback'
			}
		}
	}
</script>

<style>
	.login{
		width: auto;
		height: 600px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.login button{
		width: 350px;
		height: 70px;
		outline: 0;
		color: #FFFFFF;
		font-size: 30px;
		text-align: center;
		border: none;
		background-color: #5767BE;
		border-radius: 30px;
	}
	.login button:active{
		background-color: #3F51B5;
	}
</style>