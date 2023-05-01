import React, { ChangeEvent, useState } from 'react';
import './App.css';
import Rank from '../Rank/Rank';

function App() {
  const [percentage, setPercentage] = useState(25)

  return (
    <div className="App">
      <header className="App-header">
        PSNP Rank Calculator
      </header>
      <label>
        <span>Game Average Completion:</span>
        <input
          type="number"
          min="1"
          max="100"
          value={percentage}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPercentage(parseInt(e.target.value, 10))}
        />%
      </label>
      <div className="App-table">
        <Rank rank="S" percentage={percentage}></Rank><hr />
        <Rank rank="A" percentage={percentage}></Rank><hr />
        <Rank rank="B" percentage={percentage}></Rank><hr />
        <Rank rank="C" percentage={percentage}></Rank><hr />
        <Rank rank="D" percentage={percentage}></Rank><hr />
        <Rank rank="E" percentage={percentage}></Rank><hr />
        <Rank rank="F" percentage={percentage}></Rank>
      </div>
    </div>
  );
}

export default App;
