<template>
	<div class="von_toggle">
		<v-list-item>
			<span v-text="text"></span>
			<span>
	      <input class="mui-switch mui-switch-animbg" type="checkbox" ref="checkbox" :value="value" :checked="checked"
	        @click="onPrivateToggle($event.target.checked)">
	        <!--<span>{{value}}</span>-->
			</span>
		</v-list-item>
	</div>
</template>

<script>
	import VListItem from '../list/VListItem'
	
	export default {
		name: 'VonToggle',
		components:{VListItem},
		data() {
			return {

			}
		},
		props: {
			text: {
				type: String,
				required: true
			},
			value: {
				type: Boolean,
				//				required: true
			},
			checked: {
				type: Boolean
			}
		},
		created() {

		},
		methods: {
			onPrivateToggle(value) {
				this.$emit('input', value)
			},
		}
	}
</script>

<style scoped>
	.v_list_item{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	/*switch最基础的外边框样式*/
	.mui-switch {
		width: 52px;
		height: 31px;
		outline: none;
		position: relative;
		-webkit-appearance: none;
		border: 1px solid #dfdfdf;
		border-radius: 20px;
	}
	/*switch中的白色按钮，在此之前点击无效果*/
	
	.mui-switch::before {
		content: '';
		width: 29px;
		height: 29px;
		position: absolute;
		border-radius: 20px;
		background-color: #FFFFFF;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	}
	/*点击按钮,为true的时候.背景为绿色,否则为白色*/
	
	.mui-switch:checked {
		/*匹配被选中的checkbox,用户通过勾选或取消勾选，来改变该元素的checked状态*/
		border-color: #64bd63;
		box-shadow: #64bd63 0 0 0 16px inset;
		background-color: #64bd63;
	}
	/*点击按钮,白色部分移动到右边*/
	
	.mui-switch:checked::before {
		left: 21px;
	}
	/*关闭时的过渡的效果*/
	
	.mui-switch.mui-switch-animbg {
		transition: background-color ease 0.4s;
	}
	
	.mui-switch.mui-switch-animbg::before {
		transition: left 0.3s;
	}
	/*打开时的过度效果*/
	
	.mui-switch.mui-switch-animbg:checked {
		box-shadow: #dfdfdf 0 0 0 0 inset;
		background-color: #64bd63;
		transition: border-color 0.4s, background-color ease 0.4s;
	}
	
	.mui-switch.mui-switch-animbg:checked::before {
		transition: left 0.3s;
	}
</style>