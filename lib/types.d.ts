import type { ExtractPropTypes } from 'vue'
import type { componentProps } from './props'

export type Props = ExtractPropTypes<componentProps>

export type ScrollCallBack = (a: number, b: number) => void
