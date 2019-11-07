<template>
	<div class="repodetails">
		<div class="v-repodetails-top" v-if="item.owner" :style="{backgroundImage: 'url(' + item.owner.avatar_url + ')', backgroundSize:'100%',backgroundPosition:'12px'}">
			<div class="v-header">
				<!--顶部的各类标识-->
				<div class="v-details-tips">
					<div class="v-details-img">
						<img src="../assets/back.png" @click="$router.back(-1)"/>
						<!--<i class="fas fa-arrow-left" @click="$router.back(-1)"></i>-->
					</div>			
					<img src="../assets/StarLogo.png" />
					<img src="../assets/CodeFork.png" @click="showPopup"/>
					<p-popup v-show="isPopupVisible" @close="closePopup" :repologin="item.owner.login" :reponame="item.name"></p-popup>
					<img src="../assets/else.png" />
				</div>
				
				<!--详细信息-->
				<div class="v-details-edit">
					<span class="v-details-name">{{item.name}}</span>
					<t-link to='/EditRepo'>
						<i class="fas fa-edit"></i>
					</t-link>
				
				</div>
				<div class="v-details-language">
					<span>Language {{item.language}},size {{item.size}}</span>
				</div>
			</div>
		</div>
		<!--tab的切换-->
		<div class="v_tab_bar">
				<span @click="tabName='VInfo'">INFO</span>
				<span @click="tabName='VFiles'">FILES</span>
				<span @click="tabName='VCommits'">COMMITS</span>
				<span @click="tabName='VActivity'">ACTIVITY</span>
			</div>
			<keep-alive>
				<transition>
					<!--有parentlogin的时候-->
					<component :is="tabName" v-if="item.parent" :repologin="item.owner.login" :reponame="item.name" :parentlogin="item.parent.owner.login"></component>
					<!--无parentlogin的时候-->
					<component :is="tabName" v-else-if="item.owner" :repologin="item.owner.login" :reponame="item.name" ></component>
				</transition>
			</keep-alive>
	</div>
</template>

<script>
	import VInfo from '../components/repodetails/VInfo.vue'
	import VFiles from '../components/repodetails/VFiles.vue'
	import VCommits from '../components/repodetails/VCommits.vue'
	import VActivity from '../components/users/Activity.vue'
	import PPopup from '../components/popup/PPopup.vue'
	import TLink from "../components/temp/TLink"
	export default {
		name: 'RepoDetails',
		data() {
			return {
				item: {},
				tabName: 'VInfo',
				isPopupVisible: false
			}
		},
		components: {
			VInfo,
			VFiles,
			VActivity,
			VCommits,
			PPopup,
			TLink
		},
		created() {
			this.getDetails()
		},
		methods: {
			async getDetails() {
				const resp=await this.$axios.get(`api/repos/${this.$route.query.login}/${this.$route.query.name}`)
				this.item=resp.data
			},
			showPopup(){ this.isPopupVisible = true }, //弹出Popup窗口
			closePopup(){ this.isPopupVisible = false }	//关闭Popup窗口
		}
	}
</script>

<style>
	.v-details-name {
		font-size: 22px;
	}
	
	.v-details-edit{
		display: flex;
		margin: 25px 0 18px 0;
		align-items: center;
	}
	.v-details-language{
		
	}
	.v-header{
		padding: 10px;
		display: flex;
		flex-direction: column;
	}
	.v-details-tips img {
		width: 30px;
		height: 30px;
		margin-right: 15px;
	}
	.v-details-tips{
		display: flex;
	}
	.v-details-img{
		flex-grow: 3;
	}
	
</style>