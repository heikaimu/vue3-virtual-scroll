
import type { Ref } from 'vue'
import { onActivated, onDeactivated, ref } from 'vue'

export function useMemory(scrollContainer: Ref<HTMLElement | undefined>) {
  const scrollTopRecord = ref(0)

  onActivated(() => {
    if (!scrollContainer.value)
      return

    if (scrollContainer.value.scrollTop === scrollTopRecord.value)
      return

    scrollContainer.value.scrollTop = scrollTopRecord.value
  })

  onDeactivated(() => {
    if (!scrollContainer.value)
      return

    scrollTopRecord.value = scrollContainer.value.scrollTop
  })
}
