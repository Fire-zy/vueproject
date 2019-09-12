<template>
	<div class="callback"></div>
</template>

<script>
	export default {
		name: 'callback',
		data() {
			return {}
		},
		created() {
			this.getAccess()
//			console.log(this.$route.query.code)
		},
		methods: {
			//优化代码结构
			getAccess() {
				this.$axios({
					method: "post",
					headers: {
						Accept: 'application/json'
					},
					url: '/zy/login/oauth/access_token?' +
						'client_id=4af3400d61f2ba9c28f3&' +
						'client_secret=0fe13b886ca7eec531a8a9ea57fe6e18ddc9b380&' +
						'code=' + this.$route.query.code,
				}).then(resp => {
					const accessToken = resp.data.access_token
					localStorage.setItem('ACCESS_TOKEN',accessToken)
					this.$router.push({name:'user'})//跳转到首页去(编程式路由跳转)
				})
			}
		}
	}
</script>

<style>

</style>