const Caption = ({data,params}) => {
    // console.log(data)
    console.log(data)
    const totalGain = data.map((values)=>values).reduce((a, b) => a + b, 0)
    return <div>The company, {params.company}, had {totalGain} employees in {params.year}.</div>
}
export default Caption