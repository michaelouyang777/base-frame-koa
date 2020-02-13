const Router = require('koa-router');
const router = new Router();
const ExampleController = require('../../controller/example/example');

router.get('/get', ExampleController.getApi)
router.post('/post', ExampleController.postApi)

module.exports = router;