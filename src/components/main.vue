<template>
  <div id="device_content">
    <div class="tab_choice">
      <div class="choice_one" @click="tab_choose(1)">
          <a :class="{'c_18B4FE':(tab_choice==1),'c_bdc5d1':(tab_choice!=1)}"><strong>处理单</strong></a>
      </div>
      <div class="choice_two" @click="tab_choose(2)">
          <a :class="{'c_18B4FE':(tab_choice==2),'c_bdc5d1':(tab_choice!=2)}"><strong>审批意见</strong></a>
      </div>
      <div class="choice_three" @click="tab_choose(3)">
          <a :class="{'c_18B4FE':(tab_choice==3),'c_bdc5d1':(tab_choice!=3)}"><strong>正文</strong></a>
      </div>

      <div class="tab_one" v-show="tab_choice==1">
        <ul id="form-items">
          <li v-for="item in form.documentDataInfo" v-if="item.colmValue!='MtvTab'&&item.colmValue!='TAB_FEE_DETAILS'">
            <label>
              <span>{{item.colmName}}</span><i/>
            </label>
            <label>
              <span>{{item.colmValue}}</span><i/>
            </label>
          </li>

          <li v-for="item in form.documentDataInfo" v-if="item.colmValue=='MtvTab'" :style="{height: attachs_label_open+'rem'}" >
            <label :style="{height: attachs_label_open+'rem'}">
              <span style="white-space:normal">{{item.colmName}}</span><i/>
            </label>
            <label :style="{height: attachs_label_open+'rem'}">
              <div class="attach-ul" style="width:4.88rem; height: 1.28rem; float:left">
                <div v-for="(ad,index) in form.attachDataInfo" v-show="index==0||attachs_open_flag==1" class="attach-li">
                    <span style="width:4.68rem;vertical-align: middle;word-wrap: break-word;display: inline-block;line-height: 0.32rem;font-size: 0.3rem;white-space:normal;margin-left: 0.2rem;">
                        {{ad.fileName}}
                    </span><i/>
                </div>
                <img class="to_attachlist" @click="to_attachlist" src="../assets/img/check_attach_bt.png">
              </div>
              <img class="attachs_open_btn" @click="attachs_open($event)" src="../assets/img/down_arrow_32.png">
            </label>
          </li>

          <li v-for="item in form.documentDataInfo" v-if="item.colmValue=='TAB_FEE_DETAILS'">
            <label style="height: 1.28rem">
              <span style="white-space:normal">{{item.colmName}}</span><i/>
            </label>
            <label style="height: 1.28rem">
              <img class="to_table" @click="to_table" src="../assets/img/check_attach_bt.png">
            </label>
          </li>

          <div class="fill98"></div>
        </ul>
      </div>

  	  <div class="tab_two" v-show="tab_choice==2">
	  	  <ul id="opinion_items">
          <li v-for="item in opinions.commentInfo">
            <div class="opinion_title">
                <label>{{item.commentGroupName}}</label>
            </div>
            <div class="opinion_handler">
                <img class="oh_img" src="../assets/img/person_01.png">
                <label class="column_handler">处理人:</label>
                <label class="column_handerler_name">{{opinions_commentBody_one(item.commentBody).userName}} {{item.commentBody.length>0?item.commentBody[0].commentTime:""}}</label>
            </div>
            <div class="opinion_content">
                <img class="oc_img" src="../assets/img/pen_01.png">
                <label class="column_opinion">意见:</label>
                <label class="column_opinion_content">{{item.commentBody.length>0?item.commentBody[0].comment:""}}</label>
            </div>
          </li>
          <div class="fill98"></div>
        </ul>
	    </div>

	    <div class="tab_three" v-show="tab_choice==3">
		    <div id="form_articles">
          <div class="fill98"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      form: {attachDataInfo: [],documentDataInfo: []},
			attachs_open_flag: 0,
			attachs_label_open: 1.28,
      opinions: {commentInfo:[]},
      tab_choice:1,
      /* a:{ 
          procType:"01",
          procId:"61286215",
          userId:"zhujinliang",
          system:"efinancema",
          processId:"5022547",
          commentType:"00",
          types:"资金划拨",
          j_username:"zhujinliang",
          j_password:"8888"
        } */
      a:{ 
          procType:"01",
          procId:"61290471",
          userId:"zhujinliang",
          system:"efinancema",
          processId:"5023086",
          commentType:"00",
          types:"资金划拨",
          j_username:"zhujinliang",
          j_password:"8888"
        }
    }
  },
	created(){
		this.$store.commit('setMainInfo',this.a)
		console.log("getMainInfo")
		console.log(JSON.stringify(this.getMainInfo))
	},
  beforeRouteEnter (to, from, next) {
    next(vm => {
			vm.$store.commit('setBottomTabType',1)
			// vm.setBottomTabType(1); 等价于上一行
			console.log("beforeRouteEnter-getBottomTabType");
			console.log(vm.getBottomTabType);
			// console.log(vm.$store.getters.getBottomTabType); 等价于上一行
      vm.login()
      vm.postForm()
      vm.postOpinions()
			vm.postTable()
    })
  },
  beforeRouteLeave (to, from, next) {
		this.$store.commit('setBottomTabType',0)
		console.log("beforeRouteLeave-getBottomTabType");
		console.log(this.getBottomTabType);
		next();
  },
  methods:{
		...mapMutations(['setBottomTabType','setMain_tableInfo']),
    login(){
      /* this.$login({j_username:this.a.j_username,j_password:this.a.j_password}).then((data) => {
        console.log(data);
      }) */
			// this.$login2({j_username:this.a.j_username,j_password:this.a.j_password})
			this.$login3({j_username:this.a.j_username,j_password:this.a.j_password});
			console.log(this.$route.path);
    },
    postForm(){
			var t = {procType:this.a.procType,procId:this.a.procId,userId:this.a.userId,system:this.a.system};
		  this.$post(this.$url.EFinancema_form,t).then((data) => {
				if(data.documentDataInfo){
					this.form.documentDataInfo = data.documentDataInfo.splice(3)
				}
				if(data.attachDataInfo){
					this.form.attachDataInfo = data.attachDataInfo
				}
				if(data.bodyDataInfo){
					this.form.bodyDataInfo = data.bodyDataInfo
				}
			})
    },
    postOpinions(){
			var t = {procId:this.a.processId, userId:this.a.userId, system:this.a.system, commentType:this.a.commentType};
      this.$post(this.$url.EFinancema_opinions,t).then((data) => {
				if(data.commentInfo){
					this.opinions.commentInfo = data.commentInfo
				}
			})
    },
		postTable(){
			var t = {procId:this.a.procId, userId:this.a.userId, procType:this.a.procType, system:this.a.system, pageNum:"1", pageSize: "100", keyColmName:"all"};
      this.$post(this.$url.EFinancema_table,t).then((data) => {
				this.setMain_tableInfo(data.tableInfo);
			})
    },
    tab_choose: function (va) {
      this.tab_choice = va;
    },
		opinions_commentBody_one:function(commentBody){
			if(commentBody && commentBody.length>0){
				return commentBody[0];
			}else{
				return {};
			}
		},
		attachs_open:function(event){
			this.attachs_open_flag = 1;
			if(this.form.attachDataInfo.length>1){
				this.attachs_label_open = 1.28+(this.form.attachDataInfo.length-1)*0.8;
			}

		},
		to_attachlist:function(){
			this.$router.push('/attachlist')
			// var json={};
			// var po = this.po;
			// json.attachDataInfo = po.formModel.attachDataInfo;
			// json.system = po.get("system");
			// json.j_username = po.get("j_username");
			// json.j_password = po.get("j_password");
			// appRouter.navigate("EFinancema_checkAttach/"+JSON.stringify(json), {trigger: true});
		},
		to_table(){
			this.$router.push('/tableInfo')
		},
  },
  computed:{
		...mapGetters(['getBottomTabType','getMainInfo']),
  },
}

