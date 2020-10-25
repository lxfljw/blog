/*
 * @Author: luxiaofeng
 * @Date: 2020-10-14 22:51:31
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-25 23:17:29
 * @Description: file content
 */
import { get, post } from "@/request";
type Params = Record<string, any>;

export const getBlogList = () => {
  return get("/article/list", {});
};

export const getBlogById = (params: Params) => {
  return post(`/article/one`, params);
};

export const saveBlog = (data: Params) => {
  return post(`/article/save`, data);
};