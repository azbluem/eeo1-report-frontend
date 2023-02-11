import PropTypes from 'prop-types'

const OptionComponents = ({sort}) => {
    return (<option value={sort}>{sort}</option>)
}

OptionComponents.propTypes = {
    sort:PropTypes.string.isRequired,
}

export default OptionComponents