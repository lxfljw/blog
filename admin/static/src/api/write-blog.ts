/*
 * @Author: luxiaofeng
 * @Date: 2020-10-14 22:51:31
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-16 00:06:01
 * @Description: file content
 */
import { get } from "@/request";

export const getBlogList = () => {
  return get("/article/list", {});
};

export const getBlogById = (id: string) => {
  return get(`/article/${id}`, {});
};
