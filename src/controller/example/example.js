class ExampleController {
    async getApi(ctx, next) {
        // 获取参数
        let request = ctx.request;
        // console.log(request.query); // { aid: '123', name: 'zhangsan' }  对象
        // console.log(request.querystring); // aid=123&name=zhangsan

        // 返回数据
        let list = ['11111', '2222', '3333', '444'];
        ctx.body = {
            code: 0,
            msg: '请求成功',
            list
        };
    }

    async postApi(ctx, next) {
        // 获取参数
        let request = ctx.request;

        // 返回数据
        let list = ['postApi', '2222', '3333', '5555'];
        ctx.body = {
            code: 0,
            msg: '请求成功',
            list
        };
    }
}

module.exports = new ExampleController();