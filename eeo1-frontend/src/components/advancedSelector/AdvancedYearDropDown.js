import OptionComponents from '../OptionComponent'
import PropTypes from 'prop-types'

// const YEARS = [2019,2020]
const AdvancedYearDropDown = ({params,setParams,companyList}) => {
    const availableYears = companyList[params.company].years || []
    const YearSelectors = availableYears.map((date)=>
    {return (
        <OptionComponents key={date} sort={date}/>
    )})
    return (
        <span>
            <select name='year' value={params.year} onChange={setParams}>
                {YearSelectors}
                <OptionComponents sort='all'/>
            </select>
        </span>
    )
};

AdvancedYearDropDown.propTypes = {
    companyList:PropTypes.object.isRequired,
    params:PropTypes.shape({
        company:PropTypes.string.isRequired,
        year:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
        sortBy1:PropTypes.array.isRequired,
        sortBy2:PropTypes.string.isRequired
}).isRequired,
    setParams:PropTypes.func.isRequired,
}


export default AdvancedYearDropDown