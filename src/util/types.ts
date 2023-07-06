export type GameRank = "S" | "A" | "B" | "C" | "D" | "E" | "F"

export type RankMap = { [rank in GameRank]: number }

export interface HasPercentage {
  percentage: number
}
