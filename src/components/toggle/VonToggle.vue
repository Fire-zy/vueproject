<template>
	<div class="von_toggle">
		<span v-text="text"></span>
		<span>
      <input class="mui-switch mui-switch-animbg" type="checkbox" ref="checkbox" :value="value" :checked="checked"
        @click="onToggle($event.target.checked)">
        <span>{{value}}</span>
		</span>
	</div>
</template>

<script>
	export default {
		name: 'VonToggle',
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
			editlogin:{
				type:String
			},
			editname:{
				type:String
			},
			checked:{
				type:Boolean
			}
		},
		created(){
				console.log("官方"+this.checked)
		},
		methods: {
			onToggle(value) {
				console.log("点击后"+!this.value)
				this.$emit('input', value) //点击单选框的饿时候，触发里面的@click(因为v-model提供的是value属性和oninput事件,但是在这里我们需要的是checked属性，而不是value,并且当点击单选框的时候不会触发oninput事件)
				this.$axios.patch(`api/repos/${this.editlogin}/${this.editname}`,
				{
					private:!this.value,
					is_template:this.value,
					has_wiki:this.value
				},
				{
					headers:{
						Authorization: `token ${localStorage.getItem('ACCESS_TOKEN')}`
					}
				})
				.then(()=>{
					console.log('修改成功')
				})
			} 														
		}
	}
</script>

<style scoped>
	.von_toggle{
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
	
	/*switch最基础的外边框样式*/
	.mui-switch{
		width: 52px;
		height: 31px;
		outline: none;
		position: relative;
		-webkit-appearance: none;
		border: 1px solid #dfdfdf;
		border-radius: 20px;
	}	
	
	/*switch中的白色按钮，在此之前点击无效果*/
	.mui-switch::before{
		content: '';
		width: 29px;
		height: 29px;
		position: absolute;
		border-radius: 20px;
		background-color: #FFFFFF;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
	}
	
	/*点击按钮,为true的时候.背景为绿色,否则为白色*/
	.mui-switch:checked {	/*匹配被选中的checkbox,用户通过勾选或取消勾选，来改变该元素的checked状态*/
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