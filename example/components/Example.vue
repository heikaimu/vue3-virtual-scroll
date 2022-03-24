<!--
 * @Author: Yaowen Liu
 * @Date: 2022-03-11 16:26:27
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-03-24 15:02:14
-->
<template>
  <div class=" flex flex-col items-center pt-20">
    <p class="pb-10">
      lib开发包
    </p>
    <VButton primary>
      点我
    </VButton>
  </div>
</template>

<script setup lang="ts">
// import { VButton } from '../../lib/index'
import { VButton } from 'my-lib'
import 'my-lib/style.css'
</script>
