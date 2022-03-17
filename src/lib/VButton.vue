<!--
 * @Author: Yaowen Liu
 * @Date: 2022-03-16 15:03:35
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-03-16 15:29:35
-->
<template>
  <div class="w-20 h-10 rounded-3xl bg-green-600 flex justify-center items-center text-white font-bold shadow-lg">
    <slot />
  </div>
</template>

<script setup lang="ts">
// import { reactive } from 'vue'

// interface Props {
//   primary?: boolean
// }

// const props = withDefaults(defineProps<Props>(), {
//   primary: false,
// })

// const { primary } = reactive(props)
</script>
