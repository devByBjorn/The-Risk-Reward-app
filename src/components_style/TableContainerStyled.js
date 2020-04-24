
import React from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import { TableContainer } from '@material-ui/core';

export const styles = {
  root: {
    background: '#fff',
  },
}

const TableContainerStyled = (props) => {
  const { classes, children, className, ...other } = props;

  return (
    <TableContainer className={clsx(classes.root, className)} {...other}>
      {children || 'class names'}
    </TableContainer>
  )
}

export default withStyles(styles)(TableContainerStyled)

