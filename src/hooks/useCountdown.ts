const padZero = (n: number) => (n < 10 ? `0${n}` : `${n}`)

function formatData(date: Date) {
  const [cM, cS] = [date.getMinutes(), date.getSeconds()]
  return `${padZero(cM)}:${padZero(cS)}`
}

export function getCountdownTime(seconds: number) {
  return formatData(new Date(seconds * 1000))
}

export const initSeconds = 25 * 60

export function useCountdown(): [number, string, boolean] {
  const seconds = initSeconds
  const isStart = false

  const currentTime = getCountdownTime(seconds)
  return [seconds, currentTime, isStart]
}
