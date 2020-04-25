import React from 'react'
import { withStyles } from '@material-ui/core/styles'

export const body = (theme) => ({
  backgroundColor: '#f6f7f9',
  color: '#031525',
  ...theme.typography.body2,
  fontFamily: 'Century Gothic, Futura, sans-serif',
})

export const styles = (theme) => ({
  '@global': {
    html: {
      fontSize: '62.5%'
    },
    body: {
      fontSize: '1.6rem',
      margin: '5rem',
      padding: 0,
    },
  },
});

/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */
function CssBaseline(props) {
  /* eslint-disable no-unused-vars */
  const { children = null, classes } = props;
  /* eslint-enable no-unused-vars */
  return <React.Fragment>{children}</React.Fragment>;
}

export default withStyles(styles, { name: 'MuiCssBaseline' })(CssBaseline);

/*
import { createGlobalStyle } from 'styled-components'

const BaseGlobalStyle = createGlobalStyle`
* {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  background: #f6f7f9;
  color: #031525;
  font-family: "Century Gothic", Futura, sans-serif;
}
`

export default BaseGlobalStyle
*/