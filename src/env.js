//接口环境设置

let baseURL;
//了解process.env 获取nodejs中的环境变量的参数信息 package.json中的serve/build/test 的--mode yarn serve 可查看 （要了解--mode）
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = "http://dev-mall-pre.springboot.cn/api"
        break
    case 'test':
        baseURL = "http://test-mall-pre.springboot.cn/api"
        break
    case 'prev':
        baseURL = "http://prev-mall-pre.springboot.cn/api"
        break
    case 'prod':
        baseURL = "http://mall-pre.springboot.cn/api"
        break
    default:
        baseURL = "http://mall-pre.springboot.cn/api"
        break
}


export default {
    baseURL
}