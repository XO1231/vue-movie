module.exports = {
  // 选项...
  publicPath: './',
  devServer: {
    https: false,
    proxy: {
      '/chat': {
        target: 'http://openapi.tuling123.com/openapi',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/chat': ''
        }
      },
      '/si': {
        target: 'https://api.ownthink.com/',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/si': ''
        }
      }
    },
    before: app => { }
  }
}