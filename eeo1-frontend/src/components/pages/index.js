import Caption from "../Caption"
import Graph from "../Chart"
import Hero from "../Hero"
import Selector from "../Selector"
import COLORDICT from '../../DATA'
import {Chart, ArcElement,Tooltip, Legend,CategoryScale,LinearScale,BarElement,PieController,PolarAreaController,RadialLinearScale, BarController} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useState, useEffect, useCallback } from "react"
import axios from 'axios'
// import { Bar } from "react-chartjs-2"
// import { Line } from "react-chartjs-2"


Chart.register(ArcElement,Tooltip, Legend,ChartDataLabels,CategoryScale,LinearScale,BarElement,PieController,PolarAreaController,RadialLinearScale, BarController);

function Home() {
  const URL = 'https://eeo1-report-backend.herokuapp.com/query'
  const [companyList,setCompanyList] = useState({'Amazon':[2019]})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getAllCompanies() {
    const listOfCompanies = await axios.get(`${URL}/company_years`);
    console.log(listOfCompanies.data)
    setCompanyList(listOfCompanies.data)
  };
  useEffect(()=>{getAllCompanies().catch((error=>console.log(error)))},[])

  const [queryParam, setQueryParams] = useState({
    company:'Amazon',
    sortBy:'gender',
    year:2019
  })
  const [advancedParams, setAdvancedParams] = useState({
    company:'Amazon',
    sortBy1:'gender',
    sortBy2:'job',
    year:2019
  })

  const [chartData, setChartData] = useState({
    labels: ['Male','Female'], 
    datasets: [
      {
        label: queryParam.year,
        data: [293520,246025],
        backgroundColor: ['Male','Female'].map((field)=>COLORDICT.COLORDICT[field]),
        // backgroundColor: createBackgroundGradient(ctx),
        borderColor: "black",
        borderWidth: 2
      }
    ]}
  );
  
  const getOneCompanyData = useCallback(() => {
    // console.log(params);
    axios.get(URL,{params:queryParam})
    .then((response)=>{
    setChartData({
      labels: response.data.labelData, 
      datasets: [
        {
          label: queryParam.year,
          data: response.data.valueData,
          backgroundColor: response.data.labelData.map((field)=>COLORDICT.COLORDICT[field]),
          // backgroundColor: createBackgroundGradient(ctx),
          borderColor: "black",
          borderWidth: 2
        }
      ]
    })
    })
    .catch((error)=>console.log(error))
  },[queryParam]);
  useEffect(()=>{getOneCompanyData()},[getOneCompanyData])
  

  

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