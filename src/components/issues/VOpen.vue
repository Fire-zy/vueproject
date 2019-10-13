<template>
	<div>
	<span v-if="flag" class="v-tips">No Issues</span>
	<v-list>
		<v-list-item v-for="item in opening" :key="item.id">
		
		</v-list-item>
	</v-list>
	</div>
</template>

<script>
	import moment from 'moment'
	import VList from '../list/VList'
	import VListItem from '../list/VListItem'
//	import VAvatar from '../simple/VAvatar'
	export default{
		name:'VOpen',
		components: {
//			VAvatar,
			VListItem,
			VList
		},
		data(){
			return{
				opening:{},
				flag:false
			}
		},
		filters: {
			dateFrm: function(el) {
				return moment(el).format('ll');
			}
		},
		created() {
			this.getVAll()
		},
		methods: {
			getVAll() {
				this.$axios.get("/api/issues",{
					headers: {
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
					.then(resp => {			
						if(resp.data.length=0){
							this.opening=resp.data
						}else{
							this.flag=true
						}
					})
			}
		}
	}
</script>

<style>
</style>