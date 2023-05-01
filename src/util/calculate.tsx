type rank = "S" | "A" | "B" | "C" | "D" | "E" | "F"

const mapping = {
  F: 0,
  E: 0.4,
  D: 0.75,
  C: 1.2,
  B: 1.55,
  A: 0,
  S: 0,
}

function clamp(n: number): number {
  return Math.max(Math.min(n, 99), 1)
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

  const needed = mapping[rank] * n

  if (rank === "E") {
    return `${getPercentage(needed)}% - 1%`
  } else if (rank === "D") {
    return `${getPercentage(needed)}% - ${getPercentage(mapping.E * n + 1)}%`
  } else if (rank === "C") {
    return `${getPercentage(needed)}% - ${getPercentage(mapping.D * n + 1)}%`
  } else if (rank === "B") {
    return `${getPercentage(needed)}% - ${getPercentage(mapping.C * n + 1)}%`
  } else if (rank === "A") {
    return `99% - ${getPercentage(mapping.B * n + 1)}%`
  }
  return ""
}
