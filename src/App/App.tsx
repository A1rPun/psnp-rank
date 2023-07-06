import React, { useState } from "react";
import "./App.css";
import Rank from "../Rank/Rank";
import AverageCompletion from "../AverageCompletion/AverageCompletion";
import { mapping } from "../util/calculate";
import { GameRank, HasPercentage } from "../util/types";

const appName = "PSNProfiles Rank Calculator"
const defaultPercentage = 25

function App() {
  const urlParams = new URLSearchParams(window.location.search)
  const placeholderPercentage = urlParams.has("percentage")
    ? parseInt(urlParams.get("percentage") ?? "", 10)
    : defaultPercentage

  const [percentage, setPercentage] = useState(placeholderPercentage)
  const updatePercentage = (percent: number) => {
    setPercentage(percent)
    const urlParams = new URLSearchParams();

    if (percent !== defaultPercentage) {
      urlParams.set("percentage", percent.toString())
    }

    const addParams = urlParams.toString() ? `?${urlParams}` : ""
    window.history.replaceState({}, "", window.location.pathname + addParams)
  }

  return <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-3xl">
      <Header />
      <AverageCompletion percentage={percentage} onChange={updatePercentage} />
      <Ranks percentage={percentage} />
      <MoreInfo />
    </div>
  </div>
}

function Header(): JSX.Element {
  return <div className="mt-5 overflow-hidden rounded-lg shadow app-header">
    <div className="px-4 py-5 sm:p-6">
      <h2 className="text-2xl font-bold leading-7 sm:truncate sm:text-3xl sm:tracking-tight">
        {appName}
      </h2>
    </div>
  </div>
}

function Ranks(props: HasPercentage): JSX.Element {
  const ranks: GameRank[] = ["S", "A", "B", "C", "D", "E", "F"]

  return <dl className="mt-1 grid grid-cols-3 gap-1 sm:grid-cols-7">
    {ranks.map((rank, i) => <Rank key={i} rank={rank} {...props}></Rank>)}
  </dl>
}

function MoreInfo(): JSX.Element {
  const borderStyle = {
    className: "border border-slate-600",
  }

  return <details className="text-white">
    <summary>More information</summary>
    <div className="mt-1 overflow-hidden rounded-lg shadow text-sm infopanel">
      <div className="px-4 py-5 sm:p-6">
        <p>It"s possible that a game doesn"t have all ranks, games with an average completion between 2% and 64% do.</p>
        <br />
        <p>A rank can be calculated by using the following formula:</p>
        <p><strong><em>game average completion</em> * <em>x</em></strong> where x is</p>
        <table className="table-fixed w-full text-left border-collapse border border-slate-600">
          <thead>
            <tr>
              <th {...borderStyle}>A-B</th>
              <th {...borderStyle}>B-C</th>
              <th {...borderStyle}>C-D</th>
              <th {...borderStyle}>D-E</th>
              <th {...borderStyle}>F (N/A)</th>
              <th {...borderStyle}>S (N/A)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td {...borderStyle}>{mapping.A}</td>
              <td {...borderStyle}>{mapping.B}</td>
              <td {...borderStyle}>{mapping.C}</td>
              <td {...borderStyle}>{mapping.D}</td>
              <td {...borderStyle}>Always 0%</td>
              <td {...borderStyle}>Always 100%</td>
            </tr>
          </tbody>
        </table>
        <p>Values taken from <a className="text-blue-600" href="https://forum.psnprofiles.com/topic/16382-boundaries-for-game-ranks/">this forum thread</a>.</p>
        <br />
        <p>The source code of this page can be found <a className="text-blue-600" href="https://github.com/a1rpun/psnp-rank/">here</a>.</p>
      </div>
    </div>
  </details>
}

export default App;
