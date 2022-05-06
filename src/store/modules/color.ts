import { TypeEnum } from "@/hooks/useType"
import { writable } from "svelte/store"

const colors = {
    [TypeEnum.Work]: 'bg-[#d44b46]',
    [TypeEnum.Break]: 'bg-[#4c9195]',
    [TypeEnum.LongBreak]: 'bg-[#457ca3]',
}
const btnColors = {
    [TypeEnum.Work]: 'text-[#d44b46]',
    [TypeEnum.Break]: 'text-[#4c9195]',
    [TypeEnum.LongBreak]: 'text-[#457ca3]',
}

export const color = writable(colors[TypeEnum.Work])
export const btnColor = writable(btnColors[TypeEnum.Work])

export function setColor(type: TypeEnum) {
    color.set(colors[type])
    btnColor.set(btnColors[type])
}