<template>
	<div class="edit_repo">
		<t-app-bar icon="fas fa-arrow-left" text="Edit the repository"></t-app-bar>
		<div>
			<v-list v-if="item.owner">
				<!--显示reponame-->
				<v-list-item>
					<p>Repository name</p>
					<P>{{item.owner.login}}</P>
				</v-list-item>
				<!--显示repo的状态-->
				<v-list-item>
					<!--<p v-if="!item.private">public</p>
					<p v-else-if="item.private">private</p>-->
					<von-toggle :text="toggleText" v-model="pushNotification"></von-toggle>
				</v-list-item>
			</v-list>
		</div>
	</div>
</template>

<script>
	import TAppBar from "../components/temp/TAppBar"
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	import VonToggle from '../components/toggle/VonToggle'
	
	export default{
		name:'EditRepo',
		components:{TAppBar,VList,VListItem,VonToggle},
		data(){
			return{
				item:{},
				toggleText: "Public",
				pushNotification: true,	//v-model通过动态绑定值到c=value,这里最初的value值为true
			}
		},
		created(){
			this.getEditRepo()
		},
		methods:{
			async getEditRepo(){
				const resp=await this.$axios.get(`api/repos/${this.$route.query.login}/${this.$route.query.name}`)
				this.item=resp.data
				console.log(resp.data.private)
			},
		}
	}
</script>

<style>
</style>