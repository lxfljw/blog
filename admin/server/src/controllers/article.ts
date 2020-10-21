/*
 * @Author: luxiaofeng
 * @Date: 2020-10-11 19:41:43
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-21 23:15:20
 * @Description: 文章控制器
 */
import { Controller, GET, POST } from "../lib/decoratorRouter";
@Controller("/article")
export default class UserController {
  /**
   * 获取文章列表 需要分页
   * @param ctx
   * @param next
   */
  @GET("/list")
  async articleList(ctx, next) {
    const sql = "SELECT * FROM article";
    const result = await ctx.db.query(sql);
    ctx.body = result;
    next();
  }
  /**
   * 根据文章id获取文章
   * @param ctx
   * @param next
   */
  @POST("/one")
  async getArticleById(ctx, next) {
    console.log(ctx.request.body);
    const { articleId } = ctx.request.body;
    const sql = `SELECT * FROM article WHERE id=${articleId}`;
    const result = await ctx.db.query(sql);
    ctx.body = {data: result};
    next();
  }
}
