<template>
	<div>
		<v-nav>
			<img src="../assets/back.png" @click="$router.back(-1)" />
			<span> Global News</span>
		</v-nav>
		<component :is="tabName"></component>
	</div>
</template>

<script>
	import VNav from '../components/navbar/VNav'
	import VActivity from '../components/users/Activity.vue'
	export default {
		name: 'Event',
		components: {
			VNav,
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
	
	.t-title {
		display: flex;
		width: 100%;
		padding: 3px;
		justify-content: space-between;
	}
	
	.push_box {
		margin: 5px;
	}
</style>