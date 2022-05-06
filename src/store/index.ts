import { TypeEnum } from "@/hooks/useType";
import { writable } from "svelte/store";

export const currentType = writable(TypeEnum.Work);

export function setCurrentType(type: TypeEnum) {
    currentType.set(type);
}