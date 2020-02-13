const Router = require('koa-router');
const router = new Router();
const ExampleRouter = require('./example/example')

router.get('/', async (ctx, next) => {
    ctx.body = "Hello koa";
})

router.use(ExampleRouter.routes());

module.exports = router;