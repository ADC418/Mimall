module.exports = {
    devServer: {
        host: "localhost",
        port: 8080,
        proxy: {
            "/api": {
                target: "https://cnodejs.org",
                changeOrigin: true,
                pathRewrite: {
                    "/api":"/api"
                }
            }
        }
    }
}