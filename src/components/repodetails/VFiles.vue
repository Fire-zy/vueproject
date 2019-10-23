<template>
	<div class="vfiles">
		<v-nav>
			<i class="fas fa-less-than"></i>
		</v-nav>
		<div class="tree-menu">
			<ul v-if="files.name">
				<t-tree-item :data="files.commit.commit.tree"></t-tree-item>
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
				files: {},
				url:[]
			}
		},
		created() {
			this.getUrl()
			this.getTrees()
		},
		methods: {
			async getUrl() {
				const resp = await this.$axios.get(`api/repos/Fire-zy/Daily-Interview-Question/branches/master`)
				this.url = resp.data.commit.commit.tree.url
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