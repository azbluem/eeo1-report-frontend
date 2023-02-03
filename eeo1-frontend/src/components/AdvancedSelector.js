import CompanyDropDown from './CompanyDropDown';
import AdvancedSort1DD from './AdvancedSort1DD';
import AdvancedSort2DD from './AdvancedSort2DD';
import YearDropDown from './YearDropDown'

// const COMPANIES = ['Amazon','Manga','all']

const AdvancedSelector = ({companyList, yearList, params,setQueryParams,getOneCompanyTwoParameters}) => {
    const setParams = (e) => {
        const newParams = {
            ...params,
            [e.target.name] : e.target.value
        }
        const shiftDict = {
            'gender':'race',
            'race':'job',
            'job':'gender'
        }
        if (newParams.sortBy1===newParams.sortBy2) {
            newParams.sortBy2=shiftDict[newParams.sortBy1]
        }
        setQueryParams(newParams);
    };
    
    return (<div><CompanyDropDown params={params} setParams={setParams} companyList={companyList}/> 
    by<AdvancedSort1DD params={params} setParams={setParams}/>  and 
    <AdvancedSort2DD params={params} setParams={setParams}/> 
    for <YearDropDown params={params} setParams={setParams} companyList={companyList}/></div>)
}
export default AdvancedSelector