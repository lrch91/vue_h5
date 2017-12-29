import Vue from 'vue';
import indicator from './indicator.vue'
import confirmer from './confirmer.vue'
import toast from './toast.vue'
import toast2 from './toast2.vue'
import operator from './operator.vue'

let indicatroInstance;
let confirmerInstance;
let toastInstance;
var interval
var intervalTag=false
var toastArr=[]
let operatorInstance;
var showInstance

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
			if(confirmerInstance){
				var list = document.getElementsByClassName("confirmer");
				if((!list)||(!list[0])){
					confirmerInstance = null
				}
			}
			if (!confirmerInstance) {
				var Confirmer = Vue.extend(confirmer)
				confirmerInstance = new Confirmer({
					el: document.createElement('div')
				});
			}
			confirmerInstance.title=title
			confirmerInstance.confirmer_y=y_func
			confirmerInstance.confirmer_n=n_func
			confirmerInstance.open=true
			confirmerInstance.close=false
			
			if (confirmerInstance.visible) return;
			document.getElementById("device_content").appendChild(confirmerInstance.$el);
		
			Vue.nextTick(() => {
				confirmerInstance.visible = true;
			});
		}

		Vue.prototype.$toast=function(title){
			if(toastInstance){
				var list = document.getElementsByClassName("toast");
				if((!list)||(!list[0])){
					toastInstance = null
				}
			}
			if(!toastInstance){
				var Toast = Vue.extend(toast)
				toastInstance = new Toast({
					el: document.createElement('div')
				});
				toastInstance.visible = false
				toastArr=[]
				document.getElementById("device_content").appendChild(toastInstance.$el);
			}
			toastArr.push({title:title})
			if(!intervalTag){
				intervalTag = true
				interval = window.setInterval(function(){
					toastInstance.title = toastArr[0].title
					toastInstance.timer = window.setTimeout(function(){
						toastInstance.visible = false
					},500)
					toastArr.splice(0,1)
					if(toastArr.length==0){
						window.clearInterval(interval)
						intervalTag = false
					}
					Vue.nextTick(function(){
						toastInstance.visible = true
					})
				},600)
			}
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

		Vue.prototype.$show=function(val){
			if(showInstance){
				var list = document.getElementsByClassName("toast");
				if((!list)||(!list[0])){
					showInstance = null
				}
			}
			if (!showInstance) {
				var Toast = Vue.extend(toast2)
				showInstance = new Toast({
					el: document.createElement('div')
				});
			}
			if (showInstance.visible) return;
			document.getElementById("device_content").appendChild(showInstance.$el);
			showInstance.title = val
		
			Vue.nextTick(() => {
				showInstance.visible = true;
				var timeOut = window.setTimeout(()=>{
					showInstance.titile = ''
					showInstance.visible = false;
					window.clearTimeout(timeOut)
				},10000)
			});
		}
	}
}
