import { TypeEnum } from "@/hooks/useType"
import { writable } from "svelte/store"

const SecondsMap = {
    [TypeEnum.Work]: 25 * 60,
    [TypeEnum.Break]: 5 * 60,
    [TypeEnum.LongBreak]: 15 * 60
}

export const currentSeconds = writable(SecondsMap[TypeEnum.Work])

export function setCurrentSeconds(type: TypeEnum) {
    currentSeconds.set(SecondsMap[type])
}

export function countdown() {
    currentSeconds.update(v => v - 1)
}