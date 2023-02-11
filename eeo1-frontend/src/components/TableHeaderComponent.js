import PropTypes from 'prop-types'

const TableHeaderComponent = ({params,data}) => {
    let category = "Job Function"
    if (params.year==='all') {
        category='Year'
    }
    const headers = [category,...data.labels,'Total'].map((header)=>{return <th key={header}>{header}</th>})

    return <thead>
        <tr>
            {headers}
        </tr>
    </thead>
}

TableHeaderComponent.propTypes = {
    data:PropTypes.object.isRequired,
    params:PropTypes.shape({
        company:PropTypes.string.isRequired,
        year:PropTypes.oneOfType([PropTypes.number,PropTypes.string]).isRequired,
        sortBy1:PropTypes.array.isRequired,
        sortBy2:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired
}).isRequired,
}

export default TableHeaderComponent