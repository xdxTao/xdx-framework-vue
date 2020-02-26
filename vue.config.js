const baseUrl = '/'
module.exports = {

    devServer: {
        host: '0.0.0.0',
        port: 80,
        // https: false,
        // hotOnly: false,
        // open: true,
        // disableHostCheck: true,
        before: function(app) {
            const base = baseUrl.replace(/\/+$/, '') // 移除尾部斜杠
            app.get(`${base}/:page/*`, function(req, res, next) {
                if (['login', 'index'].includes(req.params.page)) {
                // 把 /<base>/<page>/* 重定向到 /<base>/<page>/
                    req.url = `${base}/${req.params.page}/`
                    next('route')
                } else {
                    next()
                }
            })
        }
    },
    pages: {
        login: {
            entry: 'src/pages/login/login.main.js',
            template: 'public/login.html'
        },
        index: {
            entry: 'src/main.js',
            template: 'public/index.html'
        }
    }

}
