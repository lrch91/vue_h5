<template>
  <div id="device_content">
	<div class="modal_bg" v-show="modal1_state||modal2_state"></div>
	<div class="modal_p1" v-show="modal1_state">
		<div class="modal_title">
			<span class="title1_text">路径选择</span>
		</div>
		<div class="modal1_items">
			<div v-for="item in queryStep.colmInfo" @click="modal1_items_choose(item.colmId)" class="modal1_item">
				<img v-show="item.imgState" src="../assets/img/check_54.png">
				<img v-show="!(item.imgState)" src="../assets/img/uncheck_54.png">
				<span>{{item.colmValue}}</span>
			</div>
		</div>
		<div class="modal1_oprt">
			<span class="modal1_oprt_y" @click="modal1_y()">确定</span>
			<span class="modal1_oprt_n" @click="modal1_n()">取消</span>
		</div>
	</div>

	<div class="modal_p2" v-show="modal2_state">
		<div class="modal_title">
			<span class="title2_text">提交人选择</span>
		</div>
		<div class="modal2_items">
			<div v-for="item in queryUser.colmInfo" @click="modal2_items_choose(item.colmId)" class="modal2_item" >
				<img v-show="item.imgState" src="../assets/img/check_54.png">
				<img v-show="!(item.imgState)" src="../assets/img/uncheck_54.png">
				<span>{{item.colmValue}}</span>
			</div>
		</div>
		<div class="modal2_oprt">
			<span class="modal2_oprt_y" @click="modal2_y()">确定</span>
			<span class="modal2_oprt_n" @click="modal2_n()">取消</span>
		</div>
	</div>

    <div class="modal_p3">
    </div>

    <div class="check_opinion">
      <p class="check_title">审批意见</p>
      <textarea class="opinion_area" type="text" v-model="opinionContent">同意</textarea>
      <label class="usual_opinions_option left">可选常用意见:</label>
      <select class="select_opinion left" v-model="selectVal" >
        <option value="">请选择</option>
        <option :value="aci.sortNo" v-for="aci in usualOpinions.auditingCommentsInfo" :key="aci.sortNo" >{{aci.auditingComments}}</option>
      </select>
      <button @click="modal1_open()" class="opinion_submit">提交下一处理</button>
      <button class="opinion_sv">保存意见</button>
      <button class="opinion_cc">取 消</button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  data() {
    return {
		postCount:0,
		usualOpinions:{auditingCommentsInfo:[]},
		queryStep:{colmInfo:[]},
		queryUser:{colmInfo:[]},
		queryOrg:{tree:[]},
		orgList:[],
		selectVal:"",
		opinionContent:"",
		modal1_state:false,
		modal2_state:false,
    };
  },
  watch:{
	postCount(curVal,oldVal){
	　　if(curVal==2){
			this.$indicator(0);
		}
	},
	selectVal(curVal,oldVal){
		var arr = this.usualOpinions.auditingCommentsInfo
		for(var k=0;k<arr.length;k++){
			if(arr[k].sortNo==curVal){
				this.opinionContent = arr[k].auditingComments
				return
			}
		}
	},
	queryOrg(curVal,oldVal){
		for(var k in curVal.tree){

		}
	}
  },
  created () {
  },
  beforeMount () {
  },
  mounted () {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
		if(from.path=="/"){
			vm.postCount=0
			vm.usualOpinions={auditingCommentsInfo:[]}
			vm.queryStep={colmInfo:[]}
			vm.queryUser={colmInfo:[]}
			vm.selectVal=""
			vm.opinionContent=""
			vm.modal1_state=false
			vm.modal2_state=false

			if(!vm.$checkLogin()){
				vm.login()
			}
			vm.$indicator(1);
			vm.postPath()
			vm.postUsualOpinions()
		}
    })
  },
  methods:{
	...mapMutations(['setBottomTabType','setMain_tableInfo']),
	login(){
		this.$login({j_username:this.getMainInfo.j_username,j_password:this.getMainInfo.j_password},function(){
			//success
		},function(){
			//error
		});
    },
    postPath(){
		var qi = [{colmEnName:"NextStep", colmValue:"", reserve1:""}];
		var t = {procId:this.getMainInfo.procId,userId:this.getMainInfo.userId,system:this.getMainInfo.system,queryItem:qi};
		this.$post(this.$url.queryTpl,t).then((data) => {
			this.$toast("路径加载完成")
			this.postCount++
			if(data&&data.colmInfo){
				var arr = data.colmInfo
				for(var i=0;i<arr.length;i++){
					if(i==0){
						arr[i].imgState=true
					}else{
						arr[i].imgState=false
					}
				}
				data.colmInfo = arr;
			}
			this.queryStep.colmInfo = data.colmInfo
			console.log(JSON.stringify(this.queryStep.colmInfo))
		},(err)=>{
			this.$toast(JSON.stringify(err))
			this.postCount++;
		})
    },
    postUsualOpinions(){
		var t = {userId: this.getMainInfo.userId, flowName:this.getMainInfo.types}
		this.$post(this.$url.usualOpinionOptions,t).then((data) => {
			this.postCount++;
			this.$toast("常用意见已加载")
			if(data.auditingCommentsInfo){
				this.usualOpinions.auditingCommentsInfo = data.auditingCommentsInfo
				console.log(JSON.stringify(this.usualOpinions.auditingCommentsInfo));
			}
		},(err)=>{
			this.$toast(JSON.stringify(err))
			this.postCount++;
		})
    },
	modal1_open(){
		if(this.selectVal==""){
			alert("内容为空")
		}else{
			this.modal1_state = true
		}
	},
	modal1_items_choose(colmId){
		var arr = this.queryStep.colmInfo
		for(var i=0;i<arr.length;i++){
			if(arr[i].colmId==colmId){
				arr[i].imgState = true;
			}else{
				arr[i].imgState = false;
			}
		}
		this.queryStep.colmInfo = arr
	},
	modal1_y(){
		var arr = this.queryStep.colmInfo
		var itm = {}
		for(var i=0;i<arr.length;i++){
			if(arr[i].imgState==true){
				itm = arr[i]
				break
			}
		}
		if(itm.colmEnName="NextStep" && itm.colmId==0){
			var path=""
			var arr1 = this.queryStep.colmInfo
			for(var i=0;i<arr1.length;i++){
				if(arr1[i].imgState = true){
					path = arr1[i].colmValue
					break
				}
			}
			this.$confirmer("是否进行'"+path+"'",()=>{
				var colmInfo = [];
				var comment ={colmEnName:"Comment",colmId:"Comment",colmValue:this.opinionContent};
				var step ={colmEnName:itm.colmEnName,colmId:itm.colmId,colmValue:itm.colmValue};
				colmInfo.push(comment);
				colmInfo.push(step);
				var t = {procId:this.getMainInfo.procId,userId:this.getMainInfo.userId,system:this.getMainInfo.system,colmInfo:colmInfo};
				this.$post(this.$url.submit,t).then((data) => {
					this.$operator(0)
					if(data.errFlag=="N"){
						this.$toast(data.errMsg||"提交成功")
					}else{
						this.$toast(data.errMsg||"提交失败")
					}
				},(err)=>{
					this.$operator(0)
					this.$toast("已取消")
					this.modal1_state=true
				})
			},()=>{

			})
		}else if(itm.colmEnName="NextStep"){
			this.$operator(1)
			var qi = [{colmEnName:itm.colmEnName, colmValue:itm.colmId, reserve1:itm.colmValue}];
			var t ={procId:this.getMainInfo.procId,userId:this.getMainInfo.userId, system:this.getMainInfo.system, queryItem:qi};
			this.$post(this.$url.queryTpl,t).then((data) => {
				this.$operator(0)
				if(data&&data.colmInfo&&data.colmInfo.length>0){
					var itm0 = data.colmInfo[0]
					if(itm0.colmEnName=="NextUser"){
						//多人-单选
						var arr = data.colmInfo
						for(var i=0;i<arr.length;i++){
							if(i==0){
								arr[i].imgState=true
							}else{
								arr[i].imgState=false
							}
						}
						data.colmInfo = arr;
						this.queryUser.colmInfo = data.colmInfo
						this.modal1_state=false
						this.modal2_state=true
					}else if(itm0.colmEnName=="TreeNextUser"){
						//会签-单选
						var treeStr = JSON.stringify(itm0.colmValue)
						this.queryOrg.tree = treeStr.tree
					}
				}
				
			},(err)=>{
				this.$operator(0)
			})
		}	
	},
	modal1_n(){   
		this.modal1_state = false
	},
	modal2_items_choose(colmId){
		var arr = this.queryUser.colmInfo
		for(var i=0;i<arr.length;i++){
			if(arr[i].colmId==colmId){
				arr[i].imgState = true;
			}else{
				arr[i].imgState = false;
			}
		}
		this.queryUser.colmInfo = arr
	},
	modal2_y(){
		this.modal2_state=false
		var path=""
		var arr1 = this.queryStep.colmInfo
		for(var i=0;i<arr1.length;i++){
			if(arr1[i].imgState = true){
				path = arr1[i].colmValue
				break
			}
		}
		var person=""
		var arr2 = this.queryUser.colmInfo
		for(var i=0;i<arr2.length;i++){
			if(arr2[i].imgState = true){
				person = arr2[i].colmValue
				break
			}
		}
		this.$confirmer("是否提交给'"+person+"'进行'"+path+"'",() =>{
			this.$operator(1)
			var arr1 = this.queryStep.colmInfo
			var pathItm = {}
			for(var i=0;i<arr1.length;i++){
				if(arr1[i].imgState==true){
					pathItm = arr1[i]
					break
				}
			}
			var arr2 = this.queryUser.colmInfo
			var personItm = {}
			for(var i=0;i<arr2.length;i++){
				if(arr2[i].imgState==true){
					personItm = arr2[i]
					break
				}
			}
			var colmInfo = [];
			var comment ={colmEnName:"Comment",colmId:"Comment",colmValue:this.opinionContent};
			var step ={colmEnName:pathItm.colmEnName,colmId:pathItm.colmId,colmValue:pathItm.colmValue};
			var user ={colmEnName:personItm.colmEnName,colmId:personItm.colmId,colmValue:personItm.colmValue};
			colmInfo.push(comment);
			colmInfo.push(step);
			colmInfo.push(user);
			var t = {procId:this.getMainInfo.procId,userId:this.getMainInfo.userId,system:this.getMainInfo.system,colmInfo:colmInfo}
			this.$post(this.$url.submit,t).then((data) => {
				this.$operator(0)
				if(data.errFlag=="N"){
					this.$toast(data.errMsg||"提交成功")
				}else{
					this.$toast(data.errMsg||"提交失败")
				}
			})
		},() =>{
			this.$operator(0)
			this.$toast("已取消")
			this.modal2_state=true
		})
	},
	modal2_n(){
		this.$toast("已取消")
		this.modal2_state = false
		this.modal1_state = true
	},
  },
  computed:{
	  ...mapGetters(['getMainInfo']),

  }
};
</script>

