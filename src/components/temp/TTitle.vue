<template>
	<div class="t-title">
		<div class="t-name">
			<t-link v-if="login&&title" :to="`/RepoDetails?login=${login}&name=${title}`">
				<span class="t-title-name">
					{{title}}
				</span>
			</t-link>
			<t-link v-else-if="title" :to="`/User?login=${title}`">
				<span class="t-title-name">
					{{title}}
				</span>
			</t-link>
			<span class="t-sub">{{sub}}</span>
		</div>
		<span class="t-des">{{description}}</span>
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
				type: String,
				default: ''
			},
			login: {
				type: String,
			},
			description: {
				type: String
			}
		}
	}
</script>

<style scoped>
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