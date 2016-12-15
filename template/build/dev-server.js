const express = require('express')
const config = require('../config')
const http = require('http')
const webpack = require('webpack')
const path = require('path')


global.NODE_ENV = process.env.NODE_ENV || JSON.parse(config.dev.env.NODE_ENV)

var PORT = process.env.PORT || config.dev.port

const isDev = NODE_ENV === 'development'
const app = express()


if(isDev){
  const webpackConfig = require('./webpack.dev.conf')
  const compiler = webpack(webpackConfig)

  const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false
    }
  })

  const hotMiddleware = require('webpack-hot-middleware')(compiler)
  // force page reload when html-webpack-plugin template changes
  compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
      hotMiddleware.publish({ action: 'reload' })
      cb()
    })
  })

  app.use(devMiddleware)
  app.use(hotMiddleware)
  // const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
  // const server = http.createServer(app)
  // app.use(staticPath, express.static('./dist'))
}

app.use(express.static(config.build.assetsRoot))

app.listen(PORT, function () {
  console.log('App (' + global.NODE_ENV + ') is now running on PORT '+ PORT +'!')
})
