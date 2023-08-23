/*
 * @Date: 2022-04-22 13:24:28
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2023-08-23 14:29:49
 * @FilePath: /vue3-virtual-scroll/example/api/product.ts
 */

const website = 'https://www.getphotoblanket.com';

export const getList = ({ page = 1, pageSize = 20 }) => {
  const url = `${website}/products.json?page=${page}&limit=${pageSize}`
  return fetch(url)
    .then(res => res.json())
    .then(res => res.products)
}
