
import * as React from 'react'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  /* Styles applied to the root element. */
  root: {
    width: '100%',
    background: '#fff',
    borderRadius: '8px',
    boxShadow: '1px 1px 3px',
  },
};

const TableContainer = React.forwardRef(function TableContainer(props, ref) {
  const { classes, className, component: Component = 'div', ...other } = props;

  return <Component ref={ref} className={clsx(classes.root, className)} {...other} />;
});

export default withStyles(styles, { name: 'MuiTableContainer' })(TableContainer);