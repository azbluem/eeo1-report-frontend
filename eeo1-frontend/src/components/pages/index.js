import Caption from "../Caption"
import Graph from "../Chart"
import Hero from "../Hero"
import Selector from "../Selector"
import AdvancedSelector from "../AdvancedSelector"
import AdvancedToggle from "../AdvancedToggle"
import AdvancedGraph from "../AdvancedGraph"
import AdvancedCaption from "../AdvancedCaption"
import COLORDICT from '../../DATA'
import {Chart, ArcElement,Tooltip, Legend,CategoryScale,LinearScale,BarElement,PieController,PolarAreaController,RadialLinearScale, BarController} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useState, useEffect, useCallback,useRef } from "react"
import axios from 'axios'
// import { Bar } from "react-chartjs-2"
// import { Line } from "react-chartjs-2"


Chart.register(ArcElement,Tooltip, Legend,ChartDataLabels,CategoryScale,LinearScale,BarElement,PieController,PolarAreaController,RadialLinearScale, BarController);

function Home() {
  const URL = 'https://eeo1-report-backend.herokuapp.com'
  const [companyList,setCompanyList] = useState({'Amazon':{years:[2019],'jobs':['Administrative Support']}})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getAllCompanies() {
    const listOfCompanies = await axios.get(`${URL}/query/company_years_jobs`);
    console.log(listOfCompanies.data)
    setCompanyList(listOfCompanies.data)
  };
  useEffect(()=>{getAllCompanies().catch((error=>console.log(error)))},[])

  const [advancedMode,setAdvancedMode] = useState(false)
  

  const [queryParam, setQueryParams] = useState({
    company:'Amazon',
    sortBy:'gender',
    year:2019
  })
  const [advancedParams, setAdvancedParams] = useState({
    company:'Amazon',
    sortBy1:['Professionals'],
    sortBy2:'gender',
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
  const [advChartData, setADVChartData] = useState({
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
    axios.get(`${URL}/query`,{params:queryParam})
    .then((response)=>{
    setChartData({
      labels: response.data.labelData, 
      datasets: [
        {
          label: queryParam.year,
          data: response.data.valueData,
          backgroundColor: response.data.labelData.map((field)=>COLORDICT.COLORDICT[field]),
          borderColor: "black",
          borderWidth: 2
        }
      ]
    })
    })
    .catch((error)=>console.log(error))
  },[queryParam]);
  useEffect(()=>{getOneCompanyData()},[getOneCompanyData])


  const getOneCompanyTwoParameters = useCallback(() => {
    // console.log(params);
    axios.get(`${URL}/adv_query`,{params:advancedParams})
    .then((response)=>{
    console.log(response)
    const labels = Object.keys(response.data.valueData);
    const datalist = []
    for (let i=0; i<response.data.labelData.length;i++) {
      const dataLabel = response.data.labelData[i]
      const dataValues = labels.map(cat=>response.data.valueData[cat][i])
      datalist.push({
        label: dataLabel,
          data: dataValues,
          backgroundColor: labels.map(label=>COLORDICT.COLORDICT[label]),
          borderColor: "black",
          borderWidth: 2
    })
    }
    setADVChartData({
      labels: labels, 
      datasets: datalist
    })
  })
    .catch((error)=>console.log(error))
  },[advancedParams]);
  useEffect(()=>{getOneCompanyTwoParameters()},[getOneCompanyTwoParameters])

  
const ReturnsAppropriateComponents = () => {
  if (advancedMode===true) {
    return(
      <div>
        <div className='selector'><AdvancedSelector  companyList={companyList} params={advancedParams} setQueryParams={setAdvancedParams} getOneCompanyTwoParameters={getOneCompanyTwoParameters}/></div>
        <div className='chart'><AdvancedGraph  chartData={advChartData} type={advancedParams.sortBy1}/></div>
        {/* <AdvancedCaption data={chartData} params={advancedParams}/> */}
      </div>
    )
  } else {
    return (
      <div>
        <div className='selector'><Selector companyList={companyList} params={queryParam} setQueryParams={setQueryParams} getOneCompanyData={getOneCompanyData}/></div>
        <div className='chart'> <Graph chartData={chartData} type={queryParam.sortBy}/></div>
        <div className='caption' ><Caption params={queryParam} data={chartData.datasets[0].data}/></div>
      </div>
    )
  }}
  

  return (
    <div className="body">
      <AdvancedToggle advancedMode={advancedMode} setAdvancedMode={setAdvancedMode}/>
      <div className='hero'><Hero/></div>
      <ReturnsAppropriateComponents/>
    </div>
  );
}

export default Home;