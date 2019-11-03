<template>
	<div class="search">
		<t-app-bar icon="fas fa-arrow-left" text="Search"></t-app-bar>
		<div class="v_search_input">
			<div class="v_left"></div>
			<input class="v_input" />
			<div class="v_right">
				<img src="../assets/latticeSearch.png" />
			</div>
		</div>		
	</div>
</template>

<script>
	import TAppBar from "../components/temp/TAppBar"
	export default{
		name:'Search',
		data(){
			return{
				
			}
		},
		components:{TAppBar}
	}
</script>

<style>

	.v_search_input{
		display: flex;
		height: 400px;
		justify-content: center;
		align-items: center;
	}
	.v_input{
		width: 250px;
		height: 60px;
		outline: none;
		border: solid 3px #9ecaed ;
		border-right:none ;
		border-left:none ;
		background-color: transparent;
	}
	.v_left{
		height: 60px;
		width: 40px;
		border: solid 3px #9ecaed ;
		border-right:none ;
		border-radius: 90px 0 0 90px;
	}
	.v_right{
		height: 60px;
		width: 50px;
		border: solid 3px #9ecaed ;
		border-left:none ;
		border-radius: 0 90px 90px 0;
	}
	.v_right img{
		width: 30px;
		height: 30px;
		margin-top: 12px;
		margin-left: 8px;
	}
	.v_search_input input:focus{
		height: 60px;
		color: #3F51B5;
		font-size: 22px;
	}

</style>