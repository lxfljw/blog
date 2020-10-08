/*
 * @Author: luxiaofeng
 * @Date: 2020-09-20 18:54:38
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-07 19:46:26
 * @Description: 加载控制器的路由
 */

const fs = require("fs");
const { resolve } = require("path");
const rootPath = process.env.NODE_ENV === "development" ? "src" : "dist";
// const rootPath = 'src'
const controllerPath = resolve(rootPath, "controllers");
// console.log(process.env.NODE_ENV+"环境:执行目录"+controllerPath, '--end')//这是controller

export default function loadRouter(app) {
  const loadController = (path) => {
    const files = fs.readdirSync(path);
    files.forEach((file) => {
      const filePath = resolve(path, file);
      if (fs.lstatSync(filePath).isDirectory()) {
        loadController(filePath);
      } else {
        const target = require(filePath);
        console.log("控制器路径", filePath);
        console.log("..", target);
        if (target && target.default.router) {
          app.use(target.default.router.routes());
        } else {
          console.error(filePath, " 不存在");
        }
      }
    });
  };
  loadController(controllerPath);
}
