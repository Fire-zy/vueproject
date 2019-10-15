<template>
	<div class="repodetails">
		<div class="v-top" :style="{backgroundImage: 'url(' + item.owner.avatar_url + ')', backgroundSize:'100%',backgroundPosition:'12px'}">
			<div class="v-header">
				<span class="v-details-tips">
					<div class="v-details-img">
						<img src="../assets/back.png" @click="$router.back(-1)"/>
					</div>			
					<img src="../assets/StarLogo.png" />
					<img src="../assets/CodeFork.png"/>
					<img src="../assets/else.png" />
				</span>
				<span class="v-details-name">{{item.name}}</span>
				<span>Language {{item.language}},size {{item.size}}</span>
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
					<component :is="tabName" v-if="item.login"></component>
				</transition>
			</keep-alive>
	</div>
</template>

<script>
	import VInfo from '../components/repodetails/VInfo.vue'
	import VFiles from '../components/repodetails/VFiles.vue'
	import VCommits from '../components/repodetails/VCommits.vue'
	import VActivity from '../components/repodetails/VActivity.vue'
	export default {
		name: 'RepoDetails',
		data() {
			return {
				item: {},
				tabName: 'VInfo'
			}
		},
		components: {
			VInfo,
			VFiles,
			VActivity,
			VCommits
		},
		created() {
			this.getDetails()
		},
		methods: {
			getDetails() {
				this.$axios.get("api/repos/" + this.$route.query.login + "/" + this.$route.query.name)
					.then(resp => {
						this.item = resp.data
						console.log(resp)
					})
			}
		}
	}
</script>

<style>
	.v-header {
		display: flex;
		flex-direction: column;
	}
	
	.v-header span {
		width: 90%;
		height: 33%;
		display: flex;
		align-items: center;
		margin-left: 25px;
	}
	
	.v-details-name {
		font-size: 22px;
	}
	
	.v-details-tips img {
		width: 30px;
		height: 30px;
		margin-right: 15px;
	}
	
	.v-details-tips {
		display: flex;
	}
	.v-details-img{
		flex-grow: 3;
	}
	
</style>