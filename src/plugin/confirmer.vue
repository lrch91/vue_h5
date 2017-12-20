<template>
	<div class="confirmer" v-show="visible">
		<div class="confirmer_box">
			<span class="confirmer_h">提示</span>
			<span class="confirmer_title">{{title}}</span>
			<span class="confirmer_y" @click="confirmer_y_final()">
				确认
			</span>
			<span class="confirmer_n" @click="confirmer_n_final()">
				取消
			</span>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
        visible: false,
        title: "",
    };
  },
  components: {
  },
  methods: {
    confirmer_y(){
    },
    confirmer_n(){
    },
    confirmer_y_final(){
        this.confirmer_y()
        this.visible = false;
    },
    confirmer_n_final(){
        this.confirmer_n()
        this.visible = false;
    },
  },
  computed: {
  }
};
</script>

<style scoped>
   /* 确认对话框 */
  .confirmer{
	z-index: 10000;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(155, 156, 158, 0.8);
  }

  .confirmer_box{
	position: absolute;
	top: calc(50% - 1.5rem);
	left: 1rem;
	height: 3rem;
	width: 5.5rem;
	background-color: white;
	border-radius: 0.2rem;
  }

  .confirmer_box .confirmer_h{
	position: absolute;
	text-align: center;
	word-wrap:break-word;
	white-space:normal;
	top: 0.2rem;
	left: 0.25rem;
	width: 5rem;
	height: 0.35rem;
	font:bold .34rem "Microsoft YaHei";
  }

  .confirmer_box .confirmer_title{
	position: absolute;
	text-align: center;
	word-wrap:break-word;
	white-space:normal;
	top: .7rem;
	left: .25rem;
	width: 5rem;
	height: 1.5rem;
	font-size: .34rem;
  }

  .confirmer_box .confirmer_y{
	position: absolute;
	display: block;
	top: 2.2rem;
	left: 0;
	text-align: center;
	word-wrap:break-word;
	white-space:normal;
	height: .5rem;
	width: 2.75rem;
	padding: 0.14rem 0 0.16rem 0;
	font-size: .36rem;
	color: rgb(18, 135, 231);
	border-bottom-left-radius: 0.2rem;
	border-top: 0.01rem solid #d2e2e7;
	border-right: 0.01rem solid #d2e2e7;
  }

  .confirmer_box .confirmer_n{
	position: absolute;
	display: block;
	top: 2.2rem;
	left: 2.75rem;
	text-align: center;
	word-wrap:break-word;
	white-space:normal;
	height: .5rem;
	width: 2.75rem;
	padding: 0.14rem 0 0.16rem 0;
	font-size: .36rem;
	color: rgb(18, 135, 231);
	border-bottom-right-radius: 0.2rem;
	border-top: 0.01rem solid #d2e2e7;
	border-left: 0.01rem solid #d2e2e7;
  }
  /* 确认对话框 */
  /* 提示框框 */
  .hinter{
	z-index: 10000;
	position: absolute;
	bottom: 0.8rem;
	left: 2rem;
	width: 3.5rem;
	height: .8rem;
	background-color: rgba(0, 0, 0, 0.8);
	border-radius: 0.2rem;
  }

  .hinter_title {
	display: block;
	position: absolute;
	text-align: center;
	word-wrap:break-word;
	white-space:normal;
	top: .15rem;
	left: 0;
	height: .5rem;
	width: 3.5rem;
	font-size: .34rem;
	color: white;
  }
  /* 提示框 */
</style>