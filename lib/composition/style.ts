import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import type { Props } from '../types'

export function useStyle(props: Props, startIndex: ComputedRef<number>, endIndex: ComputedRef<number>) {
  // 上方填充高度
  const topFillHeight = computed(() => {
    return startIndex.value * props.height
  })
  // 下方填充高度
  const bottomFillHeight = computed(() => {
    return (props.list.length - endIndex.value - 1) * props.height
  })
  // 容器样式
  const containerStyle = computed(() => {
    return {
      paddingTop: `${topFillHeight.value}px`,
      paddingBottom: `${bottomFillHeight.value}px`,
    }
  })

  return {
    containerStyle,
  }
}
