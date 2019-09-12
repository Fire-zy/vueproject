<template>
	<v-list>
		<div class="main">
			<ul>
				<li>
					<Name :login='login'></Name>
					<Personal :bio="bio" :company="company" :blog="blog"></Personal>
					<Subnav :followers="followers" :following="following" :public_repos="public_repos" :public_gists="public_gists"></Subnav>
				</li>
			</ul>
		</div>
	</v-list>
</template>

<script>
	import VList from '../components/list/VList'
	import Name from '@/components/Name.vue'
	import Personal from '@/components/Personal.vue'
	import Subnav from '@/components/Subnav.vue'
	export default {
		name: 'List',
		components: {
			VList,
			Name,
			Personal,
			Subnav
		},
		data() {
			return {
				list: []
			}
		},
		props: ['login','bio','company','box_location','blog','followers','following','public_repos','public_gists']
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	
	.main {
		width: auto;
		list-style: none;
		min-height: 80px;
		overflow: hidden;
		margin: 10px 10px 0 10px;
		box-shadow: 1px 1px 5px 1px #d7d7d7;
	}
</style>