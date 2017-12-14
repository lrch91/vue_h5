import Vue from 'vue';
import indicator from './indicator.vue'

let instance;

export default {
	install: function (Vue, options) {
		Vue.prototype.$indicator=function(val){
			if(val==0){
				if (instance) {
					instance.visible = false;
				}
			}else if(val==1){
				if (!instance) {
					var Indicator = Vue.extend(indicator)
					instance = new Indicator({
						el: document.createElement('div')
					});
				}
				if (instance.visible) return;
				document.body.appendChild(instance.$el);
			
				Vue.nextTick(() => {
					instance.visible = true;
				});
			}
		}

	}
}


/* import Loading from './components/plugin.vue'

export default {
	install: function (Vue, options) {
		const VueLoading = Vue.extend(Loading)
		let loading = null
	
		function $loading() {
		  return new Promise((resolve) => {
			// 第一次调用
			if (!loading) {
			  loading = new VueLoading()
			  // 手动创建一个未挂载的实例
			  loading.$mount()
			  // 挂载
			  document.querySelector(pluginOptions.container || 'body').appendChild(loading.$el)
			}
			// 显示loading
			loading.open()
			resolve()
		  })
		}
		// 定义关闭loading方法
		$loading.end = (noAnimate = false) => {
		  return new Promise((resolve) => {
			if (!loading || !loading.isShow) {
			  resolve()
			  return
			}
			// 首页判断是否在关闭时需要动画
			if (noAnimate) {
			  // 默认只在此次行为下移除动画,之后的行为仍有动画
			  loading.removeAnimate().then(() => {
				loading.opemAnimate()
			  })
			}
	
			loading.hide()
		  })
		}
	
		Vue.loading = Vue.prototype.$loading = $loading
	},
  }; */