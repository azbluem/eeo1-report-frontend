import OptionComponents from '../OptionComponent'
import PropTypes from 'prop-types'

const SortDropDown = ({params,setParams}) => {
    const optionsList = ['gender', 'race', 'job']
    const options = optionsList.map((option)=> {return <OptionComponents key={option} sort={option}/>})
    return (
        <span>
            <select name='sortBy' value={params.sortBy} onChange={setParams}>
                {options}
        </select>
        </span>
    )
}

SortDropDown.propTypes = {
    setParams:PropTypes.func.isRequired,
    params:PropTypes.shape({
        company:PropTypes.string.isRequired,
        year:PropTypes.number.isRequired,
        sortBy:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired
}).isRequired,
}

export default SortDropDown;