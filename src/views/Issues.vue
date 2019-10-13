 <template>
	<div class="issues">
		<v-nav>
			<img src="../assets/back.png" @click="$router.back(-1)" />
			<span> Issues</span>
		</v-nav>
		<div class="v_tab_bar">
			<div class="v_title">
				<span @click="tabName='VOpen'">OPEN</span>
				<span @click="tabName='VClosed'">CLOSED</span>
			</div>
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
	import VNav from '../components/navbar/VNav'
	export default {
		name: 'Notification',
		components: {
			VOpen,
			VClosed,
			VNav
		},
		data() {
			return {
				item:{},
				tabName: 'VOpen'
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