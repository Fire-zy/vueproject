<template>
	<div class="box_name">{{login}}</div>
</template>

<script>
	export default {
		name: 'Name',
		data() {
			return {
				
			}
		},
		props:['login']
	}
</script>

<style>
	.box_name {
		width: 90%;
		color: #242424;
		font-size: 20px;
		margin: 10px 0 0 15px;
	}
</style>