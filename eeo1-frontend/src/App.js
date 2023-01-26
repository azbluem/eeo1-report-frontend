import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/pages/about'
import Contact from './components/pages/contact'
import Donate from './components/pages/donate'
import Findings from './components/pages/findings'
import Home from './components/pages'

// Chart.register(ArcElement,Tooltip, Legend,ChartDataLabels,CategoryScale,LinearScale,BarElement,PieController);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/findings' component={Findings} />
        <Route path='/donate' component={Donate} />
        <Route path='/contact' component={Contact} />
      </Routes>
    </Router>
  );

  // const [queryParam, setQueryParams] = useState({
  //   company:'amazon',
  //   sortBy:'gender',
  //   year:2019
  // })
  // const [chartData, setChartData] = useState({
  //   labels: ['male','female'], 
  //   datasets: [
  //     {
  //       label: `${queryParam.company} for ${queryParam.year} sorted by ${queryParam.sortBy}`,
  //       data: [450,550],
  //       backgroundColor: [
  //         "blue",
  //         "pink"

  //       ],
  //       // backgroundColor: createBackgroundGradient(ctx),
  //       borderColor: "black",
  //       borderWidth: 2
  //     },
  //     // {
  //     //   label: "Users Lost ",
  //     //   data: [60,1,0,0,5,0],
  //       // backgroundColor: [
  //       //   "rgba(75,192,192,1)",
  //       //   "#ecf0f1",
  //       //   "#50AF95",
  //       //   "#f3ba2f",
  //       //   "#2a71d0"
  //       // ],
  //       // backgroundColor: createBackgroundGradient(ctx),
  //     //   borderColor: "red",
  //     //   borderWidth: 2
  //     // }
  //   ]
  // });

  // const URL = 'http://127.0.0.1:5000/query'
  // const [companyList,setCompanyList] = useState([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // async function getAllCompanies() {
  //   const listOfCompanies = await (await axios.get(URL,{request:'list of companies'})).data;
  //   setCompanyList(listOfCompanies)
  // }
  // useEffect(getAllCompanies,[])
  // async function getOneCompanyData(params) {
  //   const companyData = await axios.get(URL,params).data
  //   console.log(companyData)
  // }


//   return (
//     <div className="body">
//       <div className='menu'><Menu/></div>
//       <div className='hero'><Hero/></div>
//       <div className='selector'><Selector companyList={companyList} params={queryParam} setQueryParams={setQueryParams} getOneCompanyData={getOneCompanyData}/></div>
//       <div className='chart'> <Graph chartData={chartData} type={queryParam.sortBy}/></div>
//       <div className='caption' ><Caption params={queryParam} data={chartData.datasets[0].data}/></div>
//     </div>
//   );
}

export default App;
