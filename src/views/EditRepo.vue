<template>
	<div class="edit_repo">
		<t-app-bar icon="fas fa-arrow-left" text="Edit the repository"></t-app-bar>
		<div>
			<v-list v-if="item.owner">
				<!--显示reponame-->
				<t-link :to="`/EditRepoName?login=${item.owner.login}&name=${item.name}`">
					<v-list-item>
						<span>Repository name</span>
						<span>{{item.owner.login}}</span>
					</v-list-item>
				</t-link>
			
				<!--显示repo的状态-->
				<v-list-item>
					<von-toggle :text="toggleText[0]" :checked="pushNotification" :editlogin="item.owner.login" :editname="item.name" v-model="pushNotification"></von-toggle>
				</v-list-item>
				
				<v-list-item>
					<von-toggle :text="toggleText[1]" :checked="wikiState" :editlogin="item.owner.login" :editname="item.name" v-model="wikiState"></von-toggle>
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
	import TLink from "../components/temp/TLink"
	export default{
		name:'EditRepo',
		components:{TAppBar,VList,VListItem,VonToggle,TLink},
		data(){
			return{
				item:{},
				toggleText:['Public','Wiki'],
				pushNotification: '',	//v-model通过动态绑定值到value,这里最初的value值为true
				wikiState:''
			}
		},
		created(){
			this.getEditRepo()
		},
		methods:{
			async getEditRepo(){
				const resp=await this.$axios.get(`api/repos/${this.$route.query.login}/${this.$route.query.name}`)
				this.item=resp.data
				this.pushNotification=resp.data.private
				this.wikiState=resp.data.has_wiki
			},
		}
	}
</script>

<style scoped>
	.v_list_item{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>