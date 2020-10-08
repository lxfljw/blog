/*
 * @Author: luxiaofeng
 * @Date: 2020-10-08 16:32:41
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-08 20:35:59
 * @Description: 路由配置
 */

import WriteBlog from '@/components/write-blog';
export interface IRouter {
  path: string;
  component: any;
  key: string | number;
}
const router: IRouter[] = [
  {
    path: "/writeBlog",
    key: "writeBlog",
    component: WriteBlog,
  },
];
export default router;
