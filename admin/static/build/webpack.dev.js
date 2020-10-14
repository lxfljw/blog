/*
 * @Author: luxiaofeng
 * @Date: 2020-09-13 23:29:34
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-14 23:47:15
 * @Description: file content
 */
const common = require("./webpack.common.js");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 目标服务器地址
        secure: false, // 目标服务器地址是否是安全协议
        changeOrigin: true, // 是否修改来源, 为true时会让目标服务器以为是webpack-dev-server发出的请求!
        // '/api/login' =>    target + '/login'
      },
    },
  },
});
