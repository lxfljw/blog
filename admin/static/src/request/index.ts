/*
 * @Author: luxiaofeng
 * @Date: 2020-10-14 22:36:56
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-14 23:53:27
 * @Description: file content
 */
import axios from "axios";
const HOST = "http://localhost:8080";
axios.defaults.baseURL = `${HOST}/api`;

const get = async (url: string, params: Record<string, any>) => {
  return await axios({
    method: "get",
    url,
    params,
  });
};
const post = async (url: string, data: Record<string, any>) => {
  return await axios({
    method: "post",
    url,
    data,
  });
};

export { get, post };
