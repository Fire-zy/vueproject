<template>
	<div>
		<t-app-bar icon="fas fa-arrow-left" text="Global News"></t-app-bar>
		<component :is="tabName"></component>
	</div>
</template>

<script>
	import TAppBar from "../components/temp/TAppBar"
	import VActivity from '../components/users/Activity.vue'
	export default {
		name: 'Event',
		components: {
			TAppBar,
			VActivity
		},
		data() {
			return {
				activity: [],
				tabName: 'VActivity'
			}
		}
	}
</script>

<style>
	.v_list_item {
		display: flex;
		flex-direction: column;
	}
	
	.message_box {
		display: flex;
		width: 100%;
	}
	
	/*.t-title {
		display: flex;
		width: 100%;
		padding: 3px;
		justify-content: space-between;
	}*/
	
	.push_box {
		margin: 5px;
	}
</style>