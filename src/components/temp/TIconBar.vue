<template>
	<t-link v-if="to" :to="to">
		<i :class="icon"></i>
		<span> {{text}} </span>
	</t-link>
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

</style>