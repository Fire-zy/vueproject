<!--是项目主组件，也是项目所有组件和路由的出口，
之后它会被渲染到项目根目录的 index.html 中显示出来，
我们可以在这里写一些适合全局的css样式。-->
<template>
	<div>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		name: 'App'
	}
</script>

<style lang="less">
	* {
		margin: 0;
		padding: 0;
	}
	
	.v-tips {
		width: 100%;
		height: 500px;
		display: flex;
		color: #808080;
		align-items: center;
		justify-content: center;
		font-size: 25px;
	}
	
	.v-header {
		width: 100%;
		height: 150px;
		color: #FFFFFF;
		background-color: rgba(63, 81, 181, 0.9);
	}
	
	.v-top {
		width: 100%;
		height: 150px;
	}
	
	.v_tab_bar {
		color: #fff;
		padding: 15px 0;
		display: flex;
		justify-content: space-around;
		background-color: #3F51B5;
	}
</style>