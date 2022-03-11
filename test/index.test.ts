/*
 * @Author: Yaowen Liu
 * @Date: 2022-03-11 17:54:36
 * @LastEditors: Yaowen Liu
 * @LastEditTime: 2022-03-11 17:58:08
 */
import { describe, expect, it } from 'vitest'

describe('should', () => {
  function toRoman(n: number) {
    return 'i'.repeat(n)
  }

  it('exported', () => {
    expect(toRoman(4)).toMatchInlineSnapshot('"iiii"')
  })
})
