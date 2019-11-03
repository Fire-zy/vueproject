4<template>
	<div class="t-title" v-if="title||description">
		<div class="t-name">
			<t-link v-if="to" :to="to">
				<span class="t-title-name">
					{{title}}
				</span>
			</t-link>
			<span class="t-sub" v-if="sub">{{sub}}</span>
		</div>
		<span class="t-des" v-if="description">{{description}}</span>
	</div>
</template>

<script>
	import TLink from "../temp/TLink"
	export default {
		name: 'TTitle',
		components: {
			TLink
		},
		props: {
			title: {
				type: String,
			},
			sub: {
				type: [String,Number],
				default: ''
			},
			login: {
				type: String,
			},
			description: {
				type: String
			},
			to:{
				type: [String, Object]
			}
		}
	}
</script>

<style>
	.t-sub {
		font-size: 12px;
		color: #666;
		margin-right: 10px;
	}
	.t-des{
		width: 100%;
	}
	.t-name{
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.t-title {
		margin-bottom: 5px;
	}
	.t-title-name{
		color: #6495ED;
	}
</style>