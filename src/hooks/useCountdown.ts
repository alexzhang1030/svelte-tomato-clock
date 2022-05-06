const padZero = (n: number) => (n < 10 ? `0${n}` : `${n}`)

function formatData(date: Date) {
  const [cM, cS] = [date.getMinutes(), date.getSeconds()]
  return `${padZero(cM)}:${padZero(cS)}`
}

export function getCountdownTime(seconds: number) {
  return formatData(new Date(seconds * 1000))
}
