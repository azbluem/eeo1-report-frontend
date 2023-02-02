const SortDropDown = ({params,setParams}) => {
    return (
        <span>
            <select name='sortBy' value={params.sortBy} onChange={setParams}>
                <option value="gender">gender</option>
                <option value="race">race</option>
                <option value="job">job function</option>
        </select>
        </span>
    )
}
export default SortDropDown;