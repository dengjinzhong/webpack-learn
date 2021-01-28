# webpack学习之路

## lession1 webpack 究竟是什么

### 安装 webpack
初始化项目, 创建 package.json 文件
```shell script
npm init
```
安装 webpack
```shell script
npm install webpack webpack-cli --save-dev
```
执行编译
```shell script
npx webpack index.js
```

### 模块打包工具
wbepack 是一个模块打包工具

### 通过脚本配置运行
创建文件 webpack.config.demo3.js
执行
```shell script
npx webpack --config webpack.config.demo3.js
```
