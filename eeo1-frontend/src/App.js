import Caption from "./components/Caption"
import Graph from "./components/Chart"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Selector from "./components/Selector"
import DATA from './DATA'
import {Chart, ArcElement,Tooltip, Legend} from 'chart.js'

import './App.css'
import { useState } from "react"

Chart.register(ArcElement,Tooltip, Legend);

function App() {
  const [chartData, setChartData] = useState({
    labels: DATA.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: DATA.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  });
  return (
    <div className="body">
      <Menu className='menu'/>
      <Hero className='hero'/>
      <Selector className='selector'/>
      <Graph className='chart' chartData={chartData}/>
      <Caption className='caption'/>
    </div>
  );
}

export default App;
