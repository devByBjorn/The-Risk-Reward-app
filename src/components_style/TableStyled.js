
import { withStyles } from '@material-ui/core/styles'
import MaUTable from '@material-ui/core/Table'

const TableStyled = withStyles({
  root: {
    background: '#fff',
    borderColappse: 'collapse',
    boxShadow: '1px 1px 3px',
    fontSize: '1.6rem',
    width: '100%'
  },
})(MaUTable)

export default TableStyled