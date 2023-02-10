import TableHeaderComponent from "./TableHeaderComponent"
import TableRowComponent from "./TableRowComponent"

const AdvancedCaption = ({data,params}) => {
    // console.log(data)
    let totalEmployees=0
    const dataList = []
    for (const entry of data.datasets) {
        dataList.push([entry.label,...entry.data]);
        [...entry.data].map((values)=>values).reduce((a, b) => a + b, totalEmployees)
    }
    dataList.reverse()
    console.log(dataList)
    const tableStats = 
        dataList.map((dlist)=> <TableRowComponent dlist={dlist}/>)

    console.log(<table>{tableStats}</table>)
    return <div><p>{params.company} visual stats are above, look below for the tabular view.</p>
    <br/>
    <table>
        <TableHeaderComponent data={data} params={params}/>
        <tbody>{tableStats}</tbody>
    </table></div>
}
export default AdvancedCaption