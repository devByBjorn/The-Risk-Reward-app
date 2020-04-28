import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

const headerStyled = makeStyles(theme => ({
  nav: {
    display: 'flex',
    justifyContent: 'flex-end',
    background: '#fff',
    borderBottom: '1px solid #e0e0e0',
    padding: '2rem 5rem',
    zIndex: '999'
  },
  link: {
    borderTop: '5px solid transparent',
    color: '#031525',
    margin: '0 2rem',
    padding: '5px 0',
    textDecoration: 'none',
    transition: 'border .3s ease',
    whiteSpace: 'no-space',
    '&:hover': {
      borderTop: '5px solid #eee',
    }
  },
  current: {
    borderTop: '5px solid #eee',
    fontWeight: 600,
  },
  noShow: {
    color: 'transparent',
  }
}))

export default headerStyled

