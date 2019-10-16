<template>
	<div class="v_listitem_top">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: 'VListitemtop'
	}
</script>

<style>
.v_listitem_top{
	display: flex;
	justify-content: space-between;
}
</style>