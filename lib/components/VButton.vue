<!--
 * @Author: Yaowen Liu
 * @Date: 2022-03-16 15:03:35
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-03-24 14:58:31
-->
<template>
  <div class="button">
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.button {
  width: 100px;
  height: 30px;
  background-color: #333333;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
}
</style>
