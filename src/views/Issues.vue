 <template>
	<div class="issues">
		<t-app-bar icon="fas fa-arrow-left" text="Issues"></t-app-bar>
		
		<!--一个tab-->
		<div class="v_tab_bar">
			<span @click="tabName='VOpen'">OPEN</span>
			<span @click="tabName='VClosed'">CLOSED</span>
		</div>
		<keep-alive>
			<transition>
				<component :is="tabName"></component>
			</transition>
		</keep-alive>
	</div>
</template>

<script>
	import VOpen from '../components/issues/VOpen'
	import VClosed from '../components/issues/VClosed'
	import TAppBar from "../components/temp/TAppBar"
	export default {
		name: 'Notification',
		components: {
			VOpen,
			VClosed,
			TAppBar
		},
		data() {
			return {
				item:{},
				tabName: 'VClosed'
			}
		}
	}
</script>

<style scoped lang="less">
	.v_title {
		color: #fff;
		padding: 15px 0;
		display: flex;
		justify-content: space-around;
		background-color: #3F51B5;
	}

</style>