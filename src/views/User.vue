<template>
	<div class="user">
		<div class="v-top" :style="{backgroundImage: 'url(' + item.avatar_url + ')', backgroundSize:'100%',backgroundPosition:'12px'}">
			<div class="v-header">
				<div class="shop">
					<img src="../assets/back.png" @click="$router.back(-1)" />
					<img src="../assets/else.png" class="else" />
				</div>
				<div class="status">
					<div class="pic">
						<img :src="item.avatar_url" class="animated rubberBand" />
					</div>
					<div class="messages">
						<p class="login">{{item.login}}</p>
						<p>{{item.location}}</p>
						<p>Joined at {{item.created_at|dateFrm}}</p>
					</div>
				</div>
			</div>
			<div class="v_tab_bar">
				<span @click="tabName='List'">信息</span>
				<span @click="tabName='Activity'">活动</span>
				<span @click="tabName='VStar'">星标</span>
			</div>
			<keep-alive>
				<transition>
					<component :is="tabName" :login="item.login" v-if="item.login"></component>
				</transition>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	import moment from 'moment'
	import List from '../components/users/List.vue'
	import Activity from '../components/users/Activity.vue'
	import Star from '../components/users/VStar.vue'
	export default {
		name: 'user',
		data() {
			return {
				item: {},
				tabName: 'Activity'
			}
		},
		components: {
			List,
			Activity,
			Star
		},
		filters: {
			dateFrm: function(el) {
				return moment(el).format('ll');
			}
		},
		created() {
			if(this.$route.query.login) {
				this.getUser()
			} else {
				//				直接取localStorage里面的数据
				const user = localStorage.getItem('LOGIN_USER')
				this.item = JSON.parse(user)
			}
		},
		methods: {
			getUser() {
				this.$axios.get("api/users/" + this.$route.query.login)
					.then(resp => {
						this.$nextTick(() => {
							this.item = resp.data
						})
					})
			}
		}
	}
</script>

<style lang="less">
	/*header开始*/
	
	.v-enter,
	.v-leave-to {
		opacity: 0;
		transform: translateX(80px);
	}
	
	.v-enter-active,
	.v-leave-active {
		transition: all 0.4s ease;
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
	}
	
	/*header结束*/
	/*main开始*/
	
	.box_name {
		width: 90%;
		color: #242424;
		font-size: 20px;
		margin: 10px 0 0 15px;
	}
	/*main结束*/
</style>