<style scoped>
/*填写处理意见*/
.check_opinion{
	width: 100%;
	height: 100%;
	background-color: #f1f1f1;
}
.check_title{
	width: 100%;
	height: .68rem;
	box-sizing: border-box;
	padding:.26rem 0 0 .28rem;
	font-size: .32rem;
	color: #666;
}

.opinion_area{
	width: 86%;
	height: 3.16rem;
	border: 0.02rem solid #11a9ec;
	margin: 0 .28rem .4rem .28rem;
	padding: .2rem;
	background-color: #fff;
	font-size: .3rem;
	color: #333;
	border-radius: 0.05rem;
}

.usual_opinions_option{
	height: .7rem;
	width: 2.4rem;
	font-size: .32rem;
	padding-top: 0.1rem; 
	margin-left: .28rem; 
}

.select_opinion{
	background: url("../assets/img/down_arrow_32.png") no-repeat scroll right center transparent;
	background-size:auto 0.3rem;
	background-position:95% 50%;
	margin: 0.0rem 0 0.00rem 0.00rem;
	width: 4.54rem;
	height: 0.7rem;
	-webkit-appearance:none;
	appearance:none;
	border:none;
	font-size:0.32rem;
	padding:0 0.5rem 0 0.5rem;
	display:block;
	-webkit-box-sizing:border-box;
	box-sizing:border-box;
	background-color: #FFFFFF;
	color:#333333;
	border-radius:0.1rem;
}
.select_title{
	display: inline-block;
	margin-right: .68rem;
	color: #666;
}
.select_btn{
	color: #333;
}
.sel_down_arrow{
	float: right;
	width: 1.2rem;
	height: .5rem;
	cursor: pointer;
	margin-top: .13rem;
	background: url("../assets/img/down_arrow_32.png") no-repeat;
}

