import PropTypes from 'prop-types'

const OptionComponents = ({sort}) => {
    return (<option value={sort}>{sort}</option>)
}

OptionComponents.propTypes = {
    sort:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
}

export default OptionComponents