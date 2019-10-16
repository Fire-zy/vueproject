<template>
	<div class="v_base_layout">
		<v-pic>
			<slot name="pic"></slot>
		</v-pic>
		<v-header>
			<slot name="header"></slot>
		</v-header>
		<v-main></v-main>
		<v-footer></v-footer>
	</div>
</template>

<script>
	import VPic from '../layout/VPic'
	import VHeader from '../layout/VHeader'
	import VMain from '../layout/VMain'
	import VFooter from '../layout/VFooter'
	export default{
		name:'VBaseLayout',
		components: {
			VPic,
			VHeader,
			VMain,
			VFooter
		}
	}
</script>

<style>
</style>