.opinion_submit{
	left: 0.35rem;
	position: absolute;
	bottom: 1rem;
	height: .84rem;
	width: 2.56rem;
	font-size: .32rem;
	color: #11a9ec;
	border: 0.03rem solid #11a9ec;
	box-sizing: border-box;
	border-radius: 0.05rem;
	background-color: #fff;
}
.opinion_sv{
	left: 3.26rem;
	position: absolute;
	bottom: 1rem;
	height: .84rem;
	width: 1.92rem;
	font-size: .32rem;
	color: #11a9ec;
	border: 0.03rem solid #11a9ec;
	box-sizing: border-box;
	border-radius: 0.05rem;
	background-color: #fff;
}
.opinion_cc{
	left: 5.53rem;
	position: absolute;
	bottom: 1rem;
	height: .84rem;
	width: 1.6rem;
	font-size: .32rem;
	color: #11a9ec;
	border: 0.03rem solid #11a9ec;
	box-sizing: border-box;
	border-radius: 0.05rem;
	background-color: #fff;
}

.modal_bg{
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(155, 156, 158, 0.8);
}

.modal_p1{
	z-index: 11;
	position: absolute;
	top: calc(50% - 2.5rem);
	left: 1rem;
	width: 5.5rem;
	border-radius: 0.2rem;
	background-color: #f5f5f5;
}

