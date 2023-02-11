import OptionComponents from "./OptionComponent"
import PropTypes from 'prop-types'

const AdvancedSort2DD = ({params,setParams}) => {
    const OPTIONS=['race','gender']
    const SortSelectors = OPTIONS.map((opt)=>
    {return (
        <OptionComponents key={opt} sort={opt}/>
    )})
    return (
        <span>
            <select name='sortBy2' value={params.sortBy2} onChange={setParams}>
                {SortSelectors}
        </select>
        </span>
    )
}

AdvancedSort2DD.propTypes = {
    setParams:PropTypes.func.isRequired,
    params:PropTypes.shape({
        company:PropTypes.string.isRequired,
        year:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
        sortBy1:PropTypes.array.isRequired,
        sortBy2:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired
})
}

export default AdvancedSort2DD;