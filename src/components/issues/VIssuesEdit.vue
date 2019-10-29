<template>
	<div>
		<v-nav>
			
		</v-nav>
		<v-list>
			<v-list-item v-for="item in following" :key="item.id">
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import VAvatar from '../components/simple/VAvatar'
	import VNav from '../components/navbar/VNav'
	import TLink from '../components/temp/TLink'
	export default {
		name: 'Following',
		components: {
			VAvatar,
			VListItem,
			VList,
			VNav,
			TLink
		},
		data() {
			return {
				following: []
			}
		},
		created() {
			this.getMessage()
		},
		methods: {
			getMessage() {
				this.$axios.get("api/users/" + this.$route.query.login + "/following")
					.then(resp => {
						this.following = resp.data
						console.log(resp)
					})
			}
		}

	}
</script>

<style scoped lang="less">

</style>