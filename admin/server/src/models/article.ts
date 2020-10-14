/*
 * @Author: luxiaofeng
 * @Date: 2020-10-11 19:19:25
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-11 20:32:32
 * @Description: 博客数据模板
 */
// const mongoose = require("../config/db");
import mongoose from "../config/db";
const { Schema, model } = mongoose;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, required: true },
  createTime: { type: Date, required: false },
  updateTime: { type: Date, required: false },
});

export default model("article", articleSchema);
