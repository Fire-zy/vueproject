<template>
	<div class="vfiles">
		<v-nav>
			<i class="fas fa-less-than"></i>
		</v-nav>
		<div class="tree-menu">
			<ul v-if="files.tree">
				<t-tree-item :data="files"></t-tree-item>
			</ul>
		</div>
	</div>
</template>

<script>
	import VNav from '../navbar/VNav'
	import TTreeItem from '../tree/TreeItem'
	export default {
		name: 'VFiles',
		components: {
			VNav,
			TTreeItem
		},
		props: {
			data: {
				type: [Object, Array],
//				required: true
			}
		},
		data() {
			return {
				files: []
			}
		},
		created() {
			console.log(this.data)
			this.getUrl()
			
		},
		methods: {
			async getUrl() {
				const resp = await this.$axios.get(`api/repos/Fire-zy/Daily-Interview-Question/git/trees/dd221e7e532fe178c62a9a26a60abc88a39ed5e5`)
				this.files = resp.data
			},
			async getTrees() {
				console.log(this.url)
				const res = await this.$axios.get(`${this.url}`)
				this.files = res.data
			}
		}
	}
</script>

<style>
	.fas {
		margin-left: 10px;
		color: #FFFFFF;
	}
</style>