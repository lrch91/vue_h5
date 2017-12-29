function setupWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
        return callback(WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
        return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() {
        document.documentElement.removeChild(WVJBIframe)
    },0)
}
export function callHandler({osType}) {
    //osTYpe:0-android 1-ios
    if(osType==1){
        setupWebViewJavascriptBridge(function(bridge) {
            /* Initialize your app here */
            function log(message, data) {
                var log = document.getElementById('log');
                var el = document.createElement('div');
                el.className = 'logLine';
                el.innerHTML = uniqueId+++'. ' + message + ':<br/>' + JSON.stringify(data);
                if (log.children.length) {
                    log.insertBefore(el, log.children[0])
                } else {
                    log.appendChild(el)
                }
            }
            bridge.callHandler('dataForCallback', {}, function(data) {
                //log('JS got response', response);
                TableEngine.initPage(data);
            })
        });
    }else if(osType==0){
        window.jsInterFace.dataForCallback();
    }
}

export function registerHandler({osType}) {
    //osTYpe:0-android 1-ios
    if(osType==1){
    }else if(osType==0){
        window.jsInterFace.dataForCallback();
    }
}
    

    // 5.3.3.	统一搜索打开具体办公流程
    // 功能描述
    // 当用户使用统一搜索得到办公流程列表，需要点击查看具体办公流程时，统一搜索的H5前端调用Native注入的JS方法通知掌上门户客户端，掌上门户客户端接收信息后跳转具体办公流程页面。统一搜索前端无需判断办公流程通过何种方式打开。
    // 对接方式
    // Js Invoke Native
    // 接口：openWorkFlow(jsonString)
    // jsonString说明
    // 中文名称	参数名	类型	可否为空	备注/可选值
    // 交易唯一请求的ID	transId	String	N	外围系统调用服务的唯一请求ID，不可重复。
    // 流程环节实例id	activityId	String	N	
    // 流程数据类型	procType	String	N	01=待办 02=已办 03=待阅 04=已阅
    // 系统来源	system	String	N	
    // 流程类型中文名	flowName	String	N	
    // 日期	itemDate	String	N	
    // 状态	statusName	String	N	
    // 流程实例id	processId	String	N	
    // 解析用url	url	String	N	
    // 工作台id	workitemId	String	N	
    // 回调接口backFunc(jsonString)
    // 无回调接口，调用成功则关闭当前WebView。
    
    // 5.3.4.	设置webview导航栏标题
    // 对接方式：Js Invoke Native
    // 接口：setAppTitle(title)
    // 参数名	参数类型	可否为空	备注/可选值
    // title	String	N	页面标题
    // 回调接口：无。
    
    // 5.3.5.	退出当前webview
    // 对接方式：Js Invoke Native
    // 接口：closeMyself()
    // 回调接口：无
    
    // 5.3.6.	预览文件
    // 功能描述：
    // 通过掌上门户的预览功能，支持对doc、docx、xls、xlsx、pdf文件展示预览信息。预览功能只能对未加密的、标准的文件有效。通过预览功能能避免原始文件泄露到外网。
    // 要使用预览功能，先将文件上传掌上门户文件服务器（FastDFS服务，上传方式与一期相同），再调用本接口。
    // 对接方式：Js Invoke Native
    // 接口：previewFile(jsonString)
    // 参数名	参数类型	可否为空	备注/可选值
    // fileURL	String	N	文件在FastDFS的相对路径，无需包含IP端口信息
    // fileType	String	N	文件类型，传文件后缀即可，例如doc、docx、pdf
    // backId	String	N	回调序号，H5自行生成，以便标识回调与调用能匹配上。
    // backFunc	String	N	回调方法
    // 回调接口：backFunc (jsonString)
    // 参数名	参数类型	可否为空	备注/可选值
    // status	String	N	0-生成预览失败
    // 1-预览成功
    
    // 5.3.7.	上传办公流程处理记录
    // 功能描述
    // 记录时机：“起草”和“审批”操作指在提交下一处理人时，即完成转给下个人时。“查看详情”操作指在展示办公流程内容时。
    // 记录日志通过Native与H5交互的方式(参考第5点Native与H5的交互)，即H5页面完成起草和审批操作提交下一处理人时触发客户端注入的JS方法，将客户端需要的参数传回，由掌上门户客户端记录汇总。
    // 对接方式：Js Invoke Native
    // 接口：postOperationNote(jsonString)
    // jsonString说明
    // 字段	英文字段名	类型	可否为空	字段说明
    // 操作类型	type	String	N	1.填写用户在OA系统中进行的具体操作类型，如：查阅、填单、修改、审批、转单等；
    // 2.各上报单位根据系统中实际的操作类型按“String”类型上报
    // 操作时间	time	String	N	当前操作发生的具体时间，请按时间格式yyyy-mm-dd HH:MM:SS，精确到秒
    // 操作对象ID	oid	String	Y	1. 当操作类型为“审批、“修改”等涉及的对象有ID时，该字段不能为空。操作涉及单据时，则具体单据编号填写到“操作对象ID”中；
    // 2. 当操作对象【如新闻、公告、通知等】没有具体的ID时，可根据实际情况决定是否上报相应记录的该字段；
    // 访问对象	access	String	Y	参考GXMCC_用户行为日志接口规范，《访问对象》数据字典
    // 流程名称	flow_type	String	N	流程文种的名称，即待办列表中的流程类型，如公司发文、签报、请假申请等
    // 流程标题	flow_title	String	N	流程实例标题，即待办列表中的标题
    // 流程环节实例ID	flow_tache_id	String	Y	操作前，流程实例所在环节ID
    // 返回数据
    // 参数名	参数类型	可否为空	备注/可选值
    // status	String	N	0-日志记录失败
    // 1-日子记录成功
    

    



