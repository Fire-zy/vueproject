<template>
	<li>
		<span @click="toggle">
      <em v-if="hasChild" class="far fa-star">{{open ? '-' : '+'}}</em>
      <em v-if="!hasChild" class="far fa-eye"></em>
      {{ data.url }}
    </span>
		<ul v-show="open" v-if="hasChild">
			<tree-item v-for="(item, index) in data.commit" :data="item" :key="index"></tree-item>
		</ul>
	</li>
</template>

<script>
	export default {
		name: 'TreeItem',
		props: {
			data: {
				type: [Object, Array, String, Boolean],
				required: true
			}
		},
		data() {
			return {
				open: false
			}
		},
		computed: {
			hasChild() {
				return this.data.commit && this.data.commit.length
				
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