import { onMounted, ref } from 'vue'
import type { Props } from '../types'

// 容器
export function useContainer(props: Props) {
  // 列表容器
  const scrollContainer = ref<HTMLElement>()
  // 展示的数量
  const viewSize = ref(0)
  // dom渲染后根据容器的高度以及每一行内容的高度计算出展示数量
  onMounted(() => {
    if (!scrollContainer.value)
      return

    viewSize.value = ~~(scrollContainer.value.offsetHeight / props.height) + 2
  })

  return {
    scrollContainer,
    viewSize,
  }
}
