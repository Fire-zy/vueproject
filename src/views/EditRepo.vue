<template>
	<div class="edit_repo">
		<t-app-bar icon="fas fa-arrow-left" text="Edit the repository"></t-app-bar>
		<div>
			<v-list>
				<v-list-item>
					<span>Repository name</span>
				</v-list-item>
			</v-list>
		</div>
	</div>
</template>

<script>
	import TAppBar from "../components/temp/TAppBar"
	import VList from '../components/list/VList'
	import VListItem from '../components/list/VListItem'
	export default{
		name:'EditRepo',
		components:{TAppBar,VList,VListItem}
	}
</script>

<style>
</style>