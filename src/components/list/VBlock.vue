<template>
	<div class="v_block">
		<t-link :to="toblock">
			<div class="v_block_item">
				<span class="v_block_p">{{para}}</span>
				<span>{{text}}</span>
			</div>
		</t-link>
	</div>
</template>

<script>
	import TLink from "../temp/TLink"
	export default{
		name:'VBlock',
		components:{TLink},
		props:{
			para:{
				type: Number
			},
			text:{
				type: String
			},
			toblock:{
				type: [String,Object]
			}
		}
	}
</script>

<style scoped>
	.v_block_item{
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 15px;
	}
	.v_block_p{
		margin-bottom: 10px;
	}
</style>