module.exports = {
    proxy: {
      '/EIP_SSO': { 
          target: 'http://192.168.191.1/EIP_SSO/', 
          // target: 'http://127.0.0.1/EIP_SSO/', 
          // target: 'http://10.185.15.59:9080/EIP_SSO/', 
          changeOrigin: true, //是否跨域
          pathRewrite: {
            '^/EIP_SSO': '/',
          }       
      },
      '/EIP_MOA_Services': { 
          target: 'http://192.168.191.1/EIP_MOA_Services/', 
          // target: 'http://127.0.0.1/EIP_MOA_Services/', 
          // target: 'http://10.185.15.59:9080/EIP_MOA_Services/', 
          changeOrigin: true, //是否跨域
          pathRewrite: {
            '^/EIP_MOA_Services': '/',
          }       
      },
      '/purchase-web': { 
          target: 'http://192.168.191.1/purchase-web/', 
          changeOrigin: true, //是否跨域
          pathRewrite: {
            '^/purchase-web': '/',
          }       
      }
    }
}