/*
 * @Author: luxiaofeng
 * @Date: 2020-09-20 15:07:04
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-14 23:52:57
 * @Description: file content
 */
import { Controller, GET } from "../lib/decoratorRouter";

@Controller("/user")
export default class UserController {
  /**
   * 获取名字
   */
  @GET("/name")
  getName(ctx, next) {
    ctx.body = "luxiaofeng-全新测试4--009";
    next();
  }
  @GET("/age")
  geAge(ctx, next) {
    ctx.body = 18;
    next();
  }
}
