import OptionComponents from "./OptionComponent"

const AdvancedSort2DD = ({params,setParams}) => {
    const OPTIONS=['race','gender']
    const SortSelectors = OPTIONS.map((opt)=>
    {return (
        <OptionComponents key={opt} sort={opt}/>
    )})
    return (
        <span>
            <select name='sortBy2' value={params.sortBy2} onChange={setParams}>
                {SortSelectors}
        </select>
        </span>
    )
}
export default AdvancedSort2DD;