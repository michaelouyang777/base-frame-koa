var Koa = require('koa'),
    router = require('koa-router')(),
    views = require('koa-views'),
    bodyParser = require('koa-bodyparser');

var app = new Koa();

// 配置模板引擎中间件 -- 第三方中间件
app.use(views('src/views', { // views是放置模板的文件目录
    extension: 'ejs' // 应用ejs模板引擎
}))

router.get('/', async (ctx) => {
    let title = "你好ejs";
    // 把后台的数据渲染到前台		
    await ctx.render('index', {
        title: title
    });
})

router.get('/post', async (ctx) => {
    await ctx.render('post');
})
// 接收post提交的数据
router.post('/doAdd', async (ctx) => {
    console.log(ctx.request.body);
    ctx.body = ctx.request.body; // 获取表单提交的数据
})

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);