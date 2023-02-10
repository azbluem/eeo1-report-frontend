const TableRowComponent = ({dlist}) => {
    const subsum = dlist.slice(1,dlist.length-1).reduce((a,b,i) => i < dlist.length-1 ? a + b : a, 1)
    const tList = [...dlist,subsum]
    const Row = 
        tList.map((cell)=>{ return <td key={cell}>{cell}</td>})
    return (
        <tr>
            {Row}
        </tr>
    )
}
export default TableRowComponent