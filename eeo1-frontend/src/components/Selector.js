import {useEffect} from 'react'
import CompanyDropDown from './CompanyDropDown'
import SortDropDown from './SortDropDown'
import YearDropDown from './YearDropDown'

// const COMPANIES = ['Amazon','Manga','all']

const Selector = ({companyList, yearList, params,setQueryParams,getOneCompanyData}) => {
    const setParams = (e) => {
        const newParams = {
            ...params,
            [e.target.name] : e.target.value
        }
        setQueryParams(newParams);
        getOneCompanyData(newParams);
    };
    
    return (<div><CompanyDropDown params={params} setParams={setParams} companyList={companyList}/> 
    by <SortDropDown params={params} setParams={setParams}/> 
    for <YearDropDown params={params} setParams={setParams} companyList={companyList}/></div>)
}
export default Selector