<template>
	<!--需要router-link的时候-->
	<t-link v-if="to" :to="to">
		<i :class="icon"></i>
		<span> {{text}} </span>
	</t-link>
	
	<!--不需要router-link且有多个icon-->
	<div v-else-if="!text" class="icon">
		<i class="fas fa-less-than" @click="$router.back(-1)"></i>
		<div class="icon_right">
			<slot></slot>
		</div>
	</div>	
	
	<!--不需要router-link，且只有text和返回上一级-->
	<div v-else-if="!to">
		<i :class="icon"></i>
		<span> {{text}} </span>
	</div>

</template>

<script>
	import TLink from "./TLink";
	export default {
		name: 'TIconBar',
		components: {
			TLink
		},
		props: {
			to: {
				type: [String, Object]
			},
			icon: {
				type: String
			},
			text: {
				type: [String, Number]
			}
		}
	}
</script>

<style scoped>
	.icon{
		display:flex;
		padding: 15px;
		color: #FFFFFF;
		justify-content: space-between;
	}
	.icon_right{
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
</style>