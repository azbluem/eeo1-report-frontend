const Caption = (props) => {
    // console.log(props)
    const totalGain = props.data.map((values)=>values.userGain).reduce((a, b) => a + b, 0)
    return <div>The company had {totalGain} users between 2016 - 2020</div>
}
export default Caption