.modal_p1 .modal_title{
	width: 5.5rem;
	height: 0.8rem;
	border-top-left-radius: 0.2rem;
	border-top-right-radius: 0.2rem;
}

.modal_p1 .modal_title .title1_text{
	width:5.5rem;
	text-align: center;
	word-wrap:break-word;
	white-space:normal;
	display: block;
	height: .34rem;
	font:bold .34rem "Microsoft YaHei";
	padding: .21rem 0 .25rem 0; 
	float:left;
}

.modal_p1 .modal1_items{
	clear: both;
	width: 5.5rem;
	max-height: 2.4rem;
	overflow-y :auto;
}
.modal1_items .modal1_item{
	clear: both;
	width: 5.5rem;
	height: 0.8rem;
}

.modal1_items .modal1_item span{
	width:4.5rem;
	display: block;
	word-wrap:break-word;
	white-space:normal;
	float: left;
    height: .34rem;
	font-size: .34rem;
	padding: .16rem 0 .28rem .23rem; 
}

.modal1_items .modal1_item img{
	float: left;
	width:0.54rem;
	height:0.54rem;
	padding: .13rem 0 .13rem .23rem; 
}

.modal_p1 .modal1_oprt{
	padding-top:0.3rem; 
	width: 5.5rem;
	height: 0.8rem;
}

