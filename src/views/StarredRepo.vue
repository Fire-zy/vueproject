<template>
	<div class="StarredRepo">
		<t-app-bar icon="fas fa-arrow-left" text="StarredRepo"></t-app-bar>
		<span v-if="flag" class="v-tips">No StarredRepo</span>
		<div>
			<v-star></v-star>
		</div>
	</div>
</template>

<script>
	import TAppBar from "../components/temp/TAppBar"
	import VStar from '../components/users/VStar'
	export default{
		name:'StarredRepo',
		components: {
			TAppBar,
			VStar
		},
		data(){
			return{
				item:[],
				flag:false
			}
		},
		created() {
			this.getStarredRepo()
		},
		methods: {
			getStarredRepo() {
				this.$axios.get("api/users/" + this.$route.query.login + "/starred")
					.then(resp => {
						if(resp.data.length!=0){
							this.item = resp.data
						}else{
							this.flag=true
						}

						console.log(resp)
					})
			}
		}
	}
</script>

<style>
</style>