<template>
    <ul class="check_attachment">
        <li class="atm_list">
            <div class="atm_content">
                <span class="atm_num">附件1</span>
                <span class="atm_title">中国移动广西公司物料1.png</span>
            </div>
                <!--操作附件-->
            <div class="atm_operation">
                <span class="atm_size">409.0KB</span>
                <button class="btn_rename_atm">重命名</button>
                <button class="btn_delete_atm">删除</button>
                <button class="btn_move_atm">移动附件顺序</button>
            </div>
        </li>
        <li class="atm_list">
            <div class="atm_content">
                <span class="atm_num">附件1</span>
                <span class="atm_title">中国移动广西公司物料1.png</span>
            </div>
            <!--操作附件-->
            <div class="atm_operation">
                    <span class="atm_size">
                        409.0KB
                    </span>
                <button class="btn_rename_atm">重命名</button>
                <button class="btn_delete_atm">删除</button>
                <button class="btn_move_atm">移动附件顺序</button>
            </div>
        </li>
        <li class="atm_list">
            <div class="atm_content">
                <span class="atm_num">附件1</span>
                <span class="atm_title">中国移动广西公司物料1.png</span>
            </div>
            <!--操作附件-->
            <div class="atm_operation">
                    <span class="atm_size">
                        409.0KB
                    </span>
                <button class="btn_rename_atm">重命名</button>
                <button class="btn_delete_atm">删除</button>
                <button class="btn_move_atm">移动附件顺序</button>
            </div>

        </li>
        <div class="nomore">没有更多内容了</div>
    </ul>

</template>

<script>
export default {
  data () {
      return {}
  }
}
</script>

<style scoped>
/*查看附件*/
.check_attachment{
	width: 100%;
	height: 100%;
	background-color: #f1f1f1;
}
/*附件列表*/
.atm_list{
	width: 100%;
	height: 1.7rem;
	border-bottom: .2rem solid #f1f1f1;
	background: #fff;
	padding: .2rem .28rem;
}
.atm_content{
	font-size: .28rem;
}
/*附件列表编号字体*/
.atm_num{
	font-size: .28rem;
	color: #adadad;
	margin-right: .2rem;
}
/*附件标题字体*/
.atm_title{
	font-size: .32rem;
	color: #333;
}
.atm_operation{
    width: 100%;
    height: auto;
    padding-left: .96rem;
    font-size: .28rem;
    margin-top: .18rem;
}
.atm_size{
    display: inline-block;
    color: #8cd9ee;
    margin-right: .42rem;
}
/*操作按钮*/
.atm_operation button{
    outline: none;
    border: 1px solid #11a9ec;
    background: #fff;
    border-radius: .27rem;
    margin-left: .08rem;
    color: #11a9ec;
    padding: 2px 8.5px;
}

/*沒有更多內容了*/
.nomore{
	font-size: .28rem;
	color: #a4a4a4a4;
	text-align: center;
}
</style>