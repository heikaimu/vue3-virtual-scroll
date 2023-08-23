<!--
 * @Date: 2022-05-07 15:10:08
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2023-08-23 14:47:46
 * @FilePath: /vue3-virtual-scroll/example/components/List.vue
-->
<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
// import { VirtualScroll } from 'vue3-virtual-scroll'
import { getList } from '../api/product'
import { VirtualScroll } from '../../lib/index'
// import OrgForm from './OrgForm.vue'
// import 'vue3-virtual-scroll/style.css'
import ProductCard from './ProductCard.vue'

const list = ref<any[]>([])
const vScroll = ref<InstanceType<typeof VirtualScroll> | null>(null)

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
  scrollText.value = `startIndex:, ${a}, posy:, ${b}`
}

const config = reactive({
  grid: 2,
  height: 120,
  rowKey: 'id',
  // onTouchEnd,
  loadingText: '加载中，请稍等',
  bufferCount: 4,
  wrapperStyle: {},
  colSpace: 10,
  rowSpace: 10,
})

const posy = ref(0)
function handleScrollTo() {
  if (vScroll.value) {
    vScroll.value.scrollToPos(posy.value)
  }
}

const startIndex = ref(0)
function handleScrollToIndex(val: number) {
  if (vScroll.value) {
    vScroll.value.scrollToIndex(startIndex.value)
  }
}

</script>

<template>
  <el-row>
    <el-col :span="8">
      <div style="padding: 10px; background-color: #fff;">
        <el-divider>回调数据</el-divider>
        {{scrollText}}
        <el-divider>列数</el-divider>
        <el-input-number v-model="config.grid" @change=""/>
        <el-divider>滚动到y轴像素</el-divider>
        <el-input-number v-model="posy"/>
        &nbsp;
        <el-button type="primary" @click="handleScrollTo">滚动到</el-button>
        <el-divider>滚动到卡片索引</el-divider>
        <el-input-number v-model="startIndex"/>
        &nbsp;
        <el-button type="primary" @click="handleScrollToIndex">滚动到</el-button>
      </div>
    </el-col>
    <el-col :span="16">
      <div class="content">
        <VirtualScroll ref="vScroll" v-bind="config" :list="list" :on-touch-end="onTouchEnd" @scroll="handleScroll">
          <template #default="{ item }">
            <div class="product-item">
              <ProductCard :details="item" />
            </div>
          </template>
        </VirtualScroll>
      </div>
    </el-col>
  </el-row>
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
</style>