.modal1_oprt .modal1_oprt_y{
	float: left;
	width: 2.74rem;
	height: 0.79rem;
	padding-top: 0.2rem; 
	color: #11A9EB;
	display: block;
	text-align: center;
	word-wrap:break-word;
	white-space:normal;
	border-bottom-left-radius: 0.2rem;
	border-top: 0.01rem solid #c9c9c9;
	border-right: 0.01rem solid #c9c9c9;
	font:bold .36rem "Microsoft YaHei";
}

.modal1_oprt .modal1_oprt_n{
	float: left;
	width: 2.74rem;
	height: 0.79rem;
	padding-top: 0.2rem;
	color: #11A9EB;
	display: block;
	text-align: center;
	word-wrap:break-word;
	white-space:normal;
	border-bottom-left-radius: 0.2rem;
	border-top: 0.01rem solid #c9c9c9;
	border-right: 0.01rem solid #c9c9c9;
	font:bold .34rem "Microsoft YaHei";
}


.modal_p2{
	z-index: 11;
	position: absolute;
	top: calc(50% - 2.5rem);
	left: 1rem;
	width: 5.5rem;
	border-radius: 0.2rem;
	background-color: #f5f5f5;
}

.modal_p2 .modal_title{
	width: 5.5rem;
	height: 0.8rem;
	border-top-left-radius: 0.2rem;
	border-top-right-radius: 0.2rem;
}

.modal_p2 .modal_title .title2_text{
	width:5.5rem;
	text-align: center;
	word-wrap:break-word;
	white-space:normal;
    display: block;
    height: .34rem;
	font:bold .34rem "Microsoft YaHei";
	padding: .21rem 0 .25rem 0; 
	float:left;
}

.modal_p2 .modal2_items{
	clear: both;
	width: 5.5rem;
	max-height: 2.4rem;
	overflow-y :auto;
}
.modal2_items .modal2_item{
	clear: both;
	width: 5.5rem;
	height: 0.8rem;
}

.modal2_items .modal2_item span{
	width:3.85rem;
	display: block;
	word-wrap:break-word;
	white-space:normal;
	float: left;
    height: .34rem;
	font-size: .34rem;
	padding: .16rem 0 .28rem .23rem; 
}

.modal2_items .modal2_item img{
	float: left;
	width:0.54rem;
	height:0.54rem;
	padding: .13rem 0 .13rem .88rem; 
}

.modal_p2 .modal2_oprt{
	padding-top:0.3rem; 
	width: 5.5rem;
	height: 0.8rem;
}

.modal2_oprt .modal2_oprt_y{
	float: left;
	width: 2.74rem;
	height: 0.79rem;
	padding-top: 0.2rem; 
	color: #11A9EB;
	display: block;
	text-align: center;
	word-wrap:break-word;
	white-space:normal;
	border-bottom-left-radius: 0.2rem;
	border-top: 0.01rem solid #c9c9c9;
	border-right: 0.01rem solid #c9c9c9;
	font:bold .36rem "Microsoft YaHei";
}

.modal2_oprt .modal2_oprt_n{
	float: left;
	width: 2.74rem;
	height: 0.79rem;
	padding-top: 0.2rem;
	color: #11A9EB;
	display: block;
	text-align: center;
	word-wrap:break-word;
	white-space:normal;
	border-bottom-left-radius: 0.2rem;
	border-top: 0.01rem solid #c9c9c9;
	border-right: 0.01rem solid #c9c9c9;
	font:bold .34rem "Microsoft YaHei";
}

.modal_p3{
	position:absolute;
	z-index: 5755;
	top: 0;
	right: 0;
	bottom: 0;
	width: 0;
	height: 100%;
	background-color: #fafafa;
}
</style>
