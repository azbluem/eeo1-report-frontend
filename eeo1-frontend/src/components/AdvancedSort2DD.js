import OptionComponents from "./OptionComponent"

const AdvancedSort2DD = ({params,setParams}) => {
    const OPTIONS=['race','gender','job']
    const SortSelectors = OPTIONS.map((opt)=>
    {return (
        <OptionComponents sort={opt}
        strike={params.sortBy1}/>
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