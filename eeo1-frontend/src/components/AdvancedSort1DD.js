const AdvancedSort1DD = ({params,setParams}) => {
    return (
        <span>
            <select name='sortBy1' value={params.sortBy1} onChange={setParams}>
                <option value="gender">gender</option>
                <option value="race">race</option>
                <option value="job">job function</option>
        </select>
        </span>
    )
}
export default AdvancedSort1DD;