const CompanyComponents = ({company}) => {
    const CompanyStr = () => {
        if (company === 'all'){
            return 'EEO tech industry average'
        }
        else {
            return (company.charAt(0).toUpperCase() + company.slice(1))
        }
    }
    return <option value={company}><CompanyStr/></option>
}
export default CompanyComponents