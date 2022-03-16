<!--
 * @Author: Yaowen Liu
 * @Date: 2022-03-11 16:26:27
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-03-16 16:04:38
-->
打包
```
npm run build
```

生成本地测试包
```
npm pack
```

安装本地测试包
```
npm i ./xxxxx.tgz
```

引入测试包进行测试，没有问题则发布。
发布前修改版本号
```
npm login

npm publish
```