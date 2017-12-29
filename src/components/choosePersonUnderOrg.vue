<template>
    <div class="modal_p3">
        <div class="dep_li" v-for="node1 in orgList" v-if="(node1.type=='org')&&(node1.org.orgLevel==initLevel)" >
            <div class="dep_li_head" @click="toggleNode(node1.id)">
                <img class="org_img" :src="node1.nodeStatus?iconReduce:iconPlus" v-if="node1.type=='org'">
                <span class="org_span" v-if="node1.type=='org'">{{node1.org.orgName}}</span>
            </div>
            <div class="dep_li" v-for="node2 in orgList" v-if="node2.pid==node1.id" v-show="node1.nodeStatus">
                <div class="dep_li_head" @click="toggleNode(node2.id)">
                    <div class="sep"></div>
                    <img class="org_img" :src="node2.nodeStatus?iconReduce:iconPlus" v-if="node2.type=='org'">
                    <span class="org_span" v-if="node2.type=='org'">{{node2.org.orgName}}</span>
                    <span class="user_span" v-if="node2.type=='user'">{{node2.user.userName}}</span>
                    <img class="user_img" :src="node2.checkStatus?iconUnchecked:iconChecked" v-if="node2.type=='user'">
                </div>
                <div class="dep_li" v-for="node3 in orgList" v-if="node3.pid==node2.id" v-show="node2.nodeStatus">
                    <div class="dep_li_head" @click="toggleNode(node3.id)">
                        <div class="sep"></div><div class="sep"></div>
                        <img class="org_img" :src="node3.nodeStatus?iconReduce:iconPlus" v-if="node3.type=='org'">
                        <span class="org_span" v-if="node3.type=='org'">{{node3.org.orgName}}</span>
                        <span class="user_span" v-if="node3.type=='user'">{{node3.user.userName}}</span>
                        <img class="user_img" :src="node3.checkStatus?iconUnchecked:iconChecked" v-if="node3.type=='user'">
                    </div>
                    <div class="dep_li" v-for="node4 in orgList" v-if="node4.pid==node3.id" v-show="node3.nodeStatus">
                        <div class="dep_li_head" @click="toggleNode(node4.id)">
                            <div class="sep"></div><div class="sep"></div><div class="sep"></div>
                            <img class="org_img" :src="node4.nodeStatus?iconReduce:iconPlus" v-if="node4.type=='org'">
                            <span class="org_span" v-if="node4.type=='org'">{{node4.org.orgName}}</span>
                            <span class="user_span" v-if="node4.type=='user'">{{node4.user.userName}}</span>
                            <img class="user_img" :src="node4.checkStatus?iconUnchecked:iconChecked" v-if="node4.type=='user'">
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="fill98"></div>
    </div>
</template>

