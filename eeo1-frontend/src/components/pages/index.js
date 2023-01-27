import Caption from "../Caption"
import Graph from "../Chart"
import Hero from "../Hero"
import Selector from "../Selector"
// import DATA from './DATA'
import {Chart, ArcElement,Tooltip, Legend,CategoryScale,LinearScale,BarElement,PieController} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useState, useEffect } from "react"
import axios from 'axios'
// import { Line } from "react-chartjs-2"


Chart.register(ArcElement,Tooltip, Legend,ChartDataLabels,CategoryScale,LinearScale,BarElement,PieController);

function Home() {
  const [queryParam, setQueryParams] = useState({
    company:'amazon',
    sortBy:'gender',
    year:2019
  })
  const [chartData, setChartData] = useState({
    labels: ['male','female'], 
    datasets: [
      {
        label: `${queryParam.company} for ${queryParam.year} sorted by ${queryParam.sortBy}`,
        data: [450,550],
        backgroundColor: [
          "blue",
          "pink"

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

  const URL = 'http://127.0.0.1:5000/query'
  const [companyList,setCompanyList] = useState([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getAllCompanies() {
    const listOfCompanies = await (await axios.get(URL,{request:'list of companies'})).data;
    setCompanyList(listOfCompanies)
  }
  // useEffect(getAllCompanies,[])
  async function getOneCompanyData(params) {
    const companyData = await axios.get(URL,params).data
    console.log(companyData)
  }


  return (
    <div className="body">
      <div className='hero'><Hero/></div>
      <div className='selector'><Selector companyList={companyList} params={queryParam} setQueryParams={setQueryParams} getOneCompanyData={getOneCompanyData}/></div>
      <div className='chart'> <Graph chartData={chartData} type={queryParam.sortBy}/></div>
      <div className='caption' ><Caption params={queryParam} data={chartData.datasets[0].data}/></div>
    </div>
  );
}

export default Home;