</script>

<style scoped>
.tab_choice{
	height: 100%;
	width: 100%;
	background-color: #F1F1F1;
}

.choice_one{
	background-color: #FFFFFF;
	left:0;
	width: calc(33.33% - 1px);
	float:left;
	height: 0.88rem;
	border-right: 0.03% solid #EFF0F4;
}

.choice_one a{
	display: block;
	padding: 0.19rem 0;
	font-size: 0.3rem;
	text-align: center;
}

.choice_two{
	background-color: #FFFFFF;
	margin-left:1px;
	width: calc(33.33% - 1px);
	float:left;
	height: 0.88rem;
}

.choice_two a{
	display: block;
	padding: 0.19rem 0;
	font-size: 0.3rem;
	text-align: center;
}

.choice_three{
	background-color: #FFFFFF;
	margin-left:1px;
	width: calc(33.33% - 1px);
	float:left;
	height: 0.88rem;
}

.choice_three a{
	display: block;
	padding: 0.19rem 0;
	font-size: 0.3rem;
	text-align: center;
}

.tab_one{
	display: block;
	position: absolute;
	top: 1.08rem;
	height: calc(100% - 0.88rem);
	width: 100%;
	clear:both;
	background-color: white;
	border-top: 1px solid #f1f1f1;
}

