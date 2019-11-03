<!--Issues中的VClosed组件-->
<template>
	<div>
		<!--如果没有数据，则显示No Issues-->
		<span v-if="flag" class="v-tips">No Issues</span>
		<!--如果有数据就显示下面的数据-->
		<v-list>
			<v-list-item v-for="event in events" :key="event.id" >
				<!--listitem左边的头像-->
				<t-avatar :url="event.issue.user.avatar_url"></t-avatar>
				
					<!--listitem右边的信息-->
					<div class="v_open_right" :events="event.id">
						<t-link :to="`/IssuesEdit?login=${event.actor.login}&name=${closedname.name}&id=${event.id}`">
							<t-title :title="event.issue.user.login" :sub="event.created_at|dateFrm" :to="`/User?login=${event.issue.user.login}`"></t-title>
							<t-title :description="event.issue.title || ''"></t-title>
						
							<!--listitem右边部分底部的标识-->
							<div class="t-event-appender">
								<t-icon-bar icon="far fa-edit" :text="event.issue.number" to="/"></t-icon-bar>
								<t-icon-bar icon="far fa-comment" :text="event.issue.comments" to="/"></t-icon-bar>
							</div>
						</t-link>	
					</div>
			</v-list-item>
		</v-list>
	</div>
</template>

<script>
	import moment from 'moment'
	import VList from '../list/VList'
	import VListItem from '../list/VListItem'
	import TAvatar from "../temp/TAvatar"
	import TTitle from "../temp/TTitle"
	import TIconBar from "../temp/TIconBar"
	import TLink from '../temp/TLink'
	export default{
		name:'VOpen',
		components: {
			VListItem,
			VList,
			TAvatar,
			TTitle,
			TIconBar,
			TLink
		},
		data(){
			return{
				opening:{},
				flag:false,
				events:[],
				closedname:{}
			}
		},
		filters: {		//moment.js的过滤器
			dateFrm: function(el) {
				return moment(el).format('ll');
			}
		},
		created() {
//			如果有链接传过来的参数，就调用getIssuesEvents()
			if(this.$route.query.login){
				this.getIssuesEvents()
			}else{
				this.getVAll()		//如果没有链接传过来的参数，就调用getVAll()
			}
		},
		methods: {
			getVAll() {
				this.$axios.get("/api/issues",{
					headers: {
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
					.then(resp => {	
						if(resp.data.length!=0){
							this.opening = resp.data	
						}else{
							this.flag=true
						}
					})
			},
			async getIssuesEvents() {
				const resp = await this.$axios.get(`api/repos/${this.$route.query.login}/${this.$route.query.name}/issues/events`)
				for(let v of resp.data){	//遍历数据
					if(v.event=="closed"){	//将event为closed状态的数据存入新的数组中
						this.events.push(v)
						this.$set(this.closedname,'name',`${this.$route.query.name}`)	//取得项目的name，存入data中closedname中
					}
				}	
			}
		}
	}
</script>

<style scoped>
	.v_list_item{
		display: flex;
	}
	.v_open_right{
		flex-grow: 1;
	}
	.t-event-appender{
		color: #999999;
		font-size: 12px;
		display: flex;
		margin-right: 10px;
		justify-content: space-between;
	}
</style>