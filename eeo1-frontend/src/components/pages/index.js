import Caption from "../home/Caption"
import Graph from "../home/Chart"
import Hero from "../home/Hero"
import Selector from "../basicSelector/Selector"
import AdvancedSelector from "../advancedSelector/AdvancedSelector"
import AdvancedToggle from "../home/AdvancedToggle"
import AdvancedModeInstructions from "../advancedComponents/AdvancedModeInstructions"
import AdvancedGraph from "../advancedComponents/AdvancedGraph"
import AdvancedCaption from "../advancedComponents/AdvancedCaption"
import COLORDICT from '../../DATA'
import {Chart, ArcElement,Tooltip, Legend,CategoryScale,LinearScale,BarElement,PieController,PolarAreaController,RadialLinearScale, BarController} from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import { useState, useEffect, useCallback} from "react"
import axios from 'axios'


Chart.register(ArcElement,Tooltip, Legend,ChartDataLabels,CategoryScale,LinearScale,BarElement,PieController,PolarAreaController,RadialLinearScale, BarController);
Chart.defaults.set('plugins.datalabels',{color: '#FFFFFF'})

function Home() {
  const URL = 'https://eeo1-report-backend.herokuapp.com'
  const [companyList,setCompanyList] = useState({'Amazon':{years:[2019],'jobs':['Administrative Support']}})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getAllCompanies() {
    const listOfCompanies = await axios.get(`${URL}/query/company_years_jobs`);
    setCompanyList(listOfCompanies.data)
  };
  useEffect(()=>{getAllCompanies().catch((error=>console.log(error)))},[])

  const [advancedMode,setAdvancedMode] = useState(false)
  const [ADVInstructions, setadvInstructions] = useState(true)

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
        borderColor: "black",
        borderWidth: 2
      }
    ]}
  );

  
  const getOneCompanyData = useCallback(() => {
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
    axios.get(`${URL}/adv_query`,{params:advancedParams})
    .then((response)=>{
    const labels = Object.keys(response.data.valueData);
    labels.reverse()
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
    
    datalist.reverse()
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
        <div className='advInstructions'><AdvancedModeInstructions ADVInstructions={ADVInstructions} setadvInstructions={setadvInstructions} /></div>
        <div className="lowerInvisContainer">
        <div className="chartCaptionContainer">
        <div className='chart'><AdvancedGraph  chartData={advChartData} type={advancedParams.sortBy1}/></div>
        <div className='caption'><AdvancedCaption data={advChartData} params={advancedParams}/></div>
        </div></div>
      </div>
    )
  } else {
    return (
      <div>
        <div className='selector'><Selector companyList={companyList} params={queryParam} setQueryParams={setQueryParams} getOneCompanyData={getOneCompanyData}/></div>
        <div className="lowerInvisContainer">
        <div className="chartCaptionContainer">
        <div className='chart'> <Graph chartData={chartData} type={queryParam.sortBy}/></div>
        <div className='caption' ><Caption params={queryParam} data={chartData.datasets[0].data}/></div>
     </div> </div> </div>
    )
  }}
  

  return (
    <div>
      <div className='orange'>
      <span><AdvancedToggle advancedMode={advancedMode} setAdvancedMode={setAdvancedMode}/></span>
      <span className='hero'><Hero/></span>
      </div>
      <ReturnsAppropriateComponents/>
      <p className="footer">Copyright Margaret Lu 2023</p>
      <span className="footer">(If the chart looks a little weird, give the page a refresh)</span>
    </div>
  );
}

export default Home;