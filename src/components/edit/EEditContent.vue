--<template>
	<div class="e_edit_content">
		<v-list>
			<t-link :to="to">
				<v-list-item>
					<span>{{title}}</span>
					<span>{{content}}</span>
				</v-list-item>
			</t-link>
		</v-list>
	</div>
</template>

<script>
	import VList from '../list/VList'
	import VListItem from '../list/VListItem'
	import TLink from "../temp/TLink"
	export default {
		name: 'EEditContent',
		components: {
			VListItem,
			VList,
			TLink,
		},
		props:{
			to:{
				type: [String, Object]
			},
			title:{
				type:	String
			},
			content:{
				type:	String
			}
		}
			
	}
</script>

<style scoped lang="less">
	.v_list_item{
		display: flex;
		margin: 10px 0;
		justify-content: space-between;
		align-items: center;
	}
</style>