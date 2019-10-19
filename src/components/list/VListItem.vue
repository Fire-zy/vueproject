<template>
	<v-card class="v_list_item">
		<slot></slot>
	</v-card>
</template>

<script>
	import VCard from '../simple/VCard'
	export default {
		name: 'VListItem',
		components: {
			VCard
		}
	}
</script>

<style>
	.v_list_item+.v_list_item {
		padding: 10;
		margin-top: 10px;
	}
	
</style>