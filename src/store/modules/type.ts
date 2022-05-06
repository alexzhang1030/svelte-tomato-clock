import { TypeEnum } from "@/hooks/useType";
import { writable } from "svelte/store";
import { setColor } from "./color";
import { setCurrentSeconds } from "./seconds";

export const currentType = writable(TypeEnum.Work);

export function setCurrentType(type: TypeEnum) {
    currentType.set(type);
    setColor(type)
    setCurrentSeconds(type)
}