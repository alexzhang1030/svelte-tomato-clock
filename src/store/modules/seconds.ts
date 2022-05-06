import { TypeEnum } from "@/hooks/useType"
import { get, writable } from "svelte/store"
import { isStart, toggleStart } from "./start"

const SecondsMap = {
    [TypeEnum.Work]: 25 * 60,
    [TypeEnum.Break]: 5 * 60,
    [TypeEnum.LongBreak]: 15 * 60
}

export const currentSeconds = writable(SecondsMap[TypeEnum.Work])

export function setCurrentSeconds(type: TypeEnum) {
    if (get(isStart)) {
        toggleStart()
    }
    currentSeconds.set(SecondsMap[type])
}