import CompanyDropDown from './CompanyDropDown'
import SortDropDown from './SortDropDown'
import YearDropDown from './YearDropDown'


const Selector = ({companyList, yearList, params,setQueryParams,getOneCompanyData}) => {
    const setParams = (e) => {
        e.preventDefault()
        const newParams = {
            ...params,
            [e.target.name] : e.target.value
        }
        if (!companyList[newParams.company].years.includes(parseInt(newParams.year))){
            newParams.year = companyList[newParams.company].years[0]
        }
        setQueryParams(newParams);
    };
    return (<div><CompanyDropDown params={params} setParams={setParams} companyList={companyList}/> 
    for the year <YearDropDown params={params} setParams={setParams} companyList={companyList}/>
    by <SortDropDown params={params} setParams={setParams}/> 
    </div>)
}
export default Selector