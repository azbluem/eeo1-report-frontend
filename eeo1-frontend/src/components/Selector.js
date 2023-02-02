import {useEffect} from 'react'
import YearComponents from './YearComponents'
import CompanyComponents from './CompanyComponents'


const YEARS = [2019,2020,2021]
const COMPANIES = ['Amazon','Manga','all']

const Selector = ({companyList, yearList, params,setQueryParams,getOneCompanyData}) => {
    const companies = []
    for (const company in companyList) {
        companies.push(company)
    };
    const years = []
    const availableYears = companyList[params.company]
    console.log(Array.prototype.entries(availableYears))
    console.log(Array.isArray(availableYears))
    console.log(typeof availableYears)
    // for (const year of availableYears) {
    //     years.push(year)
    // } console.log(years)
    const setParams = (e) => {
        const newParams = {
            ...params,
            [e.target.name] : e.target.value
        }
        setQueryParams(newParams);
        getOneCompanyData(newParams);
    }
    // TODO: add helper to setParams+getOneCompanyData when backend is live
    // TODO: when backend is up, replace COMPANIES with companyList prop
    const CompanyDropDown = () => {
        const CompanySelectors = companies.map((company)=>
        {return (
            <CompanyComponents key={company}
            company={company}/>
        )})
        return (
            <span>
                <select name='company' value={params.company} onChange={setParams}>
                    {CompanySelectors}
                </select>
            </span>
        )
    }

    const SortDropDown = () => {
        return (
            <span>
                <select name='sortBy' value={params.sortBy} onChange={setParams}>
                    <option value="gender">gender</option>
                    <option value="race">race</option>
                    <option value="job">job function</option>
            </select>
            </span>
        )
    }
    // TODO: when backend is up, replace YEARS with yearList prop
    const YearDropDown = () => {
        
        const YearSelectors = availableYears.map((date)=>
        {return (
            <YearComponents key={date}
            date={date}/>
        )})
        // console.log(params.company,params.year,params.sortBy)
        return (
            <span>
                <select name='year' value={params.year} onChange={setParams}>
                    {YearSelectors}
                </select>
            </span>
        )
    }
    return <div><CompanyDropDown/> by <SortDropDown/> for <YearDropDown/></div>
}
export default Selector