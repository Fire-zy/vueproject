<template>
	<div class="vinfo">
		<v-list>
			<v-list-item v-for="info in infos" :key="info.id">
						
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import VList from '../list/VList'
	import VListItem from '../list/VListItem'
	
	export default{
		name:'VInfo',
		components: {VListItem, VList},
		data(){
			return{
				infos:[]
			}
		},
		created(){
			this.getInfo()
		},
		methods:{
			async getInfo(){
				const resp=await this.$axios.get(`api/repos/${this.$route.query.login }/${this.$route.query.name}`)
				this.info=resp.data
			}
		}
		
	}
</script>

<style>
</style>