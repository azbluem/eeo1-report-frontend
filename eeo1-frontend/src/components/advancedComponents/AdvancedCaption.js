import TableHeaderComponent from "./TableHeaderComponent"
import TableRowComponent from "./TableRowComponent"
import PropTypes from 'prop-types'

const AdvancedCaption = ({data,params,companyList,companyNotes}) => {
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
        const yearlyTotal = companyList[params.company].totalEmployees[params.year]
        totalEmployeesString = <p>In the year {params.year}, there was a total 
        of {totalEmployees} at {params.company} for the above job functions. You are looking 
        at {(totalEmployees*100/yearlyTotal).toFixed(0)}% of employees for {params.year}. 
        The total employee count for {params.year} was {yearlyTotal}.</p>
    }

    const SideNote = () => {
        if (params.company in companyNotes) {
            return companyNotes[params.company]
        } else {
            return <></>
        }}

    return <div><p>{params.company} visual stats are in the chart, below is the tabular view.</p>
    {totalEmployeesString}
    <SideNote/>
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