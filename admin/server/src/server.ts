/*
 * @Author: luxiaofeng
 * @Date: 2020-09-13 23:29:34
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-09-21 00:19:47
 * @Description: file content
 */
import * as Koa from "koa";
import loadRouter from './lib/loadRouter'
const app = new Koa();
const PORT = 3000;
// app.use((ctx, next) => {
//   ctx.body = "hello koa";
//   next();
// });
loadRouter(app)
app.listen(PORT, () => {
  console.log(`服务启动在${PORT}端口`);
});
