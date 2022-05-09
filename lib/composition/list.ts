import type { Ref } from 'vue'
import { computed, nextTick, ref, toRaw } from 'vue'
import { useThrottleFn } from '@vueuse/core'
import type { Props, ScrollCallBack } from '../types'

// 列表
export function useList(props: Props, scrollContainer: Ref<HTMLElement | undefined>, viewSize: Ref<number>, scrollCallback: ScrollCallBack) {
  // 展示列表开始的索引
  const startIndex = ref(0)
  // 展示列表结束的索引
  const endIndex = computed(() => {
    return Math.min(startIndex.value + viewSize.value * props.grid, props.list.length - 1)
  })
  // 加上缓冲之后的开始索引
  const viewStartIndex = computed(() => {
    return Math.max(startIndex.value - props.bufferCount * props.grid, 0)
  })
  // 加上缓冲之后的结束索引
  const viewEndIndex = computed(() => {
    return Math.min(endIndex.value + props.bufferCount * props.grid, props.list.length - 1)
  })
  // 展示列表
  const viewList = computed(() => {
    return props.list.slice(viewStartIndex.value, viewEndIndex.value)
  })

  // 滚动事件
  const handleScroll = useThrottleFn(() => {
    if (!scrollContainer.value)
      return

    // 设置当前列表开始索引
    startIndex.value = Math.max(0, ~~(scrollContainer.value.scrollTop / props.height)) * props.grid

    // 触底判断
    if (startIndex.value + viewSize.value * props.grid >= props.list.length)
      touchEndHandler()

    // 传递参数给父级
    scrollCallback(toRaw(startIndex.value), toRaw(endIndex.value))
  }, 100)

  // 状态锁，触发触底事件之后即锁住，避免反复触发，当完成请求后再解锁继续出发触底
  const locked = ref(false)
  const loadError = ref(false)
  const errorText = ref('')

  // 刷新
  const handleRefresh = async() => {
    locked.value = false
    loadError.value = false
    errorText.value = ''
    await nextTick()
    touchEndHandler()
  }

  // 触底回调函数
  function touchEndHandler() {
    if (!locked.value) {
      locked.value = true

      const touchEnd = props.onTouchEnd()
      if (touchEnd && touchEnd.then) {
        touchEnd.then(() => {
          loadError.value = false
          locked.value = false
        }).catch((err: any) => {
          loadError.value = true
          errorText.value = err
        })
      }
      else if (touchEnd === true) {
        loadError.value = false
        locked.value = false
      }
      else {
        loadError.value = true
        errorText.value = touchEnd
      }
    }
  }

  return {
    viewStartIndex,
    viewEndIndex,
    viewList,
    locked,
    loadError,
    errorText,
    handleScroll,
    handleRefresh,
  }
}
