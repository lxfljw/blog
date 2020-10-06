/*
 * @Author: luxiaofeng
 * @Date: 2020-09-20 15:07:04
 * @LastEditors: luxiaofeng
 * @LastEditTime: 2020-10-06 12:02:33
 * @Description: file content
 */
import {Controller, GET} from '../lib/decoratorRouter'

@Controller('/user')
export default class UserController {
    /**
     * 获取名字
     */
    @GET('/name')
    getName(ctx, next) {
        ctx.body = 'luxiaofeng-99'
        next()
    }
    @GET('/age')
    geAge(ctx, next) {
        ctx.body = 18
        next()
    }
}