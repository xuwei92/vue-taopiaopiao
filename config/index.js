var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../server/views/index.html'),
    assetsRoot: path.resolve(__dirname, '../server/views/'),
    assetsSubDirectory: '../public',
    assetsPublicPath: '/',
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/movie/coming': 'http://localhost:9090',
        '/movie/hot': 'http://localhost:9090',
        '/movie/info': 'http://localhost:9090',
        '/movie/evaluation': 'http://localhost:9090',
        '/movie/cinema': 'http://localhost:9090',
        '/movie/cinema_detail': 'http://localhost:9090',
        '/movie/swiper': 'http://localhost:9090',
        '/movie/city': 'http://localhost:9090'
    },
    cssSourceMap: false
  }
}
