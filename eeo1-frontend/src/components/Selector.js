import {useState} from 'react'
import YearComponents from './YearComponents'
import CompanyComponents from './CompanyComponents'


const YEARS = [2019,2020,2021]
const COMPANIES = ['all','Amazon','Manga']

const Selector = ({params,setQueryParams}) => {
    const [company,setCompany] = useState(params.company)
    const [sortBy, setSortBy] = useState(params.sortBy)
    const [year,setYear] = useState(params.year)

    const setParams = () => {
        const newParams = {
            company:company,
            sortBy:sortBy,
            year:year
        }
        setQueryParams(newParams)
    }

    const CompanyDropDown = () => {
        const CompanySelectors = COMPANIES.map((company)=>
        {return (
            <CompanyComponents key={company}
            company={company}/>
        )})
        return (
            <span>
                <select value={company} onChange={(e)=> {setCompany(e.target.value); setParams()}}>
                    {CompanySelectors}
                </select>
            </span>
        )
    }

    const SortDropDown = () => {
        return (
            <span>
                <select value={sortBy} onChange={(e)=> {setSortBy(e.target.value); setParams()}}>
                    <option value="gender">gender</option>
                    <option value="race">race</option>
                    <option value="job">job function</option>
            </select>
            </span>
        )
    }

    const YearDropDown = () => {
        const YearSelectors = YEARS.map((date)=>
        {return (
            <YearComponents key={date}
            date={date}/>
        )})
        console.log(company,year,sortBy)
        return (
            <span>
                <select value={year} onChange={(e)=> {setYear(e.target.value); setParams()}}>
                    {YearSelectors}
                </select>
            </span>
        )
    }
    return <div><CompanyDropDown/> by <SortDropDown/> for <YearDropDown/></div>
}
export default Selector