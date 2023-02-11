import PropTypes from 'prop-types'

const SortDropDown = ({params,setParams}) => {
    return (
        <span>
            <select name='sortBy' value={params.sortBy} onChange={setParams}>
                <option value="gender">gender</option>
                <option value="race">race</option>
                <option value="job">job function</option>
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