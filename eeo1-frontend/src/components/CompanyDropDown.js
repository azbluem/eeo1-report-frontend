import CompanyComponents from './CompanyComponents'

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
export default CompanyDropDown