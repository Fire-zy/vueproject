<template>
	<div class="user">
		<div class="top">
			<div class="topHeader">
				<div class="shop">
					<img src="../assets/back.png" />
					<img src="../assets/else.png" class="else" />
				</div>
				<div class="status">
					<div class="pic">
						<img :src="item.avatar_url" />
					</div>
					<div class="messages">
						<p class="login">{{item.login}}</p>
						<p>{{item.location}}</p>
						<p>加入时间 {{item.created_at}}</p>
					</div>
				</div>
			</div>
			<div class="nav">
				<span>信息</span>
				<span>活动</span>
				<span>星标</span>
			</div>
		</div>

		<div class="main">
			<ul>
				<li>
					<div class="box_name">{{item.login}}</div>
					<div class="box_motto">{{item.bio}}</div>
					<div class="box_email">
						<img src="../assets/work.png" /> {{item.company}}
					</div>
					<div class="box_location">
						<img src="../assets/link.png" /> {{item.blog}}
					</div>
					<div class="subnav">
						<div class="column">
							<p class="date">{{item.followers}}</p>
							<p>跟随着</p>
						</div>
						<div class="column">
							<p class="date">{{item.following}}</p>
							<p>跟随</p>
						</div>
						<div class="column">
							<p class="date">{{item.public_repos}}</p>
							<p>版本库</p>
						</div>
						<div class="column">
							<p class="date">{{item.public_gists}}</p>
							<p>主题帖</p>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
		
<script>
//	import axios from 'axios'
	export default {
		name: 'top',
		data() {
			return {
				item: {}
			}
		},
		created() {
			let self = this;
			this.$axios.get('/api/users/Fire-zy')
				.then(response => {
					//console.log(response);
					self.item = response.data;
				})
		}
	}
</script>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
	}
	/*header开始*/
	
	.top {
		width: 100%;
		height: 200px;
	}
	
	.topHeader {
		width: 100%;
		height: 150px;
		background-color: #5767be;
	}
	
	.shop {
		display: flex;
		width: 92%;
		height: 30px;
		padding: 5px;
		margin-left: 15px;
		flex-flow: row nowrap;
		justify-content: space-between;
	}
	
	.shop img {
		width: 32px;
		height: 32px;
	}
	
	.status {
		width: 100%;
		height: 80px;
		display: flex;
		flex-flow: row nowrap;
		margin: 15px 0 0 15px;
	}
	
	.pic img {
		height: 80px;
		width: 80px;
		border-radius: 90px 90px;
	}
	
	.messages {
		height: 80px;
		width: 74%;
		margin-left: 10px;
	}
	
	.messages p {
		height: auto;
		font-size: 14px;
		margin-top: 5px;
		color: #FFFFFF;
	}
	
	.messages .login {
		font-size: 20px;
	}
	
	.nav {
		height: 50px;
		display: flex;
		justify-content: space-around;
		background-color: #3f51b5;
	}
	
	.nav span {
		height: 50px;
		color: #ffffff;
		font-size: 18px;
		margin-left: 10px;
		line-height: 50px;
	}
	/*header结束*/
	/*main开始*/
	
	.main li {
		list-style: none;
		width: auto;
		color: #626262;
		min-height: 80px;
		overflow: hidden;
		word-wrap: break-word;
		word-break: break-all;
		margin: 10px 10px 0 10px;
		box-shadow: 1px 1px 5px 1px #d7d7d7;
	}
	
	.main .box_name {
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
	
	.main img {
		width: 25px;
		height: 25px;
		margin-top: -4px;
		margin-right: 3px;
	}
	/*main结束*/
</style>