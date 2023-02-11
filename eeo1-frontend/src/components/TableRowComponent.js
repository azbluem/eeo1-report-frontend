import PropTypes from 'prop-types'

const TableRowComponent = ({dlist}) => {
    const subsum = dlist.slice(1,dlist.length).reduce((a,b,i) => i < dlist.length ? a + b : a, 0)
    const tList = [...dlist,subsum]
    const Row = 
        tList.map((cell)=>{ return <td key={cell}>{cell}</td>})
    return (
        <tr>
            {Row}
        </tr>
    )
}

TableRowComponent.propTypes = {
    dlist:PropTypes.array.isRequired
}

export default TableRowComponent