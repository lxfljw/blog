/*
 * @Author: luxiaofeng
 * @Date: 2020-09-13 23:29:34
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-11 20:30:00
 * @Description: file content
 */
const Koa = require("koa");
import loadRouter from "./lib/loadRouter";
const app = new Koa();

const PORT = 3000;
loadRouter(app);
app.listen(PORT, () => {
  console.log(`服务启动在${PORT}端口`);
});
