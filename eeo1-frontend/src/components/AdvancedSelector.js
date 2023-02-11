import CompanyDropDown from './CompanyDropDown';
import AdvancedSort1DD from './AdvancedSort1DD';
import AdvancedSort2DD from './AdvancedSort2DD';
import AdvancedYearDropDown from './AdvancedYearDropDown';
import PropTypes from 'prop-types'

const AdvancedSelector = ({companyList, params,setQueryParams}) => {
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
    for the year(s) <AdvancedYearDropDown params={params} setParams={setParams} companyList={companyList}/>
    by <AdvancedSort2DD params={params} setParams={setParams}/> and
    <AdvancedSort1DD jobs={companyList[params.company].jobs} params={params} setParams={setSortBy1}/> 
    
    </div>)
}

AdvancedSelector.propTypes = {
    companyList:PropTypes.object.isRequired,
    params:PropTypes.shape({
        company:PropTypes.string.isRequired,
        year:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
        sortBy1:PropTypes.array.isRequired,
        sortBy2:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired
}).isRequired,
    setQueryParams:PropTypes.func.isRequired,
}
export default AdvancedSelector