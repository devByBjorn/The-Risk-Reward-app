
import React from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import InputBase from '@material-ui/core/InputBase'

const UnderlineInputBase = withStyles({
  root: {
    borderBottom: '5px solid #d93025',
  },
})(InputBase);

export default UnderlineInputBase