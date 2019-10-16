<template>
	<v-card class="v_list_item">
		<!--<slot></slot>-->
		<div class="v_listitem_pic">
			<slot name="pic"></slot>
		</div>
		<div class="v_listitem_container">
			<div class="v_listitem_header">
				<slot name="header"></slot>
			</div>
			<div class="v_listitem_main">
				<slot name="main"></slot>
			</div>
			<div class="v_listitem_footer">
				<slot name="footer"></slot>			
			</div>
		</div>
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
	import VPic from '../layout/VPic'
	import VHeader from '../layout/VHeader'
	import VMain from '../layout/VMain'
	import VFooter from '../layout/VFooter'
	export default {
		name: 'VListItem',
		components: {
			VCard,
			VPic,
			VHeader,
			VMain,
			VFooter
		}
	}
</script>

<style>
	.v_list_item+.v_list_item {
		padding: 5px;
		margin-top: 10px;
	}
	.v_list_item{
		display: flex;
		
	}
	
	.v_listitem_pic{
		width: 10%;
	}
	.v_listitem_container{
		width: 90%;
	}
	.v_listitem_header{
		display: flex;
		justify-content: space-between;
	}
	.v_listitem_footer img{
		width: 15px;
		height: 15px;
	}
	
</style>