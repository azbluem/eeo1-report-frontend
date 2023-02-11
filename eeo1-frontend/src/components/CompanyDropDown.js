import CompanyComponents from './CompanyComponents'
import PropTypes from 'prop-types'

const CompanyDropDown = ({companyList,params,setParams}) => {
    const companies = []
    for (const company in companyList) {
        companies.push(company)
    };
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

CompanyDropDown.propTypes = {
    companyList:PropTypes.object.isRequired,
    setParams:PropTypes.func.isRequired,
    params:PropTypes.shape({
        company:PropTypes.string.isRequired,
        year:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
        sortBy:PropTypes.oneOfType([PropTypes.string,PropTypes.number])
}).isRequired,
}

export default CompanyDropDown