import axios from 'axios'

// axios.defaults.timeout = 600000;                        //响应时间
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置请求头
axios.defaults.baseURL = 'http://192.168.191.1:8080/';   //配置接口地址
// axios.defaults.baseURL = 'http://127.0.0.1:8080/';   //配置接口地址
// axios.defaults.withCredentials=true
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    if(config.url.search('EIP_MOA_Services')!=-1){
        var data = config.data;
        try{
            for(var key in data){
                if((data[key]).constructor==Array){
                    console.log("data[key]");
                    console.log((data[key]).constructor);
                    for(var i=0;i<data[key].length;i++){
                        var obj = (data[key])[i];
                        for(var ky in obj){
                            obj[ky] = encodeURI(obj[ky])
                        }
                        // {"procId":"61294390","userId":"lushengde","system":"efinancema","queryItem":[{"colmEnName":"NextStep","colmValue":"","reserve1":""}]}
                        //http://10.185.15.59:9080/EFinancema/unifyAction.do?method=apply1&userId=lushengde&procId=61294390&processPath=true
                        
                        (data[key])[i] = obj;
                        // {"procId":"61294390","userId":"lushengde","system":"efinancema","queryItem":[{"colmEnName":"NextStep","colmValue":"","reserve1":""}]}
                        //http://10.185.15.59:9080/EFinancema/unifyAction.do?method=apply1&userId=lushengde&procId=61294390&processPath=true
                    }
                    console.log(JSON.stringify(data[key]))
                }else{
                    data[key] = encodeURI(data[key]);
                }
            } 
        }catch(error){
            console.log("request.error")
            console.log(error)
        }finally{

        }
        
        config.data = data;
        return config;
    }else{
        return config;
    }
	//在发送请求之前做某件事
    // if(config.method  === 'post'){
    //     config.data = JSON.stringify(config.data);
        // config.headers={
            // 'Content-Type':'application/json'
            // 'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
        // }
    // }
},(error) =>{
    return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    if(res.config.url.search('EIP_MOA_Services')!=-1){
        try {
            var temp = res.data
            res.data = JSON.parse(decodeURIComponent(res.data));
        } catch(error) {
            // console.log("response.error");
            // console.log(error);
            // res.data={errFlag:"Y"}
    　　} finally {
    　　}
        return res;
    }else{
        return res;
    }
}, (error) => {
    var err={};
    err.status = error.response.status
    err.statusText = error.response.statusText
    return Promise.reject(err);
});

export function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                console.log("==========="+url+"================")
                console.log(JSON.stringify(response.data))
                console.log("===========================================================================")
                if(!response.data.errFlag){
                    reject("errFlag为空");
                }else if(response.data.errFlag=="Y"){
                    reject(response.data.errMsg||"返回数据失败");
                }else if(response.data.errFlag=="N"){
                    resolve(response.data);
                }
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
}

//============================================================================================

/* export function login3(data) {
    return new Promise((resolve, reject) => {
        axios({
                method: 'post',
                url: '/EIP_SSO/j_security_check',
                data: data,
                validateStatus: function (status) {
                    return status < 500
                }
            }).then(response => {
                console.log(response)
            }, err => {
                reject(err);
            })
            .catch((error) => {
               reject(error)
            })
    })
} */

/* export function login2(data) {
    var obj = new XMLHttpRequest();
    obj.open("POST", '/EIP_SSO/j_security_check', true);
    obj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");  // 添加http头，发送信息至服务器时内容编码类型
    obj.onreadystatechange = function() {
        console.log(obj.readyState);
        console.log(obj.status);
        // if (obj.readyState == 4 && (obj.status == 200 || obj.status == 304)) {  // 304未修改
        //     fn.call(this, obj.responseText);
        // }
    };
    obj.send(JSON.stringify(data));
} */

