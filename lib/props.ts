export const componentProps = {
  // 列表
  list: {
    type: Array,
    default: () => [],
  },
  grid: {
    type: Number,
    default: 1,
  },
  // 单行高度
  height: {
    type: Number,
    default: 0,
  },
  // 唯一key
  rowKey: {
    type: String,
    default: 'id',
  },
  // 触底函数
  onTouchEnd: {
    type: Function,
    default() { },
  },
  // 加载文字
  loadingText: {
    type: String,
    default: '加载中，请稍等',
  },
  // 上下的缓冲数量，解决告诉滑动白屏问题
  bufferCount: {
    type: Number,
    default: 4,
  },
  wrapperStyle: {
    type: Object,
    default: () => {},
  },
}
