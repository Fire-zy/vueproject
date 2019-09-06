<template>
	<div class="subnav">
		<div class="column">
			<p class="date">{{followers}}</p>
			<p>跟随着</p>
		</div>
		<div class="column">
			<p class="date">{{following}}</p>
			<p>跟随</p>
		</div>
		<div class="column">
			<p class="date">{{public_repos}}</p>
			<p>版本库</p>
		</div>
		<div class="column">
			<p class="date">{{public_gists}}</p>
			<p>主题帖</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Subnav',
		data() {
			return {

			}
		},
		props: ['followers', 'following', 'public_repos', 'public_gists']
	}
</script>

<style>
	.subnav {
		width: 100%;
		text-align: center;
		display: flex;
		justify-content: space-around;
	}
	
	.column {
		font-size: 14px;
		margin: 10px 0 20px 7px;
	}
	
	.column .date {
		font-size: 18px;
	}
	
	.column p {
		margin-top: 10px;
	}
</style>