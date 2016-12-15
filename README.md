# vue-multipage

##下载本模板

- vue init chrisHchen/vue-multipage projectname (需预先安装vue-cli)


## 基本开发流程

- npm install


## 项目结构

+ src (前端目录)
  + assets(静态资源目录，如图片)
  + components（.vue文件，最终会被打包成js）
  + html（前端模板目录，结构要和entry目录一致）
  + entry (webpack使用的入口，结构要和html目录一致)
  + template (头部，底部等公用部分)
+ dist


## 开发
npm run dev
(浏览器地址栏输入：http://localhost:9001/demo/demo.html)

## 构建
npm run build

## 构建(静态服务器)
npm run build:static
(修改 config/index 下的 staticServerPath 和 staticAssetsSubDirectory 为自己的静态服务器地址)

## 生产
npm start


## 例子
项目里已经有几个demo
