<template>
	<div class="personal">
		<div class="box_motto">{{bio}}</div>
		<div class="box_email">
			<img src="../assets/work.png" /> {{company}}
		</div>
		<div class="box_location">
			<img src="../assets/link.png" /> {{blog}}
		</div>
	</div>

</template>

<script>
	export default {
		name: 'Personal',
		data() {
			return {
				
			}
		},
		props:['bio','company','blog']
	}
</script>

<style>
	.box_location,
	.box_email,
	.box_motto {
		width: 90%;
		display: flex;
		margin: 15px 0 0 15px;
	}
	
	.personal img {
		width: 25px;
		height: 25px;
		margin-top: -4px;
		margin-right: 3px;
	}
</style>