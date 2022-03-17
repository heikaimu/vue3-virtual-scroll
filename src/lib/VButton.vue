<!--
 * @Author: Yaowen Liu
 * @Date: 2022-03-16 15:03:35
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-03-17 14:18:11
-->
<template>
  <div class="w-40 h-10 rounded-3xl bg-green-600 flex justify-center items-center text-white font-bold shadow-lg">
    <slot />
    {{ x }} - {{ y }}
  </div>
</template>

<script setup lang="ts">
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()
</script>
