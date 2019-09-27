<template>
	<div class="homepage">
		<div class="v-user-pic">
			<img />
		</div>
		<div class="v-lattice-one">
			<div class="v-lattice-left">
				<img src="../assets/latticeUser.png" class="lattice-pic" />
				<span>Message</span>
			</div>
			<div class="v-lattice-center">
				<img src="../assets/latticeRepo.png" />
				<span>Repo</span>
			</div>
			<div class="v-lattice-right">
				<img src="../assets/latticeRepo.png" />
				<span>Repo</span>
			</div>
		</div>
		<div class="v-lattice-two">
			<div class="v-lattice-left"></div>
			<div class="v-lattice-center"></div>
			<div class="v-lattice-right"></div>
		</div>
		<div class="v-lattice-three">
			<div class="v-lattice-left"></div>
			<div class="v-lattice-center"></div>
			<div class="v-lattice-right"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'HomePage'
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.homepage img {
		width: 80px;
		height: 80px;
	}
	
	.v-user-pic {
		width: 100%;
		height: 150px;
	}
	
	.v-lattice-one,
	.v-lattice-two,
	.v-lattice-three {
		width: 100%;
		height: 150px;
		display: flex;
		justify-content: flex-start;
		border-bottom: solid 2px lightskyblue;
	}
	
	.v-lattice-one {
		border-top: solid 2px lightskyblue;
	}
	
	.v-lattice-left,
	.v-lattice-center,
	.v-lattice-right {
		width: 33.3%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		border-right: solid 2px lightskyblue;
	}
	
	.v-user-pic {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.v-user-pic img {
		width: 120px;
		height: 120px;
		background-color: aqua;
	}
</style>