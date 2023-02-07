import CompanyDropDown from './CompanyDropDown';
import AdvancedSort1DD from './AdvancedSort1DD';
import AdvancedSort2DD from './AdvancedSort2DD';
import YearDropDown from './YearDropDown'

// const COMPANIES = ['Amazon','Manga','all']
const jobs = ['Exec/Sr. Officials & Mgrs',
'First/Mid Officials & Mgrs',
'Professionals',
'Technicians',
'Sales Workers',
'Administrative Support',
'Craft Workers',
'Operatives',
'Laborers & Helpers',
'Service Workers']

const AdvancedSelector = ({companyList, yearList, params,setQueryParams,getOneCompanyTwoParameters}) => {
    const setParams = (e) => {
        const newParams = {
            ...params,
            [e.target.name] : e.target.value
        }
        setQueryParams(newParams);
    };
    const setSortBy1 = (jobList) => {
        const newParams = {
            ...params,
            sortBy1:jobList
        }
        setQueryParams(newParams)
    } 
    
    return (<div><CompanyDropDown params={params} setParams={setParams} companyList={companyList}/> 
    by<AdvancedSort1DD jobs={jobs} params={params} setParams={setSortBy1}/>  and 
    <AdvancedSort2DD params={params} setParams={setParams}/> 
    for <YearDropDown params={params} setParams={setParams} companyList={companyList}/></div>)
}
export default AdvancedSelector