import PropTypes from 'prop-types'

const YearComponents = ({date}) => {
    return <option value={date}>{date}</option>
}

YearComponents.propTypes = {
    date:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
}

export default YearComponents