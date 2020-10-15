/*
 * @Author: luxiaofeng
 * @Date: 2020-10-11 19:41:43
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-16 00:14:36
 * @Description: file content
 */
import { Controller, GET } from "../lib/decoratorRouter";
import Article from "../models/article";
@Controller("/article")
export default class UserController {
  /**
   * 获取名字
   */
  // @GET("/add")
  // getName(ctx, next) {
  //   Article.create(
  //     {
  //       title: "认真学习前端的几点建议",
  //       author: "lxf",
  //       content: "# 1.xxx \n * 认真 \n * 努力 \n * 专注",
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
    console.log(Article);

    const data = await Article.find({});
    ctx.body = { data, statusCode: 1, code: 200, err: null };
    next();
  }
  @GET("/:articleId")
  async getArticleById(ctx, next) {
    console.log(Article);

    const data = await Article.find({ _id: ctx.params.articleId });
    ctx.body = { data, statusCode: 1, code: 200, err: null };
    next();
  }
}
