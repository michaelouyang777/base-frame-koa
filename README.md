## 开发
```bash
# 安装依赖
npm install

# 启动服务
npm run dev
```
浏览器访问 http://localhost:3001


## 功能
```bash
# 模拟后台接口
项目内已经分离好了router层和controller层，里面已经写好了一个example的例子，编写相关的模块直接新建一个文件夹在里面写对应模块的模拟数据就可以了。dao层操作数据库这部分不做，只是模拟数据，没必要用到dao层了。

# 跨域
项目已经配置好了跨域，前端项目可以直接访问获取数据，不需要在前端配置代理。

# 热更新
本koa项目已配置热更新，coding后刷新页面，即可获取新的内容
```