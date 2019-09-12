<template>
	<div class="top" :style="{backgroundImage: 'url(' + avatar_url + ')', backgroundSize:'100%',backgroundPosition:'12px'}">
		<div class="topHeader">
			<div class="shop">
				<img src="../assets/back.png" />
				<img src="../assets/else.png" class="else" />
			</div>
			<div class="status">
				<div class="pic">
					<img :src="avatar_url" />
				</div>
				<div class="messages">
					<p class="login">{{login}}</p>
					<p>{{location}}</p>
					<p>Joined at {{created_at|dateFrm}}</p>
				</div>
			</div>
		</div>
		<v-app-bar></v-app-bar>
	</div>
</template>

<script>
	import moment from 'moment'
	import VAppBar from '../components/layout/VAppBar'
	export default {
		name: 'Top',
		data() {
			return {
				item: {}
			}
		},
		components: {
			VAppBar
		},
		filters: {
			dateFrm: function(el) {
				return moment(el).format('ll');
			}
		},
		props: ['avatar_url', 'login', 'location', 'created_at']
	}
</script>

<style lang="less">
	/*header开始*/
	
	.top {
		width: 100%;
		height: 200px;
		background: url(../assets/work.png) no-repeat;
	}
	
	.topHeader {
		width: 100%;
		height: 150px;
		color: #FFFFFF;
		background-color: rgba(63, 81, 181, 0.9);
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
		min-height: 50px;
		width: 100%;
		display: flex;
		justify-content: space-around;
		background-color: #3f51b5;
	}
	
	/*.nav span {
		height: 50px;
		color: #ffffff;
		font-size: 18px;
		margin-left: 10px;
		line-height: 50px;
	}*/

	/*header结束*/
</style>