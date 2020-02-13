const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const app = new Koa();
const router = new Router({prefix: '/api'});
const routerIndex = require('./routers/index');

app.use(bodyParser());
app.use(cors());

// 应用层中间件
app.use(async (ctx, next) => {
  // console.log(new Date());
  /* 当前路由匹配完成以后继续向下匹配 */
  await next(); 
});

router.use(routerIndex.routes());
app.use(router.routes()); // 启动路由 
app.use(router.allowedMethods());

app.listen(3001, () => {
  console.log('localshot:3001');
});