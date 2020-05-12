
import { withStyles } from '@material-ui/core/styles'
import MaUTable from '@material-ui/core/Table'

const TableStyled = withStyles({
  root: {
    background: '#fff',
    borderRadius: '5px',
    width: '100%'
  },
})(MaUTable)

export default TableStyled