<template>
	<div class="issues">
		<v-nav>
			<img src="../assets/back.png" @click="$router.back(-1)" />
			<span> Issues</span>
		</v-nav>
		<div class="v_tab_bar">
			<div class="v_title">
				<span @click="tabName='VAvatar'">OPEN</span>
				<span @click="tabName='VListItem'">CLOSE</span>
			</div>
		</div>
	</div>
</template>

<script>
	import VNav from '../components/navbar/VNav'
	export default{
		name:'Issues',
		date(){
			return{
				
			}
		},
		components: {
			VNav
		}
	}
</script>

<style>
		.v_title {
		color: #fff;
		padding: 15px 0;
		display: flex;
		justify-content: space-around;
		background-color: #3F51B5;
	}
</style>