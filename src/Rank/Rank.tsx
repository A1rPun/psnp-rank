import React from 'react';
import './Rank.css';
import { calculate } from '../util/calculate';

type rank = "S" | "A" | "B" | "C" | "D" | "E" | "F"

function Rank(props: {rank: rank, percentage: number}) {
  const rank = props.rank ?? "S"

  return <div className='game-rank-container'>
    <span className={`game-rank ${rank}`}>{rank}</span>
    <br />
    <span className="typo-bottom">RANK</span>
    <br />
    <span>{calculate(rank, props.percentage)}</span>
  </div>;
}

export default Rank;
