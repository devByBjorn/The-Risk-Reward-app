import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'

const TableCellStyled = withStyles({
  root: {
    padding: '8px'
  },
  head: {
    background: '#fff',
    fontWeight: '600',
    whiteSpace: 'nowrap',
  },
})(TableCell);

export default TableCellStyled