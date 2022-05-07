<!--
 * @Description:
 * @Version: 2.0
 * @Author: Yaowen Liu
 * @Date: 2021-10-18 16:22:04
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-05-07 16:54:52
-->

# Vue3 虚拟滚动

vue3 虚拟滚动列表，支持无限滚动加载，丝滑流畅的滚动体验

[在线演示地址](https://vue3-virtual-scroll.netlify.app/)

#### 安装

```bash
npm install vue3-virtual-scroll
```

#### 使用

```JavaScript
import { VirtualScroll } from 'vue3-virtual-scroll'
import 'vue3-virtual-scroll/style.css'
```

```html
<VirtualScroll :list="list" :height="121" :on-touch-end="onTouchEnd">
  <template #default="{ item }">
    <ProductCard :details="item" />
  </template>
</VirtualScroll>
```

作用域插槽返回了1个字段：
`item` 原始数据

#### `Props` 完整参数
| 参数名              | 类型    | 默认值     | 描述                                                                               |
| ----------------- | ------- | ----------- | ----------------------------------------------------------------------------------------- |
| `list`            | `Array`   | `[]`          | 列表数据 |
| `height`          | `Number`  | `0`           | 每一行的高度，该字段为必填 |
| `rowKey`          | `String`  | `id`          | 每一行的唯一key，该字段为必填 |
| `loadingText`     | `String`  | `加载中，请稍等`| 加载时候的文字显示 |
| `bufferCount`     | `Number`  | `4`           | 上下的缓冲条数，解决滑动过快时白屏bug |
| `onTouchEnd`      | `Function`| `function() {}`  | 触底回调函数 |

#### `onTouchEnd` 使用方法
此处模拟了随机拉取失败的情况，返回的错误信息将在底部展示，点击后会重新拉取。需要注意的是在成功后再将页数 `+1`，否则失败后的重新拉取会出现页数错乱的情况。
```JavaScript
function onTouchEnd() {
  return new Promise((resolve, reject) => {
    getList({ page: pageNum, pageSize: 50 }).then((newList) => {
      if (Math.random() > 0.3) {
        list.value.push(...newList)
        pageNum += 1;
        resolve(true)
      }
      else {
        reject(new Error('加载失败，点击重新拉取数据'))
      }
    })
  })
}
```
