<template>
	<div class="edit_repo">
		<t-app-bar icon="fas fa-arrow-left" text="Edit the repository"></t-app-bar>
		<div>
			<v-list v-if="item.owner">
				<!--显示reponame-->
				<t-link :to="`/EditRepoName?login=${item.owner.login}&name=${item.name}`">
					<v-list-item>
						<span>Repository name</span>
						<span>{{item.name}}</span>
					</v-list-item>
				</t-link>
				
				<t-link :to="`/EditDescription?login=${item.owner.login}&name=${item.name}`">
					<v-list-item>
						<span>Description</span>
						<span class="edit_content">{{item.description}}</span>
					</v-list-item>
				</t-link>
				
				<t-link :to="`/EditDefaultBranch?login=${item.owner.login}&name=${item.name}`">
					<v-list-item>
						<span>EditDefaultBranch</span>
						<span class="edit_content">{{item.default_branch}}</span>
					</v-list-item>
				</t-link>
				
				<!--切换private-->
				<v-list-item>
					<von-toggle @input="onPrivateToggle()" :text="toggleText[0]" :checked="pushNotification"  v-model="pushNotification"></von-toggle>
				</v-list-item>
				
				<!--切换wiki-->
				<v-list-item>
					<von-toggle @input="onWikiToggle()" :text="toggleText[1]" :checked="wikiState" v-model="wikiState"></von-toggle>
				</v-list-item>
				
				<!--切换issues-->
				<v-list-item>
					<von-toggle  @input="onIssuesToggle()" :text="toggleText[2]" :checked="IssuesState" v-model="IssuesState"></von-toggle>
				</v-list-item>
				
				<!--切换Project-->
				<v-list-item>
					<von-toggle  @input="onProjectToggle()" :text="toggleText[3]" :checked="Project" v-model="Project"></von-toggle>
				</v-list-item>
				
				<!--切换Template-->
				<v-list-item v-if="Template">
					<von-toggle  @input="onTemplateToggle()" :text="toggleText[4]" :checked="Template" v-model="Template"></von-toggle>
				</v-list-item>
				
				<!--切换archived-->
				<v-list-item>
					<von-toggle  @input="onArchivedToggle()" :text="toggleText[5]" :checked="Archived" v-model="Archived"></von-toggle>
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
				toggleText:['Private','Wiki','Issues','Project','Template','Archived'],
				pushNotification: '',	//v-model通过动态绑定值到value,这里最初的value值为true
				wikiState:'',
				IssuesState:'',
				Project:'',
				Template:'',
				Archived:''
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
				this.IssuesState=resp.data.has_issues
				this.Project=resp.data.has_projects,
				this.Template=resp.data.is_template
				this.Archived=resp.data.archived
			},
			
			onPrivateToggle(){
				this.send({private:this.pushNotification})
			},
			onWikiToggle(){
				this.send({has_wiki:this.wikiState})
			},
			onIssuesToggle(){
				this.send({has_issues:this.IssuesState})
			},
			onProjectToggle(){
				this.send({has_projects:this.Project})	
			},
			onTemplateToggle(){
				this.send({is_template:this.Template})	
			},
			onArchivedToggle(){
				this.send({archived:this.Archived})	
			},
			
//			提交参数的公共方法
			send(params){
				this.$axios.patch(`api/repos/${this.$route.query.login}/${this.$route.query.name}`,params,
				{
					headers:{
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
				.then(()=>{
					console.log('修改成功')
				})
			}
		}
	}
</script>

<style scoped>
	.v_list_item{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.edit_repo .edit_content{
		width: 53px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
</style>