import CompanyDropDown from './CompanyDropDown'
import SortDropDown from './SortDropDown'
import YearDropDown from './YearDropDown'
import PropTypes from 'prop-types'


const Selector = ({companyList, params,setQueryParams}) => {
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

Selector.propTypes = {
    companyList:PropTypes.object.isRequired,
    params:PropTypes.shape({
        company:PropTypes.string.isRequired,
        year:PropTypes.number.isRequired,
        sortBy:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired
}).isRequired,
    setQueryParams:PropTypes.func.isRequired,
}

export default Selector