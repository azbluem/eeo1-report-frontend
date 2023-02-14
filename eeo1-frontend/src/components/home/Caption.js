import PropTypes from 'prop-types'

const Caption = ({data,params, companyNotes}) => {
    const totalGain = data.map((values)=>values).reduce((a, b) => a + b, 0)
    const SideNote = () => {
    if (params.company in companyNotes) {
        return companyNotes[params.company]
    } else {
        return <></>
    }
}
    return <div><p>In {params.year}, {params.company}, had {totalGain} employees.</p>
    <SideNote/>
    <br/>
    <p>Hover over the chart to see the breakdown!</p>
    <p>Try advanced mode to see further breakdown and granularity. </p>
    <p>(Click the button in the top right)</p>
    </div>
}

Caption.propTypes = {
    data:PropTypes.array.isRequired,
    params:PropTypes.shape({
        company:PropTypes.string.isRequired,
        year:PropTypes.number.isRequired,
        sortBy:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired
}).isRequired,
    companyNotes:PropTypes.object.isRequired
}


export default Caption