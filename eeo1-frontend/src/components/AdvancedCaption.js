import TableHeaderComponent from "./TableHeaderComponent"
import TableRowComponent from "./TableRowComponent"

const AdvancedCaption = ({data,params}) => {
    // console.log(data)
    const dataList = []
    for (const entry of data.datasets) {
        dataList.push([entry.label,...entry.data])
    }
    dataList.reverse()
    console.log(dataList)
    const tableStats = 
        dataList.map((dlist)=> <TableRowComponent dlist={dlist}/>)

    console.log(<table>{tableStats}</table>)
    return <div><p>{params.company}</p>
    <br/>
    <table>
        <TableHeaderComponent data={data} params={params}/>
        <tbody>{tableStats}</tbody>
    </table></div>
}
export default AdvancedCaption