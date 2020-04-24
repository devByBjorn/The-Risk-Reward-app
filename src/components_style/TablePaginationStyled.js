
import { withStyles } from '@material-ui/core/styles'
import TablePagination from '@material-ui/core/TablePagination'

const TablePaginationStyled = withStyles({
  caption: {
    fontSize: '1.2rem'
  },
})(TablePagination);

export default TablePaginationStyled