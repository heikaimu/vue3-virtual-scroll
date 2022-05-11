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
    type: [Function, null],
    default: null,
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
  // 列间距
  colSpace: {
    type: Number,
    default: 0,
  },
  // 行间距
  rowSpace: {
    type: Number,
    default: 0,
  },
}
