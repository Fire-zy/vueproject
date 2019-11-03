<template>
	<div>
	<span v-if="flag" class="v-tips">No Notifications</span>
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
	export default{
		name:'VAll',
		components: {
			VListItem,
			VList
		},
		data(){
			return{
				all:{},
				flag:false
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
						if(resp.data.length!=0){	//如果有数据，则存入all中
							this.all = resp.data							
						}else{
							this.flag=true //否则flag为true,显示No Notifications
						}				
					})
			}
		}
	}
</script>

<style>
</style>