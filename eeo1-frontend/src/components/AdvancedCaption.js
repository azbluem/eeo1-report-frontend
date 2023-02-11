import TableHeaderComponent from "./TableHeaderComponent"
import TableRowComponent from "./TableRowComponent"
import PropTypes from 'prop-types'

const AdvancedCaption = ({data,params}) => {
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

    return <div><p>{params.company} visual stats are in the chart, below is the tabular view.</p>
    {totalEmployeesString}
    <br/>
    <table>
        <TableHeaderComponent data={data} params={params}/>
        <tbody>{tableStats}</tbody>
    </table></div>
}

AdvancedCaption.propTypes = {
    data:PropTypes.object.isRequired,
    params:PropTypes.shape({
        company:PropTypes.string.isRequired,
        year:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
        sortBy1:PropTypes.array.isRequired,
        sortBy2:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired
}).isRequired,
}

export default AdvancedCaption