/*
 * @Author: luxiaofeng
 * @Date: 2020-09-13 23:29:34
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-21 23:19:16
 * @Description: file content
 */
const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
import loadRouter from "./lib/loadRouter";
import coonnectDB from "./lib/connect-db";
const app = new Koa();
const PORT = 3000;
app.use(bodyparser());
coonnectDB(app);
loadRouter(app);
app.listen(PORT, () => {
  console.log(`服务启动在${PORT}端口`);
});
