const CompanyComponents = ({listOfCompanies}) => {
    for (const company of listOfCompanies){
        return <option value={company}>{company}</option>
    }
}
export default CompanyComponents