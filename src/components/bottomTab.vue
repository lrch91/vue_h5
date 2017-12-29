<template>
	<div class="bottom_tab" v-show="getBottomTabType!=0">
		<button v-if="getBottomTabType==1" class="back_button">
				关闭
			</button>
		<button v-if="getBottomTabType==1" @click="to_submit()" class="tofill_button">
				填写处理意见
			</button>
		<div class="general_btn" v-if="getBottomTabType==2">
			<button class="select_all">全选</button>
			<button class="cancel_sel">取消选中</button>
			<button class="confirm">确定</button>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'
	export default {
		data() {
			return {}
		},
		methods: {
			to_submit() {
				this.$router.push('/writeOpinion')
				// this.$router.push({path:'/writeOpinion',params: {selected: "2"}})
			}
		},
		computed: {
			...mapGetters(['getBottomTabType'])
		}
	}
</script>

<style scoped>
	.bottom_tab {
		z-index: 99999;
		position: fixed;
		/* position: absolute; */
		width: 100%;
		height: 0.98rem;
		background-color: rgba(155, 156, 158, 0.6);
		bottom: 0;
	}
	.back_button {
		position: absolute;
		margin-left: 0.28rem;
		margin-top: 0.2rem;
		height: 0.58rem;
		width: 1.1rem;
		background: #F94F09;
		border-radius: 0.1rem;
		text-align: center;
		text-decoration: none;
		border: transparent;
		color: white;
		font-size: 0.3rem;
	}
	.tofill_button {
		position: absolute;
		margin-left: 1.58rem;
		margin-top: 0.2rem;
		height: 0.58rem;
		width: 2.4rem;
		background: #0BA2FE;
		border-radius: 0.1rem;
		text-align: center;
		text-decoration: none;
		border: transparent;
		color: white;
		font-size: 0.3rem;
	}
	.general_btn {
		position: absolute;
		top: 0.07rem;
		left: 0;
		width: 100%;
		height: .84rem;
	}
	button {
		outline: none;
	}
	.general_btn button {
		width: 1.98rem;
		height: .84rem;
		float: left;
		line-height: .84rem;
		margin-left: .42rem;
		border: 2px solid #11a9ec;
		background-color: #fafafa;
		font-size: .3rem;
		color: #11a9ec;
		border-radius: 0.1rem;
	}
	.confirm {
		background-color: #11a9ec;
		color: #fafafa;
		border-radius: 0.1rem;
	}
</style>