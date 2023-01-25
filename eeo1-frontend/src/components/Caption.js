const Caption = ({data,params}) => {
    // console.log(data)
    const totalGain = data.map((values)=>values).reduce((a, b) => a + b, 0)
    return <div>The company, {params.company}, had {totalGain} users between 2016 - 2020</div>
}
export default Caption