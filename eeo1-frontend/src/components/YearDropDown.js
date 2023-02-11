import YearComponents from './YearComponents'
import PropTypes from 'prop-types'

const YearDropDown = ({params,setParams,companyList}) => {
    const availableYears = companyList[params.company].years || []
    const YearSelectors = availableYears.map((date)=>
    {return (
        <YearComponents key={date}
        date={date}/>
    )})
    return (
        <span>
            <select name='year' value={params.year} onChange={setParams}>
                {YearSelectors}
            </select>
        </span>
    )
};

YearDropDown.propTypes = {
    companyList:PropTypes.object.isRequired,
    setParams:PropTypes.func.isRequired,
    params:PropTypes.shape({
        company:PropTypes.string.isRequired,
        year:PropTypes.number.isRequired,
        sortBy:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired
}).isRequired,
}

export default YearDropDown