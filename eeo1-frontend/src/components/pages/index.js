import Caption from "../Caption"
import Graph from "../Chart"
import Hero from "../Hero"
import Selector from "../Selector"
import COLORDICT from '../../DATA'
import {Chart, ArcElement,Tooltip, Legend,CategoryScale,LinearScale,BarElement,PieController,PolarAreaController,RadialLinearScale} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useState, useEffect } from "react"
import axios from 'axios'
// import { Line } from "react-chartjs-2"


Chart.register(ArcElement,Tooltip, Legend,ChartDataLabels,CategoryScale,LinearScale,BarElement,PieController,PolarAreaController,RadialLinearScale);

function Home() {
  const [queryParam, setQueryParams] = useState({
    company:'amazon',
    sortBy:'gender',
    year:2019
  })
  const [labelData,setLabelData] = useState(['White','Black','Hispanic or Latino', 'Asian', 'American Indian or Alaska Native', 'Native Hawaiian Or Pacific Islander', 'Two or More Races'])
  const yearListData = 
    {2019: {
      label: `2019`,
      data: [1600,400,300,600,100,50,200],
      backgroundColor: labelData.map((field)=>COLORDICT.COLORDICT[field]),
      // backgroundColor: createBackgroundGradient(ctx),
      borderColor: "black",
      borderWidth: 2
    },
    2020:{
      label: `2020`,
      data: [2600,400,500,400,10,50,200],
      backgroundColor: labelData.map((field)=>COLORDICT.COLORDICT[field]),
      // backgroundColor: createBackgroundGradient(ctx),
      borderColor: "black",
      borderWidth: 2
    },
    2021:{
      label: `2021`,
      data: [2100,800,300,100,0,50,200],
      backgroundColor: labelData.map((field)=>COLORDICT.COLORDICT[field]),
      // backgroundColor: createBackgroundGradient(ctx),
      borderColor: "black",
      borderWidth: 2
    }}
    const [valueData, setValueData] = useState(yearListData[2019])
    const fakeYearObj = () => {
      setValueData(yearListData[queryParam.year])
      setChartData({
        ...chartData,
        datasets:[yearListData[queryParam.year]]
      })
    }
    useEffect(fakeYearObj,[queryParam])
  
  const [chartData, setChartData] = useState({
    labels: labelData, 
    datasets: [valueData,
      // {
      //   label: "Users Lost ",
      //   data: [60,1,0,0,5,0],
      //   backgroundColor: [
      //     "rgba(75,192,192,1)",
      //     "#ecf0f1",
      //     "#50AF95",
      //     "#f3ba2f",
      //     "#2a71d0"
      //   ],
      //   // backgroundColor: createBackgroundGradient(ctx),
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
    /*expected: {
      labelData:[array of strings],
      dataValues:[array of ints],
      validYears:[array of ints]
    }*/
    const newChartInfo = {
      labels: companyData.labelData, 
      datasets: [
        {
          label: queryParam.year,
          data: companyData.dataValues,
          backgroundColor: companyData.labelData.map((field)=>COLORDICT.COLORDICT[field]),
          // backgroundColor: createBackgroundGradient(ctx),
          borderColor: "black",
          borderWidth: 2
        }
      ]}
    setChartData(newChartInfo)
    // return validYears
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