/* eslint-disable */
/* 配置参考 https://cli.vuejs.org/zh/config/#vue-config-js */
const path = require('path');

// const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
function resolve(dir) {
  return path.resolve(__dirname, dir);
}
module.exports = {
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // use the full build with in-browser compiler?
  // webpack-dev-server 相关配置
  devServer: {
    host: '0.0.0.0',
    port: 8000,
    hot: true,
    open: true,
    proxy: { // 设置代理
      '/': {
        target: 'http://192.168.0.250:8080', // 开发版
        ws: false,
      },
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
      },
    },
    plugins: [
      new CompressionPlugin({
        test: /\.js$|\.html$|.\css/, // 匹配文件名
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false, // 不删除源文件
      }),
    ]
  },
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'xzapp';
        return args;
      })
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores 构建时开启多进程处理babel编译
  parallel: require('os').cpus().length > 1,
  // 第三方插件配置
  pluginOptions: {
    // ...
  },
};
