import * as Koa from "koa";

const app = new Koa();
const PORT = 3000;
app.use((ctx, next) => {
  ctx.body = "hello koa";
  next();
});
app.listen(PORT, () => {
  console.log(`服务启动在${PORT}端口`);
});
