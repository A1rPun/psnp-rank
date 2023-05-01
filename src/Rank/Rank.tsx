import React from 'react';
import './Rank.css';
import { calculate } from '../util/calculate';

type rank = "S" | "A" | "B" | "C" | "D" | "E" | "F"

function Rank(props: {rank: rank, percentage: number}) {
  return <div className='game-rank-container'>
    <span className={`game-rank ${props.rank}`}>{props.rank}</span>
    <br />
    <span className="typo-bottom">RANK</span>
    <br />
    <span>{calculate(props.rank, props.percentage)}</span>
  </div>;
}

export default Rank;
