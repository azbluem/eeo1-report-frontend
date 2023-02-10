import TableHeaderComponent from "./TableHeaderComponent"
import TableRowComponent from "./TableRowComponent"

const AdvancedCaption = ({data,params}) => {
    // console.log(data)
    let totalEmployees=0
    const dataList = []
    for (const entry of data.datasets) {
        dataList.push([entry.label,...entry.data]);
        totalEmployees = entry.data.reduce(function(pv, cv) { 
            return pv + cv; }, totalEmployees)
    }
    dataList.reverse()
    const tableStats = 
        dataList.map((dlist)=> <TableRowComponent dlist={dlist}/>)
    let totalEmployeesString = <></>
    if (params.year!=='all') {
        totalEmployeesString = <p>In the year {params.year}, there was a total of {totalEmployees} at {params.company} for the above job functions.</p>
    }

    console.log(<table>{tableStats}</table>)
    return <div><p>{params.company} visual stats are in the chart, below is the tabular view.</p>
    {totalEmployeesString}
    <br/>
    <table>
        <TableHeaderComponent data={data} params={params}/>
        <tbody>{tableStats}</tbody>
    </table></div>
}
export default AdvancedCaption