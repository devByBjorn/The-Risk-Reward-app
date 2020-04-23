
import React from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  toolbar: {
    padding: '5px 10px'
  },
}

const TablePagination = React.forwardRef(function TablePagination(props, ref) {
  const { classes, className, component: Component = 'div', ...other } = props

  return <Component ref={ref} className={clsx(classes.root, className)} {...other} />
})

export default withStyles(styles, { name: 'MuiTablePagination' })(TablePagination)