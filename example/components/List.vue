<script lang="ts" setup>
import { onMounted, ref } from 'vue'
// import { VirtualScroll } from 'vue3-virtual-scroll'
import { getList } from '../api/product'
import { VirtualScroll } from '../../lib/index'
// import 'vue3-virtual-scroll/style.css'
import ProductCard from './ProductCard.vue'
const list = ref<any[]>([])

const vScroll = ref(null)

onMounted(async() => {
  list.value = await getList({ page: 1, pageSize: 250 })
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

function handleScroll(a: number, b: number) {
  // console.log('a:', a, 'b:', b)
}

function handleScrollToIndex() {
  // vScroll.value.scrollToIndex(40)
}
</script>

<template>
  <button class="fixed left-0 top-0" @click="handleScrollToIndex">
    点我
  </button>
  <div class="content">
    <VirtualScroll ref="vScroll" :grid="3" :list="list" :height="121" :on-touch-end="onTouchEnd" @scroll="handleScroll">
      <template #default="{ item }">
        <div class="product-item">
          <ProductCard :details="item" />
        </div>
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
.product-list {
  display: flex;
  flex-wrap: wrap;
}
.product-item {
}
</style>
