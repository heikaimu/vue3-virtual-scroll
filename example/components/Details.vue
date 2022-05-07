<template>
  <section class="h-screen bg-white text-gray-600 body-font overflow-hidden">
    <header class="h-14 border-b border-gray-200 flex items-center">
      <router-link to="/list" class="p-2 cursor-pointer">
        返回
      </router-link>
    </header>

    <div class="container px-5 py-10 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce" class="lg:w-1/2 w-full h-auto object-cover object-center rounded"
          :src="source"
        >
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            {{ vendor }}
          </h2>
          <div class="flex mb-4">
            <span class="flex items-center">
              <svg
                v-for="i in 4" :key="i" fill="currentColor" stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg
                fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span class="text-gray-600 ml-3">4 Reviews</span>
            </span>
          </div>
          <p class="leading-relaxed">
            {{ title }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onActivated, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const source = ref('')
const vendor = ref('')
const title = ref('')

onActivated(() => {
  source.value = route.query.source as string
  vendor.value = route.query.vendor as string
  title.value = route.query.title as string
})

</script>

<style scoped>
.details {

}

.details-header {
  height: 60px;
  background-color: #ffffff;
}
</style>
