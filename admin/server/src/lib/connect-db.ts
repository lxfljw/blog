/*
 * @Author: luxiaofeng
 * @Date: 2020-10-20 00:25:40
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-21 23:19:07
 * @Description: file content
 */
const mysql = require("mysql");
import dbConfig from "../config/db";
const { promisify } = require("util");
const connection = mysql.createConnection(dbConfig);
connection.connect();
export default (app) => {
  app.context.db = connection;
  app.context.db.query = promisify(connection.query);
};
