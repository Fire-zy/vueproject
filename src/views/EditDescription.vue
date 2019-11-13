<template>
	<div>
		<t-icon-bar>
			<span>Edit description</span>
			<span @click="editDescription()">完成</span>
		</t-icon-bar>
		<div class="edit_item">
			<textarea class="edit_description_box" v-model="item.description"></textarea>
		</div>
	</div>
</template>

<script>
	import TIconBar from "../components/temp/TIconBar"
	export default {
		name: 'EditDescription',
		components: {
			TIconBar
		},
		data() {
			return {
				item: {
					description: ''
				},
			}
		},
		created() {
			this.getDescription()
		},
		methods: {
			async getDescription() {
				const resp = await this.$axios.get(`api/repos/${this.$route.query.login}/${this.$route.query.name}`)
				this.item.description = resp.data.description
			},
			editDescription() {
				this.$axios.patch(`api/repos/${this.$route.query.login}/${this.$route.query.name}`, 
					{
						description: this.item.description
					}, 
					{
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
	
	.edit_description_box {
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