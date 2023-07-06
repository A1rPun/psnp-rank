import { GameRank, RankMap } from "./types"

export const mapping: RankMap = {
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

function calcFromToPercent(rank: GameRank, n: number): number[] {
  const percentage = mapping[rank] * n
  let from = 0
  let to = clamp(percentage) + 1

  if (rank === "E") {
    from = clamp(mapping.D * n)
  } else if (rank === "D") {
    from = clamp(mapping.C * n)
  } else if (rank === "C") {
    from = clamp(mapping.B * n)
  } else if (rank === "B") {
    from = clamp(mapping.A * n)
  } else if (rank === "A") {
    from = 99
  }

  if (from < to) {
    to = from
  }

  return [from, to]
}

export function calculate(rank: GameRank, n: number): string {
  if (rank === "S") {
    return "100%"
  } else if (rank === "F") {
    return "0%"
  }

  const [from, to] = calcFromToPercent(rank, n || 0)
  return `${from.toFixed(0)}% - ${to.toFixed(0)}%`
}
