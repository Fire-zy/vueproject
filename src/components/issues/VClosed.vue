<template>
	<div>
	<v-list>
		<v-list-item v-for="item in closed" :key="item.id">
			<span>there is nothing</span>
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
		name:'VClosed',
		components: {
//			VAvatar,
			VListItem,
			VList
		},
		data(){
			return{
				closed:{}
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
				this.$axios.get("/api/issues",{
					headers: {
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
					.then(resp => {			
						this.closed = resp.data				
						console.log(resp)
					})
			}
		}
	}
</script>

<style>
</style>