module.exports = {
    devServer: { //名字固定
        host: "localhost",
        port: 8080, 
        proxy: { //代理
            "/api": { //替换代理地址名称 拦截到/api 访问下面的地址 访问a，实际访问的是b
                target: "http://mall-pre.springboot.cn", //代理目标
                changeOrigin: true,//可否跨域
                pathRewrite: {
                    "/api": "",//重写接口
                }
            }
        }
    }
}