function ajax(options) {
    function empty() {}

    function obj2Url(obj) {
        if (obj && obj instanceof Object) {
            var arr = [];
            for (var i in obj) {
                if (obj.hasOwnProperty(i)) {
                    if (typeof obj[i] == 'function') obj[i] = obj[i]();
                    if (obj[i] == null) obj[i] = '';
                    arr.push(escape(i) + '=' + escape(obj[i]));
                }
            }
            return arr.join('&').replace(/%20/g, '+');
        } else {
            return obj;
        }
    };
    var opt = {
        url: '', //请求地址
        sync: true, //true，异步 | false　同步，会锁死浏览器，并且open方法会报浏览器警告
        method: 'GET', //提交方法
        data: null, //提交数据
        username: null, //账号
        password: null, //密码
        dataType: null, //返回数据类型
        success: empty, //成功返回回调
        error: empty, //错误信息回调
        timeout: 0, //请求超时ms
    };
    for (var i in options) if (options.hasOwnProperty(i)) opt[i] = options[i];
    var accepts = {
        script: 'text/javascript, application/javascript, application/x-javascript',
        json: 'application/json',
        xml: 'application/xml, text/xml',
        html: 'text/html',
        text: 'text/plain'
    };
    var abortTimeout = null;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            xhr.onreadystatechange = empty;
            clearTimeout(abortTimeout);
            var result,dataType, error = false;
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304 || (xhr.status == 0 && protocol == 'file:')) {
                if (xhr.responseType == 'arraybuffer' || xhr.responseType == 'blob') {
                    result = xhr.response;
                } else {
                    result = xhr.responseText;
                    dataType = opt.dataType ? opt.dataType : xhr.getResponseHeader('content-type').split(';', 1)[0];
                    for (var i in accepts) {
                        if (accepts.hasOwnProperty(i) && accepts[i].indexOf(dataType) > -1) dataType = i;
                    }
                    try {
                        if (dataType == 'script') {
                            eval(result);
                        } else if (dataType == 'xml') {
                            result = xhr.responseXML
                        } else if (dataType == 'json') {
                            result = result.trim() == '' ? null : JSON.parse(result)
                        }
                    } catch (e) {
                        opt.error(e, xhr);
                        xhr.abort();
                    }
                }
                opt.success(result, xhr);
            } else {
                opt.error(xhr.statusText, xhr);
            }
        }
    };
    if (opt.method == 'GET') {
        var parse = opt.url.parseURL();
        opt.data = Object.assign({}, opt.data, parse.params);
        opt.url = parse.pathname + '?' + obj2Url(opt.data);
        opt.data = null;
    }
    xhr.open(opt.method, opt.url, opt.sync, opt.username, opt.password);
    if (opt.method == 'POST') xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    if (opt.timeout > 0) {
        abortTimeout = setTimeout(function() {
            xhr.onreadystatechange = empty
            xhr.abort();
            opt.error('timeout', xhr);
        }, opt.timeout)
    }
    xhr.send(opt.data ? obj2Url(opt.data) : null);
}

export function login(data, s, e){
    ajax({
        url: url.login,
        method: 'POST',
        data: data,
        success:function(data,xhr){
            console.log("success");
            s();
        },
        error:function(err,xhr){
            console.log("error");
            e();
        }
    });
}

//============================================================================================
export function checkLogin(){
    var tag=0;
    var cArray = document.cookie.split(";")
    if(!cArray || cArray.length<2){
        console.log("checklogin-------------------false")
        return false;
    }
    for(var k in cArray){
       if((cArray[k].split(":")[0].search("LtpaToken")!=-1)||(cArray[k].split(":")[0].search("LtpaToken2")!=-1)){
           tag++;
       }
    }
    if(tag==2){
        console.log("checklogin-------------------true")
        return true
    }else{
        console.log("checklogin-------------------false")
        return false
    }
}
//============================================================================================

export let url= {
    //登录 j_username  j_password
    login: '/EIP_SSO/j_security_check',
    //表单 procType procId userId system
    form: '/EIP_MOA_Services/QueryProcDataForSimpleSrv.do?method=getQueryProcDataForSimple',
    //表格 procType procId userId system pageNum pageSize keyColmName
    table: '/EIP_MOA_Services/QueryProcDataForSimpleTableSrv.do?method=getQueryProcDataForSimpleTable',
    //审批意见接口 userId system procId commentType  commentType  全部=00 领导=01
    opinions: '/EIP_MOA_Services/QueryCommentSrv.do?method=getQueryComment',
    //路径1.查询路径 参数 procId userId system queryItem 其中queryItem为实体类 里面是 colmEnName（固定为NextStep） colmValue(空) reserve1(空)
    //   2.查询人   参数 procId userId system queryItem 其中queryItem为实体类 里面是 colmEnName（固定为NextStep） colmValue(里面为stepId，在查询路径json提供) reserve1(stepName,在查询路径json提供)
    queryTpl: '/EIP_MOA_Services/QueryTemplateRelaInfoSrv.do?method=getQueryTemplateRelaInfo',
    //暂不能用 提交 procId userId comment nextUser nextStep nextStepName
    submit: '/EIP_MOA_Services/SubmitProcDataSrv.do?method=getSubmitProcData',
    //附件下载 fileId system
    // 'attachDownload': '/EIP_MOA_Services/DownloadAttachmentsSrv.do?method=getDownloadAttachments',
    attachDownload: '/EIP_MOA_Services/DownloadAttachSrv.do?method=getDownloadAttach',
    //常用审批意见查询接口 userId flowName
    usualOpinionOptions: '/EIP_MOA_Services/QueryPresetAuditingCommentsSrv.do?method=getQueryPresetAuditingComments',
    // 暂未用 流程轨迹查询接口 userId procId 注意这里的procId是process_unify_XXX表的processId字段
    queryTrailFlow: '/EIP_MOA_Services/QueryProcTracingSrv.do?method=getQueryProcTracing',
}


