<template>
	<div>
		<!--<t-app-bar icon="fas fa-arrow-left" text="Edit the repository name"></t-app-bar>-->
		<t-icon-bar>
			<span>AddLicense</span>
			<span>完成</span>
		</t-icon-bar>
		<div class="Add_license_list">
			<ul>
				<li v-for="(list,index) in lists" :key="index" 
					:class="flag==index?'choosed':'choosed1'" 
					@click="choosePay(index)"> {{list}}
				</li>
			</ul>

		</div>
	</div>
</template>

<script>
	import TIconBar from "../components/temp/TIconBar"
	export default {
		name: 'AddLicense',
		components: {
			TIconBar
		},
		data() {
			return {
				lists:[
					'None',
					'GNU General Public License v3.0',
					'MIT License',
					'BSD 2-Clause "Simplified" License',
					'BSD 3-Clause "New" or "Revised" License',
					'Eclipse Public License 2.0',
					'GNU Affero General Public License v3.0',
					'GNU General Public License v2.0',
					'GNU Lesser General Public License v2.1',
					'GNU Lesser General Public License v3.0',
					'Mozilla Public License 2.0',
					'The Unlicense'
				],
				flag:-1,
				license:''
			}
		},
		created() {
		},
		methods:{
			choosePay (index) {
				this.flag = index
	     	this.license = this.lists[index]
	     	this.$router.push(`/CreateNewRepo?license=${this.license}`)
			},
		}
	}
</script>

<style scoped>
	ul,li{
   display: flex;
   flex-wrap: wrap;
  }
  li{
    width:29%;
    word-wrap: break-word;
    word-break: break-word;
    margin:5px 5px;
    padding:10px 0;
    font-size: 0.8em;
    border-radius: 5px;
    justify-content: center;
		align-items: center;
  }
  .choosed{
    color: #fff;
    border: 1px solid #0e93f6;
    background-color: #0e93f6;
  }
  .choosed1{
    color: #7c7e7e;
    border: 1px solid #7c7e7e;
  }

</style>