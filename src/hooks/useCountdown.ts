function formatData(date: Date) {
    const [cM, cS] = [date.getMinutes(), date.getSeconds()]
    return `${padZero(cM)}:${padZero(cS)}`
}

const padZero = (n: number) => (n < 10 ? '0' + n : `${n}`)

export function getCountdownTime(seconds: number) {
    return formatData(new Date(seconds * 1000))
}

export const initSeconds = 25 * 60

export function useCountdown(): [number, string, boolean] {
    let seconds = initSeconds
    let isStart = false

    let currentTime = getCountdownTime(seconds)
    return [seconds, currentTime, isStart]
}