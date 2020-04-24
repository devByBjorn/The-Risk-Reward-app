import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'

const TableCellStyled = withStyles({
  head: {
    background: '#fafafa',
    fontSize: '1.6rem',
    fontWeight: '600',
    whiteSpace: 'nowrap'
  },
  body: {
    background: '#fff',
    fontSize: '1.6rem',
  },
})(TableCell);

export default TableCellStyled