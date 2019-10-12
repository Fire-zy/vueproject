<template>
	<div>
	<v-list>
		<v-list-item v-for="item in all" :key="item.id">
			<span v-if="item==false">there is nothing</span>
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
		name:'VAll',
		components: {
//			VAvatar,
			VListItem,
			VList
		},
		data(){
			return{
				all:{}
			}
		},
		props:['login'],
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
				this.$axios.get("/api/notifications?all",{
					headers: {
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
					.then(resp => {
						if(resp.data==null){
							this.all=false
						}else{
							this.all = resp.data
						}					
						console.log(resp)
					})
			}
		}
	}
</script>

<style>
</style>