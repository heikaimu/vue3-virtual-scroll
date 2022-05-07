<script lang="ts" setup>
import { onMounted, ref } from 'vue'
// import { VirtualScroll } from 'vue3-virtual-scroll'
import { getList } from '../api/product'
import { VirtualScroll } from '../../lib/index'
// import 'vue3-virtual-scroll/style.css'

import ProductCard from './ProductCard.vue'
const list = ref<any[]>([])
onMounted(async() => {
  list.value = await getList({ page: 1, pageSize: 50 })
})

function onTouchEnd() {
  return new Promise((resolve, reject) => {
    getList({ page: 1, pageSize: 50 }).then((newList) => {
      if (Math.random() > 0.3) {
        list.value.push(...newList)
        resolve(true)
      }
      else {
        reject(new Error('加载失败，点击重新拉取数据'))
      }
    })
  })
}
</script>

<template>
  <div class="content">
    <VirtualScroll :list="list" :height="121" :on-touch-end="onTouchEnd">
      <template #default="{ item }">
        <ProductCard :details="item" />
      </template>
    </VirtualScroll>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}

.content {
  height: 100vh;
  margin: 0 auto;
}
</style>
