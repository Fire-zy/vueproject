<template>
	<div class="vfiles">
		<v-nav>
			<i class="fas fa-less-than"></i>
		</v-nav>
	</div>
</template>

<script>
	import VNav from '../navbar/VNav'
	import TIconBar from "../temp/TIconBar"
	export default {
		name: 'VFiles',
		components: {
			VNav,
			TIconBar
		},
		data() {
			return {
			}
		}
	}
</script>

<style>
	.fas{
		margin-left: 10px;
		color: #FFFFFF;
	}
</style>