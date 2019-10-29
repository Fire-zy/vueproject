<template>
	<div class="v_nav">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'Vnav'
	}
</script>

<style>
	
	.v_nav {
		height: 50px;
		width: 100%;
		background-color: #3F51B5;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.v_nav span {
		color: #FFFFFF;
		font-size: 20px;
	}
	
	.v_nav img {
		width: 30px;
		height: 30px;
		margin-left: 15px;
	}
</style>