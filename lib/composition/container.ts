import { computed, onMounted, ref } from 'vue'
import type { Props } from '../types'

// 容器
export function useContainer(props: Props) {
  // 行高度
  const rowHeight = computed(() => {
    return props.height + props.rowSpace
  })
  // 列表容器
  const scrollContainer = ref<HTMLElement>()
  // 展示的数量
  const viewSize = ref(0)
  // dom渲染后根据容器的高度以及每一行内容的高度计算出展示数量
  onMounted(() => {
    if (!scrollContainer.value)
      return

    viewSize.value = ~~(scrollContainer.value.offsetHeight / rowHeight.value) + 2
  })

  return {
    scrollContainer,
    viewSize,
  }
}
