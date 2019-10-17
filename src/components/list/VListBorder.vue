<template>
	<v-card class="v_list_border">
		<slot></slot>
	</v-card>
</template>

<script>
	import VCard from '../simple/VCard'
	export default {
		name: 'VListBorder',
		components: {
			VCard
		}
	}
</script>

<style>

	.v_list_item+.v_list_item {
		padding: 5px;
		margin-top: 10px;
	}
 
</style>