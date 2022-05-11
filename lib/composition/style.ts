import type { ComputedRef } from 'vue'
import { computed } from 'vue'
import type { Props } from '../types'

export function useStyle(props: Props, startIndex: ComputedRef<number>, endIndex: ComputedRef<number>) {
  // 行高度
  const rowHeight = computed(() => {
    return props.height + props.rowSpace
  })

  // 上方填充高度
  const topFillHeight = computed(() => {
    const row = ~~(startIndex.value / props.grid)
    return row * rowHeight.value
  })
  // 下方填充高度
  const bottomFillHeight = computed(() => {
    const row = Math.max(~~((props.list.length - endIndex.value) / props.grid), 0)
    return row * rowHeight.value
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

  const itemStyle = computed<any>(() => {
    return {
      boxSizing: 'border-box',
      width: `${1 / props.grid * 100}%`,
      paddingLeft: props.colSpace === 0 ? 0 : `${props.colSpace / 2}px`,
      paddingRight: props.colSpace === 0 ? 0 : `${props.colSpace / 2}px`,
      marginBottom: `${props.rowSpace}px`,
    }
  })

  return {
    containerStyle,
    itemStyle,
  }
}
