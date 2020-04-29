import React from 'react'
import { withStyles } from '@material-ui/core/styles'

export const styles = (theme) => ({
  '@global': {
    '*': {
      margin: 0,
      padding: 0,
    },
    html: {
      fontSize: '62.5%'
    },
    body: {
      backgroundColor: '#fafafa',
      color: '#031525',
      fontFamily: 'Century Gothic, Futura, sans-serif',
      fontSize: '1.6rem',
      margin: 0,
      padding: 0,
    },
  },
});

function CssBaseline(props) {
  const { children = null, classes } = props;
  return <React.Fragment>{children}</React.Fragment>;
}

export default withStyles(styles, { name: 'MuiCssBaseline' })(CssBaseline);
