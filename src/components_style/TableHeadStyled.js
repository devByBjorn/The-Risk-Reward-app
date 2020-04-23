
import React from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'

const TableCellHead = withStyles({
  head: {
    background: '#fafafa',
    fontSize: '1.2rem',
    fontWeight: '600',
  },
})(TableCell);

export default TableCellHead