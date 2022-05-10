import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import type { Props } from '../types'

export function useStyle(props: Props, startIndex: ComputedRef<number>, endIndex: ComputedRef<number>) {
  // 上方填充高度
  const topFillHeight = computed(() => {
    const row = ~~(startIndex.value / props.grid)
    return row * props.height
  })
  // 下方填充高度
  const bottomFillHeight = computed(() => {
    const row = Math.max(~~((props.list.length - endIndex.value) / props.grid), 0)
    return row * props.height
  })
  // 容器样式
  const containerStyle = computed(() => {
    const propsStyle = typeof props.wrapperStyle === 'object' ? props.wrapperStyle : {}
    return {
      ...propsStyle,
      display: 'flex',
      flexWrap: 'wrap',
      paddingTop: `${topFillHeight.value}px`,
      paddingBottom: `${bottomFillHeight.value}px`,
    }
  })

  const itemStyle = computed(() => {
    return {
      width: `${1 / props.grid * 100}%`,
    }
  })

  return {
    containerStyle,
    itemStyle,
  }
}
