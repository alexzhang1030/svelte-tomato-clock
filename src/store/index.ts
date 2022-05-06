import { TypeEnum } from "@/hooks/useType";
import { writable } from "svelte/store";

export const currentType = writable(TypeEnum.Work);

export function setCurrentType(type: TypeEnum) {
    currentType.set(type);
}

export const isStart = writable(false)

export function toggleStart() {
    isStart.update(v => !v)
}

export const currentSeconds = writable()