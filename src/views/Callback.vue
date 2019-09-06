<template>
	<div class="callback"></div>
</template>

<script>
	export default {
		name: 'callback',
		data(){
			return {
				
			}
		},
		created() {
			this.getAccess()
//			console.log(this.$route.query.code)
		},
		methods: {
			getAccess() {
				this.$axios({
					method: "post",
					headers:{
						"content-type":"application-json",
					},
					url: '/zy/login/oauth/access_token?' +
						'client_id=4af3400d61f2ba9c28f3&' +
						'client_secret=0fe13b886ca7eec531a8a9ea57fe6e18ddc9b380&' +
						'code=' + this.$route.query.code,
				}).then((resp) => {				
						console.log(resp.access_token);
				})
			}
			
		}
	}
</script>

<style>

</style>