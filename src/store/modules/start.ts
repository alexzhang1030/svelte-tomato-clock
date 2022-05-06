import { get, writable } from 'svelte/store'
import { setCurrentSeconds } from './seconds'
import { currentType } from './type'

export const isStart = writable(false)

export function toggleStart(flag?: boolean) {
  isStart.set(flag === undefined ? !get(isStart) : flag)
  setCurrentSeconds(get(currentType))
}
