<template>
  <div class="org-form">
    <h2 class="org-title">
      Vue3 虚拟滚动插件说明文档
    </h2>
    <div class="form-wrapper">
      d
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  form: {
    type: Object,
    default: () => {},
  },
})
</script>

<style scoped>
.org-form {
  height: 100%;
  padding: 10px;
  overflow-y: auto;
  background-color: #ffffff;
}

.org-title {
  font-size: 20px;
  font-weight: 900;
  color: #333333;
  padding-bottom: 10px;
  border-bottom: 1px solid #e7e7e7;
}
</style>
