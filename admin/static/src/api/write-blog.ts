/*
 * @Author: luxiaofeng
 * @Date: 2020-10-14 22:51:31
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-14 23:20:50
 * @Description: file content
 */
import { get } from "@/request";

export const getBlogList = () => {
  return get('/article/list', {});
};
