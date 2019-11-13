<template>
	<div>
		<!--<t-app-bar icon="fas fa-arrow-left" text="Edit the repository name"></t-app-bar>-->
		<t-icon-bar>
			<span>Edit Default Branch</span>
			<span @click="editDdefaultBranch()">完成</span>
		</t-icon-bar>
		<div class="edit_item">
			<textarea class="edit_default_branch" v-model="item.branch"></textarea>
		</div>
	</div>
</template>

<script>
	import TIconBar from "../components/temp/TIconBar"
	export default {
		name: 'EditDefaultBranch',
		components: {
			TIconBar
		},
		data() {
			return {
				item: {
					branch: ''
				},
			}
		},
		created() {
			this.getDdefaultBranch()
		},
		methods: {
			async getDdefaultBranch() {
				const resp = await this.$axios.get(`api/repos/${this.$route.query.login}/${this.$route.query.name}`)
				this.item.branch = resp.data.default_branch
			},
			editDdefaultBranch() {
				this.$axios.patch(`api/repos/${this.$route.query.login}/${this.$route.query.name}`, {
						branch: this.item.default_branch
					}, {
						headers: {
							Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
						}
					})
					.then(() => {
						console.log('修改成功')
					})
			}
		}
	}
</script>

<style scoped>
	.icon {
		font-size: 18px;
	}
	
	.edit_item {
		width: 100%;
		height: 620px;
		background-color: #f4f5fa;
	}
	
	.edit_default_branch {
		width: 100%;
		height: 50px;
		border: none;
		padding: 10px;
		font-size: 20px;
		font-family: arial;
		line-height: 50px;
		margin-top: 15px;
		outline: none;
	}
</style>