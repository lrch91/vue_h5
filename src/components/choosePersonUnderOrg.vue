<template>
    <div class="dep_ul">
        <div class="dep_li" v-for="org in orgList">
            <div class="dep_li_head" @click="toggleDep(org.orgId)">
                <img :src="org.orgStatus==0?iconPlus:iconReduce">
                <span>{{org.orgName}}</span>
            </div>
            <div class="psn_ul">
                <div class="psn_li" v-for="person in org.people" v-show="org.orgStatus==1" @click="togglePsn(org.orgId,person.psnId)">
                    <span>{{person.user}}</span>
                    <img :src="person.userStatus==0?iconUnchecked:iconChecked">
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
export default {
    data () {
        return {
            orgList:[{
                    orgId:1,
                    orgStatus:1,
                    orgName:"政治部",
                    people:[{user:"张三1",userStatus:0,psnId:1},
                            {user:"李四1",userStatus:0,psnId:2},
                            {user:"王五1",userStatus:0,psnId:3}]
                },
                {
                    orgId:2,
                    orgStatus:1,
                    orgName:"宣传部",
                    people:[{user:"张三2",userStatus:1,psnId:1},
                            {user:"李四2",userStatus:0,psnId:2},
                            {user:"王五2",userStatus:0,psnId:3}]
                },
                {
                    orgId:3,
                    orgStatus:0,
                    orgName:"后勤部",
                    people:[{user:"张三3",userStatus:0,psnId:1},
                            {user:"李四3",userStatus:0,psnId:2},
                            {user:"王五3",userStatus:0,psnId:3}]
                }, {
                    orgId:4,
                    orgStatus:0,
                    orgName:"武装部",
                    people:[{user:"张三4",userStatus:0,psnId:1},
                            {user:"李四4",userStatus:0,psnId:2},
                            {user:"王五4",userStatus:0,psnId:3}]
                }],
            iconPlus:icon_plus,
            iconReduce:icon_reduce,
            iconChecked:icon_checked,
            iconUnchecked:icon_unchecked
        }
    },
    methods:{
        toggleDep(depId){
            for(var i=0;i<this.orgList.length;i++){
                if(this.orgList[i].orgId==depId){
                    this.orgList[i].orgStatus = !(this.orgList[i].orgStatus);
                    return
                }
            }
            console.log(JSON.stringify(this.orgList))
        },
        togglePsn(depId, psnId){
            for(var i=0;i<this.orgList.length;i++){
                if(this.orgList[i].orgId==depId){
                    for(var k=0;k<this.orgList[i].people.length;k++){
                        if(this.orgList[i].people[k].psnId==psnId){
                            this.orgList[i].people[k].userStatus = !(this.orgList[i].people[k].userStatus);
                            return
                        }
                    }
                }
            }

        }
    },
    computed:{
        
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
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
.dep_ul{
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
.dep_li_head img{
    float:left;
    width:.4rem;
    height:.4rem;
    padding:.27rem .27rem;
}
.dep_li_head span{
    display:block;
    float:left;
    height:.94rem;
    line-height:.94rem;
    width:calc(100% - 1rem);
}
.psn_ul{
    width:100%;
}
.psn_li{
    clear:both;
    width:100%;
    height: 0.94rem;
    border-bottom: 0.01rem solid #cdcdcd;
}
.psn_li span{
    display:block;
    float:left;
    height:.94rem;
    line-height:.94rem;
    width:calc(100% - 2.1rem);
    padding-left: 1.1rem;
}
.psn_li img{
    float:left;
    width:.4rem;
    height:.4rem;
    padding:.27rem .27rem;
}
</style>