import React from 'react';
import './Rank.css';
import { calculate } from '../util/calculate';
import { GameRank, HasPercentage } from '../util/types';

interface RankProps extends HasPercentage {
  rank: GameRank,
}

function Rank(props: RankProps) {
  const irrelevant = (!props.percentage && !["S", "F", "A"].includes(props.rank))
    || (props.percentage === 1 && ["E", "D"].includes(props.rank))
    || (props.percentage === 2 && props.rank === "D")
    || (props.percentage >= 64 && props.rank === "A")
    || (props.percentage >= 83 && props.rank === "B")

  const calculatedPercentage = irrelevant ? "" : calculate(props.rank, props.percentage)

  return <div className={`${irrelevant ? "invisible " : ""}text-center overflow-hidden rounded-lg bg-white px-2 py-2 shadow sm:p-2`}>
    <dt className={`game-rank ${props.rank}`}>{props.rank}</dt><br />
    <span className="typo-bottom">RANK</span>
    <dd className="mt-1 text-gray-900">{calculatedPercentage}</dd>
  </div>
}

export default Rank;
