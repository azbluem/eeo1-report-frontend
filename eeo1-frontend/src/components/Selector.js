import {useState} from 'react'
import YearComponents from './YearComponents'
import CompanyComponents from './CompanyComponents'

const Selector = ({params,setQueryParams}) => {
    const [company,setCompany] = useState(params.company)
    const [sortBy, setSortBy] = useState(params.sortBy)
    const [year,setYear] = useState(params.year)
    const companyStr = () => {
        if (company === 'all'){
            return 'EEO tech industry average'
        }
        else {
            return company
        }
    }

    const setParams = () => {
        const newParams = {
            company:company,
            sortBy:sortBy,
            year:year
        }
        setQueryParams(newParams)
    }

    const SortDropDown = () => {
        return (
            <span>
                <select value={sortBy} onChange={(e)=> {setSortBy(e.target.value); setParams()}}>
                    <option value="gender">gender</option>
                    <option value="race">race</option>
                    <option value="job">job function</option>
            </select>
            </span>
        )
    }
    return <div>{companyStr().charAt(0).toUpperCase() + companyStr().slice(1)} by <SortDropDown/> for {year}</div>
}
export default Selector