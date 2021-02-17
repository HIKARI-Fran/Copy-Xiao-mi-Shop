module.exports = {
  lintOnSave: false,
  devServer: {
    host: 'localhost',
    port: 8080,
    // 做代理
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },

}
