/*
 * @Author: luxiaofeng
 * @Date: 2020-10-11 19:41:43
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-14 23:16:03
 * @Description: file content
 */
import { Controller, GET } from "../lib/decoratorRouter";
import Article from "../models/article";
@Controller("/article")
export default class UserController {
  /**
   * 获取名字
   */
  // @GET("/:articleid")
  // getName(ctx, next) {
  //   Article.create(
  //     {
  //       title: "文章1",
  //       author: "lxf",
  //       content: "内容这是哈哈哈哈和00",
  //     },
  //     (err, doc) => {
  //       console.log("dsf");

  //       console.log(err, doc);
  //     }
  //   );
  //   console.log(ctx.params.articleid);
  //   ctx.body = "文章控制器";
  //   next();
  // }
  @GET("/list")
  async articleList(ctx, next) {
    const data = await Article.find({});
    ctx.body = { data, statusCode: 1, code: 200, err: null };
    next();
  }
}
