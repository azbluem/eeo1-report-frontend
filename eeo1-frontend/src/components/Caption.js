const Caption = ({data,params}) => {
    const totalGain = data.map((values)=>values).reduce((a, b) => a + b, 0)
    return <div><p>In {params.year}, {params.company}, had {totalGain} employees.</p>
    <br/>
    <p>Hover over the chart to see the breakdown!</p>
    <p>Try advanced mode to see further breakdown and granularity. </p>
    <p>(Click the button in the top right)</p>
    </div>
}
export default Caption