<script>
import icon_plus from '../assets/img/icon_plus.png'
import icon_reduce from '../assets/img/icon_reduce.png'
import icon_checked from '../assets/img/checked_32.png'
import icon_unchecked from '../assets/img/unchecked_32.png'
import {mapGetters} from 'vuex'
export default {
    data () {
        return {
            orgTree:{tree:[]},
            orgList:[{
                        "id":"1fc1fa214-37ef-482e-95e2-882bb65d6dff",
                        "isParent":"true",
                        "name":"1区公司",
                        "org":{
                            "displayOrder":"0",
                            "orgCode":"33000000",
                            "orgId":"1fc1fa214-37ef-482e-95e2-882bb65d6dff",
                            "orgLevel":"1",
                            "orgName":"中国移动广西公司",
                            "orgShortName":"区公司",
                            "orgStyle":"1",
                            "parentOrgId":"root",
                            "status":"available"
                        },
                        "pid":null,
                        "type":"org",
                        "nodeStatus":true
                    },
                    {
                        "id":"12f26a919-4661-451f-8af2-469835808dc7",
                        "isParent":"true",
                        "name":"采购供应部",
                        "org":{
                            "displayOrder":"19",
                            "orgCode":"33970000",
                            "orgId":"12f26a919-4661-451f-8af2-469835808dc7",
                            "orgLevel":"2",
                            "orgName":"广西采购供应部",
                            "orgShortName":"采购供应部",
                            "orgStyle":"2",
                            "parentOrgId":"1fc1fa214-37ef-482e-95e2-882bb65d6dff",
                            "status":"available"
                        },
                        "pid":"1fc1fa214-37ef-482e-95e2-882bb65d6dff",
                        "type":"org",
                        "nodeStatus":true
                    },
                    {
                        "id":"1ad0a2ff1-44cf-4c2c-82f1-2ea65f4d61c5",
                        "isParent":"true",
                        "name":"采购管理室",
                        "org":{
                            "displayOrder":"300",
                            "orgCode":"33973000",
                            "orgId":"1ad0a2ff1-44cf-4c2c-82f1-2ea65f4d61c5",
                            "orgLevel":"3",
                            "orgName":"广西采购供应部采购管理室",
                            "orgShortName":"采购管理室",
                            "orgStyle":"3",
                            "parentOrgId":"12f26a919-4661-451f-8af2-469835808dc7",
                            "status":"available"
                        },
                        "pid":"12f26a919-4661-451f-8af2-469835808dc7",
                        "type":"org",
                        "nodeStatus":true
                    },
                    {
                        "id":"145fb85b9-fbf1-409a-9364-b0d1814f36e2",
                        "isParent":"false",
                        "name":"庞一迪",
                        "pid":"1ad0a2ff1-44cf-4c2c-82f1-2ea65f4d61c5",
                        "type":"user",
                        "user":{
                            "authorized":{

                            },
                            "employeeStatus":"available",
                            "types":"public",
                            "userCode":"pangyidi",
                            "userId":"171a13408-7631-4222-bed3-632f75a6d269",
                            "userName":"庞一迪"
                        },
                        "checkStatus":false
                    },
                    {
                        "id":"fc1fa214-37ef-482e-95e2-882bb65d6dff",
                        "isParent":"true",
                        "name":"区公司",
                        "org":{
                            "displayOrder":"0",
                            "orgCode":"33000000",
                            "orgId":"fc1fa214-37ef-482e-95e2-882bb65d6dff",
                            "orgLevel":"1",
                            "orgName":"中国移动广西公司",
                            "orgShortName":"区公司",
                            "orgStyle":"1",
                            "parentOrgId":"root",
                            "status":"available"
                        },
                        "pid":null,
                        "type":"org",
                        "nodeStatus":true
                    },
                    {
                        "id":"2f26a919-4661-451f-8af2-469835808dc7",
                        "isParent":"true",
                        "name":"采购供应部",
                        "org":{
                            "displayOrder":"19",
                            "orgCode":"33970000",
                            "orgId":"2f26a919-4661-451f-8af2-469835808dc7",
                            "orgLevel":"2",
                            "orgName":"广西采购供应部",
                            "orgShortName":"采购供应部",
                            "orgStyle":"2",
                            "parentOrgId":"fc1fa214-37ef-482e-95e2-882bb65d6dff",
                            "status":"available"
                        },
                        "pid":"fc1fa214-37ef-482e-95e2-882bb65d6dff",
                        "type":"org",
                        "nodeStatus":true
                    },
                    {
                        "id":"ad0a2ff1-44cf-4c2c-82f1-2ea65f4d61c5",
                        "isParent":"true",
                        "name":"采购管理室",
                        "org":{
                            "displayOrder":"300",
                            "orgCode":"33973000",
                            "orgId":"ad0a2ff1-44cf-4c2c-82f1-2ea65f4d61c5",
                            "orgLevel":"3",
                            "orgName":"广西采购供应部采购管理室",
                            "orgShortName":"采购管理室",
                            "orgStyle":"3",
                            "parentOrgId":"2f26a919-4661-451f-8af2-469835808dc7",
                            "status":"available"
                        },
                        "pid":"2f26a919-4661-451f-8af2-469835808dc7",
                        "type":"org",
                        "nodeStatus":true
                    },
                    {
                        "id":"45fb85b9-fbf1-409a-9364-b0d1814f36e2",
                        "isParent":"false",
                        "name":"庞一迪",
                        "pid":"ad0a2ff1-44cf-4c2c-82f1-2ea65f4d61c5",
                        "type":"user",
                        "user":{
                            "authorized":{

                            },
                            "employeeStatus":"available",
                            "types":"public",
                            "userCode":"pangyidi",
                            "userId":"71a13408-7631-4222-bed3-632f75a6d269",
                            "userName":"庞一迪"
                        },
                        "checkStatus":false
                    }],
            initLevel:1,
            finalLevel:3,
            iconPlus:icon_plus,
            iconReduce:icon_reduce,
            iconChecked:icon_checked,
            iconUnchecked:icon_unchecked
        }
    },
    watch:{
        'orgTree.tree': function(curVal, oldval) {
            this.orgList = curVal
        },
    },
    methods:{
        toggleNode(id){
            for(var i=0;i<this.orgList.length;i++){
                if(this.orgList[i].id==id){
                   if(this.orgList[i].type=='org'){
                        this.orgList[i].nodeStatus = !(this.orgList[i].nodeStatus);
                        return
                   }else if(this.orgList[i].type=='user'){
                        this.orgList[i].checkStatus = !(this.orgList[i].checkStatus);
                        return
                   }
                }
            }
        },
    },
    computed:{
       ...mapGetters(['getChoosePersonUnderOrg_orgList','getChoosePersonUnderOrg_initLevel','getChoosePersonUnderOrg_finalLevel']), 
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.orgTree.tree = vm.getChoosePersonUnderOrg_orgList;
            vm.initLevel = vm.getChoosePersonUnderOrg_initLevel;
            vm.finalLevel = vm.getChoosePersonUnderOrg_finalLevel;
            vm.$store.commit('setBottomTabType',2)
        })
    },
    beforeRouteLeave (to, from, next) {
        this.$store.commit('setBottomTabType',0)
    next()
    },
}
</script>

<style scoped>
.modal_p3{
	z-index:12;
	left:0;
	top:0;
	position:absolute;
	width: 100%;
	height: 100%;
    font:normal .34rem "Microsoft YaHei";
	color: #333;
	background-color:white;
}
.dep_ul{
    width:100%;
    min-height: 0.94rem;
}
.dep_li{
    width:100%;
    min-height: 0.94rem;
}
.dep_li_head{
    width:100%;
    height: 0.94rem;
    border-bottom: 0.01rem solid #cdcdcd;
    -webkit-tap-highlight-color:rgba(0,0,0,0.8);
    tap-highlight-color:rgba(0,0,0,0).8;
}
.dep_li_head .sep{
    float:left;
    width:.2rem;
    height:.94rem
}
.dep_li_head .org_img{
    float:left;
    width:.4rem;
    height:.4rem;
    padding:.27rem .27rem;
}
.dep_li_head .org_span{
    display:block;
    float:left;
    height:.94rem;
    line-height:.94rem;
    width:4rem;
}
.dep_li_head .user_span{
    display:block;
    float:left;
    height:.94rem;
    line-height:.94rem;
    width:4rem;
    padding-left: 1.1rem;
}
.dep_li_head .user_img{
    float:right;
    width:.4rem;
    height:.4rem;
    padding:.27rem .27rem;
}
</style>