.tab_one ul li{
	background-color: white;
	width: 7.5rem;
	height: 0.88rem;
	font-size: 0.3rem ;
	display: table;
	border-bottom: 0.01rem solid #D4D5D9;
}

.tab_one ul li label:first-child{
	background-color: #f7fdff;
	float: left;
	height: 0.88rem;
	width: 1.8rem;
}

.tab_one ul li label:last-child{
	float: right;
	height: 0.88rem;
	width: 5.7rem;
}

.tab_one li label:first-child span{
	width:1.32rem;
	vertical-align: middle;
	word-wrap:break-word;
	white-space:normal;
    display: inline-block;
    line-height: 0.32rem;
	font-size: 0.3rem;
	white-space:pre-wrap;
	margin-left:0.28rem; 
}

.tab_one li label:last-child span{
	width:5.22rem;
	vertical-align: middle;
	word-wrap:break-word;
	white-space:normal;
    display: inline-block;
    line-height: 0.32rem;
	font-size: 0.3rem;
	white-space:pre-wrap;
	margin-left:0.2rem; 
}

.tab_one ul li i{
	height: 100%;
    vertical-align: middle;
    width: 0;
    display: inline-block;
}

.to_attachlist{
	display:block;
	width:1.8rem;
	height:0.4rem;
	margin-left:0.2rem; 
}
.to_table{
	display:block;
	width:1.8rem;
	height:0.4rem;
	margin:.48rem 2.88rem .48rem 0.2rem; 
}

.attachs_open_btn{
	width:0.82rem;
	height:1.28rem;
	float:right;
	display:block;
	width:0.26rem;
	height:0.26rem;
	padding:0.51rem 0.28rem
}

.attach-li{
	width:4.88rem;
	height: 0.8rem;
}

.c_bdc5d1{
	color: #bdc5d1;
}

.c_18B4FE{
	color: #18b4fe
}

.tab_two{
	display:block;
	position: absolute;
	top: 0.88rem;
	height: calc(100% - 0.88rem);
	width: 100%;
	clear:both;
	background-color: white;
	border-top: 1px solid #f1f1f1;
}

.tab_two ul li{
	clear: both;
	background-color: white;
	width: 100%;
	height: 2.82rem;
}

.opinion_title{
	width: 7.22rem;
	margin-left:0.28rem;
	height: 0.94rem;
	border-bottom: 0.01rem solid #D4D5D9;
}

.opinion_title label{
	display: block;
	padding-top: 0.32rem;
	height: 0.34rem;
	width: 6rem;
	float: left;
	color: #18b4fe;
	font:bold 0.32rem "Microsoft YaHei";
}

.opinion_handler{
	width: 7.22rem;
	margin-left:0.28rem;
	height: 0.94rem;
	border-bottom: 0.01rem solid #D4D5D9;
}

.opinion_handler .oh_img{
	float: left;
	height: 0.26rem;
	width: 0.26rem;
	margin-top:0.34rem;
}
.opinion_handler .column_handler{
	display: block;
	padding-top: 0.3rem;
	padding-left: 0.2rem;
	height: 0.3rem;
	font-size: 0.28rem ;
	width: 1.12rem;
	float: left;
	color: #C6C6C7;
}

.opinion_handler .column_handerler_name{
	display: block;
	padding-top: 0.3rem;
	padding-left: 0.2rem;
	height: 0.3rem;
	font-size: 0.28rem ;
	width: auto;
	float: left;
	color: #5B5B5B;
}

.opinion_content{
	width: 7.22rem;
	margin-left:0.28rem;
	height: 0.91rem;
	border-bottom: 0.01rem solid #D4D5D9;
}

.opinion_content .oc_img{
	float: left;
	height: 0.26rem;
	width: 0.26rem;
	margin-top:0.34rem;
}

.opinion_content .column_opinion{
	display: block;
	padding-top: 0.3rem;
	padding-left: 0.2rem;
	height: 0.3rem;
	font-size: 0.28rem ;
	width: 1.12rem;
	float: left;
	color: #C6C6C7;
}

.opinion_content .column_opinion_content{
	display: block;
	padding-top: 0.3rem;
	padding-left: 0.2rem;
	height: 0.3rem;
	font-size: 0.28rem ;
	width: auto;
	float: left;
	color: #5B5B5B;
}

.tab_three{
	display:block;
	position: absolute;
	top: 0.88rem;
	height: calc(100% - 0.88rem);
	width: 100%;
	clear:both;
	background-color: white;
	border-top: 1px solid #f1f1f1;
}

.tab_three .single_article{
	padding: 0.28rem 0.28rem 0 0.28rem;
	font-size: 0.3rem;
}
</style>


