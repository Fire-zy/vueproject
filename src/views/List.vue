<template>
	<v-list>
		<div class="main">
			<div class="box_name">{{list.login}}</div>
			<div class="personal">
				<div class="box_motto">{{list.bio}}</div>
				<div class="box_email">
					<!--<img src="../assets/work.png" />--> {{list.company}}
				</div>
				<div class="box_location">
					<img src="../assets/link.png" /> {{list.blog}}
				</div>
			</div>
			<div class="subnav">
				<div class="column">
					<p class="date">{{list.followers}}</p>
					<p><router-link :to="{path:'/Followers',query:{login:list.login}}">跟随着</router-link></p>
				</div>
				<div class="column">
					<p class="date">{{list.following}}</p>
					<p><router-link :to="{path:'/Following',query:{login:list.login}}">跟随</router-link></p>
				</div>
				<div class="column">
					<p class="date">{{list.public_repos}}</p>
					<p><router-link :to="{path:'/Repo',query:{login:list.login}}">版本库</router-link></p>
				</div>
				<div class="column">
					<p class="date">{{list.public_gists}}</p>
					<p><router-link :to="{path:'/Gists',query:{login:list.login}}">主题帖</router-link></p>
				</div>
			</div>
		</div>
	</v-list>
</template>

<script>
	import VList from '../components/list/VList'
	export default {
		name: 'List',
		components: {
			VList
		},
		data() {
			return {
				username:'',
				list: []
			}
		},
		props:['login'],
		created() {
			this.getList()
		},
		methods:{
			getList(){
				this.$axios.get("api/users/"+this.login)
				.then(resp=>{
					this.list=resp.data
					console.log(resp)
				})
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.main {
		width: auto;
		list-style: none;
		min-height: 80px;
		overflow: hidden;
		margin: 10px 10px 0 10px;
		box-shadow: 1px 1px 5px 1px #d7d7d7;
	}
	
	.box_name {
		width: 90%;
		color: #242424;
		font-size: 20px;
		margin: 10px 0 0 15px;
	}
	
	.box_location,
	.box_email,
	.box_motto {
		width: 90%;
		display: flex;
		margin: 15px 0 0 15px;
	}
	
	.personal img {
		width: 25px;
		height: 25px;
		margin-top: -4px;
		margin-right: 3px;
	}
	
	.subnav {
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: space-around;
	}
	
	.column {
		font-size: 14px;
		margin: 10px 0 20px 7px;
	}
	
	.column .date {
		font-size: 18px;
	}
	
	.column p {
		margin-top: 10px;
	}
	.subnav a{
		text-decoration: none;
		color: #242424;
	}
	.router-link-active {
    text-decoration: none;
	}
</style>