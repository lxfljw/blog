/*
 * @Author: luxiaofeng
 * @Date: 2020-10-11 17:36:08
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-11 20:31:11
 * @Description: 数据库配置
 */
const mongoose = require("mongoose");
export const DB_PORT = 27017;
// TODO 根据环境区分数据库地址
export const DB_ADRESS = `mongodb://localhost:${DB_PORT}/blog`;

// 数据库连接
mongoose.connect(DB_ADRESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

export default mongoose;
