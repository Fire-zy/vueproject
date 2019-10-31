<template>
	<div class="list">	
		<div class="main">
			<v-list class="box_login">{{list.login}}</v-list>
			<v-list>{{list.bio}}</v-list>
			<v-list>
				<img src="@/assets/work.png" />{{list.company}}
			</v-list>
			<v-list>
				<img src="@/assets/link.png" />{{list.blog}}
			</v-list>
		</div>
		<div class="sub_nav">
			<v-block :para="list.followers" :text="`followers`" :to="{path:'/Followers',query:{login:list.login}}"></v-block>
			<v-block :para="list.following" :text="`following`" :to="{path:'/Following',query:{login:list.login}}"></v-block>
			<v-block :para="list.public_repos" :text="`repos`" :to="{path:'/Repo',query:{login:list.login}}"></v-block>
			<v-block :para="list.public_gists" :text="`gists`" :to="{path:'/Gists',query:{login:list.login}}"></v-block>
		</div>
	</div>
</template>

<script scoped>
	import VList from '../list/VList'
//	import VListItem from '../list/VList'
	import VBlock from '../list/VBlock'
	export default {
		name: 'List',
		components: {
			VList,
			VBlock,
		},
		data() {
			return {
				username: '',
				list: []
			}
		},
		props: ['userlogin'],
		created() {
			this.getList()
		},
		methods: {
			getList() {
				this.$axios.get("api/users/" + this.userlogin)
					.then(resp => {
						this.list = resp.data
					})
			}
		}
	}
</script>

<style>
	/*.main {
		width: auto;
		list-style: none;
		min-height: 80px;
		overflow: hidden;
		margin: 10px 10px 0 10px;
		box-shadow: 1px 1px 5px 1px #d7d7d7;
	}*/
	
	.box_login {
		color: #242424;
		font-size: 20px;
	}
	.list{
		margin: 10px 10px 0 10px;
		box-shadow: 1px 1px 5px 1px #d7d7d7;
	}
	
	.sub_nav {
		display: flex;
		justify-content: space-between;
	}
	
	.v_list {
		margin: 10px;
	}
	
	.v_list img {
		width: 30px;
		height: 30px;
	}
</style>