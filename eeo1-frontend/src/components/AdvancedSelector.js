import CompanyDropDown from './CompanyDropDown';
import AdvancedSort1DD from './AdvancedSort1DD';
import AdvancedSort2DD from './AdvancedSort2DD';
import AdvancedYearDropDown from './AdvancedYearDropDown';

const AdvancedSelector = ({companyList, yearList, params,setQueryParams,getOneCompanyTwoParameters}) => {
    const setParams = (e) => {
        e.preventDefault()
        const newParams = {
            ...params,
            [e.target.name] : e.target.value
        }
        if ((newParams.year !== 'all') && (!companyList[newParams.company].years.includes(parseInt(newParams.year)))){
            newParams.year = companyList[newParams.company].years[0]
        }
        if (newParams.year==='all') {
            newParams.sortBy1 = [newParams.sortBy1[0]]
        }
        setQueryParams(newParams);
    };
    const setSortBy1 = (jobList) => {
        console.log(jobList)
        const newParams = {
            ...params,
            sortBy1:jobList
        }
        if (newParams.year==='all') {
            newParams.sortBy1 = [newParams.sortBy1[newParams.sortBy1.length-1]]
        }
        setQueryParams(newParams)
    } 
    
    return (<div><CompanyDropDown params={params} setParams={setParams} companyList={companyList}/> 
    by<AdvancedSort1DD jobs={companyList[params.company].jobs} params={params} setParams={setSortBy1}/>  and 
    <AdvancedSort2DD params={params} setParams={setParams}/> 
    for <AdvancedYearDropDown params={params} setParams={setParams} companyList={companyList}/>
    </div>)
}
export default AdvancedSelector