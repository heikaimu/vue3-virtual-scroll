<!--
 * @Author: Yaowen Liu
 * @Date: 2022-03-11 16:26:27
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-05-07 17:18:31
-->
<template>
  <div class="web-container">
    <router-view v-slot="{ Component }">
      <transition name="slide" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <Github />
  </div>
</template>

<script setup lang="ts">
import Github from './components/Github.vue'
</script>

<style>
body {
  background-color: #f2f2f2;
}
.web-container {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 1s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translate3d(30px, 0, 0);
}
</style>
