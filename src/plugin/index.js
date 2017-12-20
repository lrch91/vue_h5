import Vue from 'vue';
import indicator from './indicator.vue'
import confirmer from './confirmer.vue'
import toast from './toast.vue'
import operator from './operator.vue'

let indicatroInstance;
let confirmerInstance;
// let toastInstances = {};
let operatorInstance;

export default {
	install: function (Vue, options) {
		Vue.prototype.$indicator=function(val){
			if(val==0){
				if (indicatroInstance) {
					indicatroInstance.visible = false;
				}
			}else if(val==1){
				if (!indicatroInstance) {
					var Indicator = Vue.extend(indicator)
					indicatroInstance = new Indicator({
						el: document.createElement('div')
					});
				}
				if (indicatroInstance.visible) return;
				document.getElementById("device_content").appendChild(indicatroInstance.$el);
			
				Vue.nextTick(() => {
					indicatroInstance.visible = true;
				});
			}
		}

		Vue.prototype.$confirmer=function(title,y_func,n_func){
			if (!confirmerInstance) {
				var Confirmer = Vue.extend(confirmer)
				confirmerInstance = new Confirmer({
					el: document.createElement('div')
				});
			}
			confirmerInstance.title=title
			confirmerInstance.confirmer_y=y_func
			confirmerInstance.confirmer_n=n_func
			
			if (confirmerInstance.visible) return;
			document.getElementById("device_content").appendChild(confirmerInstance.$el);
		
			Vue.nextTick(() => {
				confirmerInstance.visible = true;
			});
		}

		Vue.prototype.$toast=function(title){
			// for(var i in toastInstances){
			// 	if(toastInstances[i]==true){
			// 		delete toastInstances[i];
			// 	}
			// }
			var Toast = Vue.extend(toast)
			let toastInstance = new Toast({
				el: document.createElement('div')
			});
			toastInstance.title=title
			if (toastInstance.visible) return;
			document.getElementById("device_content").appendChild(toastInstance.$el);
			toastInstance.timer = window.setTimeout(function(){
				toastInstance.visible = false;
				window.clearTimeout(toastInstance.timer);
			},2000)
			Vue.nextTick(function() {
				toastInstance.visible = true;
			});
		}

		Vue.prototype.$operator=function(val){
			if(val==0){
				if (operatorInstance) {
					operatorInstance.visible = false;
				}
			}else if(val==1){
				if (!operatorInstance) {
					var Operator = Vue.extend(operator)
					operatorInstance = new Operator({
						el: document.createElement('div')
					});
				}
				if (operatorInstance.visible) return;
				document.getElementById("device_content").appendChild(operatorInstance.$el);
			
				Vue.nextTick(() => {
					operatorInstance.visible = true;
				});
			}
		}
	}
}
