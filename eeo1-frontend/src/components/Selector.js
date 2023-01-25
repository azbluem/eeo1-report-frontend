import {useState} from 'react'
import YearComponents from './YearComponents'
import CompanyComponents from './CompanyComponents'


const YEARS = [2019,2020,2021]
const COMPANIES = ['all','Amazon','Manga']

const Selector = ({params,setQueryParams}) => {
    const [company,setCompany] = useState(params.company)
    const [sortBy, setSortBy] = useState(params.sortBy)
    const [year,setYear] = useState(params.year)

    const setParams = (e) => {
        const newParams = {
            ...params,
            [e.target.name] : e.target.value
        }
        setQueryParams(newParams);
    }

    const CompanyDropDown = () => {
        const CompanySelectors = COMPANIES.map((company)=>
        {return (
            <CompanyComponents key={company}
            company={company}/>
        )})
        return (
            <span>
                <select name='company' value={company} onChange={(e)=> {setCompany(e.target.value); setParams(e)}}>
                    {CompanySelectors}
                </select>
            </span>
        )
    }

    const SortDropDown = () => {
        return (
            <span>
                <select name='sortBy' value={sortBy} onChange={(e)=> {setSortBy(e.target.value); setParams(e)}}>
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
                <select name='year' value={year} onChange={(e)=> {setYear(e.target.value); setParams(e)}}>
                    {YearSelectors}
                </select>
            </span>
        )
    }
    return <div><CompanyDropDown/> by <SortDropDown/> for <YearDropDown/></div>
}
export default Selector