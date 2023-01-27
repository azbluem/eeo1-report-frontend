import {useState} from 'react'
import YearComponents from './YearComponents'
import CompanyComponents from './CompanyComponents'


const YEARS = [2019,2020,2021]
const COMPANIES = ['amazon','manga','all']

const Selector = ({companyList, params,setQueryParams,getOneCompanyData}) => {

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
                <select name='company' value={params.company} onChange={(e)=> {setParams(e)}}>
                    {CompanySelectors}
                </select>
            </span>
        )
    }

    const SortDropDown = () => {
        return (
            <span>
                <select name='sortBy' value={params.sortBy} onChange={(e)=> {setParams(e)}}>
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
        console.log(params.company,params.year,params.sortBy)
        return (
            <span>
                <select name='year' value={params.year} onChange={(e)=> {setParams(e)}}>
                    {YearSelectors}
                </select>
            </span>
        )
    }
    return <div><CompanyDropDown/> by <SortDropDown/> for <YearDropDown/></div>
}
export default Selector