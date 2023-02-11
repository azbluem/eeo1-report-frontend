import PropTypes from 'prop-types'

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

CompanyComponents.propTypes = {
    company:PropTypes.string.isRequired,
}

export default CompanyComponents