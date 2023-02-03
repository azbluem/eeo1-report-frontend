const OptionComponents = ({sort, strike}) => {
    if (sort===strike) {
        return (<option value={sort} disabled>{sort}</option>)
    } else {
    return (<option value={sort}>{sort}</option>)
}}
export default OptionComponents