import { writable } from "svelte/store"

export const isStart = writable(false)

export function toggleStart() {
    isStart.update(v => !v)
}