type rank = "S" | "A" | "B" | "C" | "D" | "E" | "F"

const mapping = {
  F: 0,
  E: 0,
  D: 0.4,
  C: 0.75,
  B: 1.2,
  A: 1.55,
  S: 0,
}

function clamp(n: number): number {
  return Math.max(Math.min(n, 99), 0)
}

function getPercentage(n: number): string {
  return clamp(n).toFixed(0)
}

export function calculate(rank: rank, n: number): string {
  if (rank === "S") {
    return "100%"
  } else if (rank === "F") {
    return "0%"
  }

  const num = n || 0
  const needed = mapping[rank] * num

  if (rank === "E") {
    return `${getPercentage(mapping.D * num - 1)}% - 0%`
  } else if (rank === "D") {
    return `${getPercentage(mapping.C * num - 1)}% - ${getPercentage(needed)}%`
  } else if (rank === "C") {
    return `${getPercentage(mapping.B * num - 1)}% - ${getPercentage(needed)}%`
  } else if (rank === "B") {
    return `${getPercentage(mapping.A * num - 1)}% - ${getPercentage(needed)}%`
  } else if (rank === "A") {
    return `99% - ${getPercentage(needed)}%`
  }
  return "error%"
}
