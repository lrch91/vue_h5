//var url='http://127.0.0.1/',
//var url='http://10.185.15.59:9080/',
var url= 'http://192.168.191.1/'

module.exports = {
    proxy: {
      '/EIP_SSO': { 
          target: url+'EIP_SSO/', 
          changeOrigin: true, //是否跨域
          secure: false,
          pathRewrite: {
            '^/EIP_SSO': '/',
          }       
      },
      '/EIP_MOA_Services': { 
          target: url+'EIP_MOA_Services/', 
          changeOrigin: true, //是否跨域
          secure: false,
          pathRewrite: {
            '^/EIP_MOA_Services': '/',
          }       
      },
      '/purchase-web': { 
          target: url+'purchase-web/', 
          changeOrigin: true, //是否跨域
          secure: false,
          pathRewrite: {
            '^/purchase-web': '/',
          }       
      }
    }
}