import Caption from "../Caption"
import Graph from "../Chart"
import Hero from "../Hero"
import Selector from "../Selector"
import COLORDICT from '../../DATA'
import {Chart, ArcElement,Tooltip, Legend,CategoryScale,LinearScale,BarElement,PieController,PolarAreaController,RadialLinearScale, BarController} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useState, useEffect } from "react"
import axios from 'axios'
// import { Bar } from "react-chartjs-2"
// import { Line } from "react-chartjs-2"


Chart.register(ArcElement,Tooltip, Legend,ChartDataLabels,CategoryScale,LinearScale,BarElement,PieController,PolarAreaController,RadialLinearScale, BarController);

function Home() {
  const URL = 'http://127.0.0.1:5000/query'
  const [companyList,setCompanyList] = useState({})
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


  const [labelData,setLabelData] = useState(['Male','Female'])
  const [valueData, setValueData] = useState([293520,246025])
  const [chartData, setChartData] = useState({
    labels: labelData, 
    datasets: [
      {
        label: queryParam.year,
        data: valueData,
        backgroundColor: labelData.map((field)=>COLORDICT.COLORDICT[field]),
        // backgroundColor: createBackgroundGradient(ctx),
        borderColor: "black",
        borderWidth: 2
      }
    ]}
  );
  

  // useEffect(getAllCompanies,[])
  // async function getOneCompanyData(params) {
  //   console.log('calling get one company')
  //   console.log(params)
  //   const companyData = await axios.get(URL,{params})
  //   console.log(companyData.data)
  //   const newChartInfo = {
  //     labels: companyData.data.labelData, 
  //     datasets: [
  //       {
  //         label: queryParam.year,
  //         data: companyData.data.valueData,
  //         backgroundColor: companyData.data.labelData.map((field)=>COLORDICT.COLORDICT[field]),
  //         // backgroundColor: createBackgroundGradient(ctx),
  //         borderColor: "black",
  //         borderWidth: 2
  //       }
  //     ]}
  //   setChartData(newChartInfo)
  //   console.log(newChartInfo)
  //   setValueData(companyData.data.valueData)
  //   setLabelData(companyData.data.labelData)
  //   // return validYears
  // };
  let companyData = null
  let newChartInfo = null
    const getOneCompanyData = (params=queryParam) => {
    // console.log('calling get one company')
    // console.log(params)
    axios.get(URL,{params})
    .then((response)=>{
      companyData = response
      // console.log(companyData.data)
      newChartInfo = {
      labels: companyData.data.labelData, 
      datasets: [
        {
          label: params.year,
          data: companyData.data.valueData,
          backgroundColor: companyData.data.labelData.map((field)=>COLORDICT.COLORDICT[field]),
          // backgroundColor: createBackgroundGradient(ctx),
          borderColor: "black",
          borderWidth: 2
        }
      ]
    } 
    
    })
    .then(() => {
      setChartData(newChartInfo)
      // console.log(newChartInfo)
      setValueData(companyData.data.valueData)
      setLabelData(companyData.data.labelData)
    })
    .catch((error)=>console.log(error))
    // return validYears
  };
  useEffect(getOneCompanyData,[queryParam])
  

  

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