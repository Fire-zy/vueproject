<template>
	<v-card class="v_list_item">
		<slot></slot>
		<!--<div class="v_listitem_pic">
			<slot name="pic"></slot>
		</div>
		<div class="v_listitem_container">
			<div class="v_listitem_header v_container">
				<slot name="header"></slot>
			</div>
			<div class="v_listitem_main v_container">
				<slot name="main"></slot>
			</div>
			<div class="v_listitem_footer v_container">
				<slot name="footer"></slot>			
			</div>
		</div>-->
		<!--<v-pic>
			<slot name="pic"></slot>
		</v-pic>
		<v-header >
			<slot name="header"></slot>
		</v-header>-->
	</v-card>
</template>

<script>
	import VCard from '../simple/VCard'
//	import VPic from '../layout/VPic'
//	import VHeader from '../layout/VHeader'
//	import VMain from '../layout/VMain'
//	import VFooter from '../layout/VFooter'
	export default {
		name: 'VListItem',
		components: {
			VCard
//			VPic,
//			VHeader,
//			VMain,
//			VFooter
		}
	}
</script>

<style>
	/*布局开始*/
	.v_list_item+.v_list_item {
		padding: 5px;
		margin-top: 10px;
	}
	.v_list_item{
		display: flex;
		justify-content: flex-start;	
	}
	.v_listitem_container{
		width: 100%;
		display: flex;
		margin-right: 10px;
		flex-direction: column;
	}
	.v_listitem_header,.v_listitem_footer{
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	
	/*布局结束*/
	
	.v_listitem_footer img{
		width: 15px;
		height: 15px;
	}

	.v_container{
		margin:3px 10px 4px 5px;
	}
	.v_container a{
		color: cornflowerblue;
		text-decoration: none;
	}
	.v_listitem_header .language{
		font-size: 14px;
		color: gray;
	} 
</style>