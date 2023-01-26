import Caption from "./components/Caption"
import Graph from "./components/Chart"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Selector from "./components/Selector"
// import DATA from './DATA'
import {Chart, ArcElement,Tooltip, Legend,CategoryScale,LinearScale,BarElement,PieController} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import './App.css'
import { useState, useEffect } from "react"
import axios from 'axios'
// import { Line } from "react-chartjs-2"

Chart.register(ArcElement,Tooltip, Legend,ChartDataLabels,CategoryScale,LinearScale,BarElement,PieController);

function App() {
  const [chartData, setChartData] = useState({
    labels: ['male','female'], 
    datasets: [
      {
        label: ['white','black','hispanic','first nation', 'AAPI','2 or more'],
        data: [600,500,400,300,200,100],
        backgroundColor: [
          "white",
          "black",
          "brown",
          "limegreen",
          "yellow",
          "blue"
        ],
        // backgroundColor: createBackgroundGradient(ctx),
        borderColor: "black",
        borderWidth: 2
      },
      // {
      //   label: "Users Lost ",
      //   data: [60,1,0,0,5,0],
        // backgroundColor: [
        //   "rgba(75,192,192,1)",
        //   "#ecf0f1",
        //   "#50AF95",
        //   "#f3ba2f",
        //   "#2a71d0"
        // ],
        // backgroundColor: createBackgroundGradient(ctx),
      //   borderColor: "red",
      //   borderWidth: 2
      // }
    ]
  });
  const [queryParam, setQueryParams] = useState({
    company:'amazon',
    sortBy:'gender',
    year:2019
  })
  const URL = 'http://127.0.0.1:5000/query'
async function getOneCompanyData(params) {
    const companyData = await axios.get(params).data
    console.log(companyData)
  }


  return (
    <div className="body">
      <div className='menu'><Menu/></div>
      <div className='hero'><Hero/></div>
      <div className='selector'><Selector params={queryParam} setQueryParams={setQueryParams}/></div>
      <div className='chart'> <Graph chartData={chartData} type={queryParam.sortBy}/></div>
      <div className='caption' ><Caption params={queryParam} data={chartData.datasets[0].data}/></div>
    </div>
  );
}

export default App;
