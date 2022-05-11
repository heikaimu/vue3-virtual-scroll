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
const scrollText = ref('')
function handleScroll(a: number, b: number) {
  scrollText.value = `'startIndex:', ${a}, 'endIndex:', ${b}`
}

function handleScrollToIndex() {
  vScroll.value.scrollToIndex(100)
}
</script>

<template>
  <div class="fixed left-1 top-1">
    <button class=" rounded-lg bg-gray-600 p-3 text-white" @click="handleScrollToIndex">
      滚动到索引 100 的卡片
    </button>
    <div>
      {{ scrollText }}
    </div>
  </div>
  <div class="content">
    <VirtualScroll ref="vScroll" :row-space="10" :col-space="10" :grid="2" :list="list" :height="121" :on-touch-end="onTouchEnd" @scroll="handleScroll">
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
  background-color: #333333;
}
.product-list {
  display: flex;
  flex-wrap: wrap;
}
.product-item {
}
</style>
