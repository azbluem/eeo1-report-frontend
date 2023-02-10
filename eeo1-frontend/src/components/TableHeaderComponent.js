const TableHeaderComponent = ({params,data}) => {
    let category = "Job Function"
    if (params.year==='all') {
        category='Year'
    }
    const headers = [category,...data.labels,'total'].map((header)=>{return <th key={header}>{header}</th>})

    return <thead>
        <tr>
            {headers}
        </tr>
    </thead>
}
export default TableHeaderComponent