<template>
	<!--需要router-link的时候-->
	<t-link v-if="to" :to="to">
		<i :class="icon"></i>
		<span> {{text}} </span>
	</t-link>
	
	<!--不需要router-link且有多个icon-->
	<div v-else-if="!text" class="icon">
		<div class="icon_content">
			<i class="fas fa-arrow-left" @click="$router.back(-1)"></i>
			<div class="icon_right">
				<slot></slot>
			</div>
		</div>
	</div>	
	
	<!--不需要router-link，且只有text和返回上一级-->
	<div v-else-if="!to" class="arrow-left">
		<i :class="icon"  @click="$router.back(-1)"></i>
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
		height: 50px;
		color: #FFFFFF;
		font-size: 20px;
		background-color: #3F51B5;
	}
	.icon_content{
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 90%;
		margin: 5px;
	}
	.icon_right{
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>