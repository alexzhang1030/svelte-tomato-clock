import { TypeEnum } from "@/hooks/useType";
import { get, writable } from "svelte/store";
import { setColor } from "./color";
import { isStart, toggleStart } from "./start";

export const currentType = writable(TypeEnum.Work);

export function setCurrentType(type: TypeEnum) {
    if (!get(isStart) || confirm('Are you sure you want to continue?')) {
        currentType.set(type);
        setColor(type)
        toggleStart(false)
    }
}