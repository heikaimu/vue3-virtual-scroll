<script lang="ts" setup>
import { componentProps } from '../props'
import { useContainer, useList, useMemory, useStyle } from '../composition'

const props = defineProps(componentProps)

// 容器相关
const { scrollContainer, viewSize } = useContainer(props)
// 列表
const {
  viewStartIndex,
  viewEndIndex,
  viewList,
  locked,
  loadError,
  errorText,
  handleScroll,
  handleRefresh,
} = useList(props, scrollContainer, viewSize)
// 样式
const { containerStyle } = useStyle(props, viewStartIndex, viewEndIndex)
// 滚动位置缓存
useMemory(scrollContainer)

</script>

<template>
  <div ref="scrollContainer" class="scroll-container" @scroll.passive="handleScroll">
    <div :style="containerStyle">
      <template v-for="item in viewList" :key="item[rowKey]">
        <slot :item="item" />
      </template>
    </div>
    <div v-show="locked" class="scroll-container__bottom">
      <div v-if="!loadError" class="loading-state">
        <span class="icon rotate">
          <svg
            t="1651889853940" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="1937" width="48" height="48"
          >
            <path
              d="M533.333333 682.666667v192h-64v-192h64z m-175.317333-72.618667l45.269333 45.269333-135.765333 135.744-45.248-45.226666 135.744-135.786667z m286.634667 0l135.744 135.765333-45.226667 45.248-135.786667-135.744 45.269334-45.269333zM330.666667 480v64h-192v-64h192z m533.333333 0v64h-192v-64h192z m-128.853333-247.061333l45.248 45.226666-135.744 135.786667-45.269334-45.269333 135.765334-135.744z m-467.626667 0l135.765333 135.744-45.269333 45.269333-135.744-135.765333 45.226667-45.248zM533.333333 149.333333v192h-64V149.333333h64z"
              p-id="1938"
            />
          </svg>
        </span>
        <p class="loading-text">
          {{ loadingText }}
        </p>
      </div>

      <div v-else class="loading-state cursor" @click="handleRefresh">
        <span class="icon">
          <svg
            t="1651893386303" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="2092" width="48" height="48"
          >
            <path
              d="M512 973.653333a34.133333 34.133333 0 0 1-24.132267-58.2656l27.050667-27.067733h-3.771733c-102.8096 0-191.8976-36.949333-264.772267-109.841067S136.533333 616.209067 136.533333 512.853333c0-69.6832 17.134933-133.597867 50.944-189.934933a34.133333 34.133333 0 0 1 58.538667 35.1232C218.658133 403.626667 204.8 455.714133 204.8 512.853333c0 85.794133 29.3888 156.893867 89.838933 217.361067 60.450133 60.450133 131.2768 89.838933 216.507734 89.838933h3.771733l-27.050667-27.067733a34.133333 34.133333 0 1 1 48.264534-48.264533l85.282133 85.282133 0.529067 0.529067c3.0208 3.140267 5.307733 6.7072 6.877866 10.496a34.030933 34.030933 0 0 1-7.355733 37.290666l-85.333333 85.333334c-6.673067 6.656-15.394133 10.001067-24.132267 10.001066z m297.7792-257.706666a34.1504 34.1504 0 0 1-29.508267-51.2512C806.0928 620.1344 819.2 569.0368 819.2 512.853333c0-85.794133-29.3888-156.893867-89.838933-217.361066-60.4672-60.450133-131.293867-89.838933-216.541867-89.838934h-3.191467l27.221334 26.948267a34.133333 34.133333 0 0 1-48.0256 48.520533l-86.186667-85.333333-0.8704-0.887467-0.017067-0.034133-0.034133-0.034133a34.133333 34.133333 0 0 1 0.8704-47.496534l86.135467-86.1184a34.133333 34.133333 0 1 1 48.264533 48.264534L509.0816 137.386667h3.754667c102.8096 0 191.914667 36.9664 264.8064 109.841066S887.466667 409.480533 887.466667 512.853333c0 68.369067-16.1792 130.9696-48.110934 186.077867a34.116267 34.116267 0 0 1-29.576533 17.015467z"
              p-id="2093"
            />
          </svg>
        </span>
        <p class="loading-text">
          {{ errorText }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.scroll-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.scroll-container__bottom {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-state {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #cccccc;
  transition: .3s ease-in-out;
}

.loading-state.cursor {
  cursor: pointer;
}

.loading-state.cursor:hover,
.loading-state.cursor:active {
  color: #666666;
}

.loading-text {
  padding-left: 5px;
  font-size: 16px;
  color: currentColor;
}

.icon {
  display: block;
  width: 24px;
  height: 24px;
}

.icon.rotate {
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.icon svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
}
</style>
