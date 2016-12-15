const path = require('path')
const fs = require('fs')
const glob = require('glob')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function(
    exceptList
) {
    let pluginList = []
    let folders = []

    glob.sync('src/html/**/*.html').forEach(file => {

        // const folder = file.replace('.js','')
        if (folders.indexOf(file) === -1) {
            folders.push(file)
        }
    })
    folders.forEach(file => {
        const filename = path.basename(file, '.html')
        const relativePath = file.replace('src/html/', '')

        const obj = global.NODE_ENV === 'development' ? {
                filename: relativePath,
                template: file,
                chunks: [filename, 'vendor'],
                inject: true
            } :
            {
                filename: relativePath,
                template: file,
                chunks: [filename, 'vendor'],
                inject: true,
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeAttributeQuotes: true
                  // more options:
                  // https://github.com/kangax/html-minifier#options-quick-reference
                },
                // necessary to consistently work with multiple chunks via CommonsChunkPlugin
                chunksSortMode: 'dependency'
            }
        pluginList.push(
            new HtmlWebpackPlugin(obj)
        )
    })

    return pluginList
}
