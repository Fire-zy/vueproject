<template>
	<div class="treeitem">
		<li>
			<span @click="toggle">
	      <em v-if="hasChild" class="far fa-file">{{open ? '-' : '+'}}</em>
	      <em v-if="!hasChild" class="far fa-file-code-o"></em>
	      {{ data.type }}
	    </span>
			<ul v-show="open" v-if="hasChild">
				<tree-item v-for="(item, index) in data.tree" :data="item" :key="index"></tree-item>
			</ul>
		</li>
	</div>
</template>

<script>
	export default {
		name: 'TreeItem',
		props: {
			data: {
				type: [Object,Array],
				required: true
			}
		},
		data() {
			return {
				open: false
			}
		},
		created(){
//			console.log("没调用之前")
//			console.log(this.data)
		},
		computed: {
			hasChild() {
				return this.data.tree && this.data.tree.length
			}
		},
		methods: {
			toggle() {
				if(this.hasChild) {
					this.open = !this.open
				}
			}
		}
	}
</script>

<style>
	ul {
		list-style: none;
		margin: 10px 0;
	}
	
	li {
		padding: 3px 0;
	}
	
	li>span {
		cursor: pointer;
		font-size: 14px;
		line-height: 20px;
	}
	
	li>span:visited {
		background: #fff;
	}
	
	em.far {
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-right: 5px;
		background-repeat: no-repeat;
		vertical-align: middle;
	}
	
	.tree-menu li {
		line-height: 1.5;
	}
</style>