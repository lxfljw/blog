/*
 * @Author: luxiaofeng
 * @Date: 2020-10-14 22:51:31
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-21 22:48:15
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
