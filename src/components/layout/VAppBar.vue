<template>
	<div class="tab">
		<component v-bind:is="change" class="tab"></component>
	
		<div class="v_app_bar">
			<button v-for="(tab,curTab) in tabs" :key="tab" @click="tabIndex=curTab">
				{{tab}}
			</button>
		</div>
	</div>
</template>

<script>
	import List from '@/components/List.vue'
	import Activity from '@/views/Activity.vue'
	import Star from '@/views/Star.vue'
	export default {
		name: 'VAppBar',
		data() {
			return {
				item: {},
				tabIndex: 'home',
				tabs: ['信息', '活动', '星标'],
				status: ['List', 'Activity', 'Star']
			}
		},
		components: {
			List,
			Activity,
			Star
		},
		computed: {
			change() {
				return this.status[this.tabIndex]
			}
		}
	}
</script>

<style scoped lang="less">
	.v_app_bar button{
		color: #fff;
		padding: 15px 0;
	 	display: flex;
		justify-content: space-around;
		background-color: #3f51b5;
	}
</style>