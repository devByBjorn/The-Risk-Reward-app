
import { withStyles } from '@material-ui/core/styles'
import MaUTable from '@material-ui/core/Table'

const TableStyled = withStyles({
  root: {
    background: '#fff',
    borderCollapse: 'collapse',
    boxShadow: '1px 1px 3px',
    width: '100%'
  },
})(MaUTable)

export default TableStyled