/*
 * @Author: luxiaofeng
 * @Date: 2020-09-15 22:39:55
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-14 22:22:02
 * @Description:  路由装饰器工厂
 */

import { Context, Next } from "koa";

const Router = require("koa-router");
const router = new Router();

const basePrefix = "/api";

//声明所有请求方式
const RequestMethod = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
  ALL: "all",
};

/**
 * 控制器 装饰器工厂函数
 */
export function Controller(modulePrefix: string) {
  // 控制器前缀
  router.controllerPrefix = basePrefix + modulePrefix;
  return (Target) => {
    Target.router = router;
    const target = new Target();
    //  返回指定对象的所有自有属性
    const actionList = Object.getOwnPropertyDescriptors(Target.prototype);
    // 所有的方法

    Object.keys(actionList).forEach((k) => {
      if (k === "constructor") return;
      const action = actionList[k];
      const fn = action.value;
      if (typeof fn !== "function") return;
      // this重新指向对象
      fn.call(target, router, target);
    });
  };
}

/**
 * 公用请求函数
 * @param url
 * @param method
 */
function Request(url, method) {
  // 类中定义的处理函数 参数分别为 构造函数, 属性名 描述器
  // @ts-ignore
  return function (constructor, atrtibute, desc) {
    const hanlder = desc.value;
    desc.value = function (router, target) {
      // class如果有前置装饰器
      // const beforeDec = target.__before
      console.log("", url);

      router[method](
        router.controllerPrefix + url,
        async (ctx: Context, next: Next) => {
          // if (beforeDec && typeof beforeDec === 'function') {
          //   const beforeRef = beforeDec.call(target, router, target)

          // }
          await hanlder.call(target, ctx, next);
        }
      );
    };
  };
}

export function GET(url) {
  return Request(url, RequestMethod.GET);
}
export function POST(url) {
  return Request(url, RequestMethod.GET);
}
export function PUT(url) {
  return Request(url, RequestMethod.GET);
}
export function DELETE(url) {
  return Request(url, RequestMethod.GET);
}
export function ALL(url) {
  return Request(url, RequestMethod.GET);
}

export default router;
