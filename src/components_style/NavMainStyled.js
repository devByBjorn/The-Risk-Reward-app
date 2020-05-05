import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

const NavMainStyled = styled.nav.attrs(props => ({
  padding: props.padding || '2rem 5rem'
}))`
display: flex;
justify-content: flex-end;
background: #fff;
border-bottom: 1px solid #e0e0e0;
padding: ${props => props.padding};
z-index: 999;

@media(max-width: 850px) {
  font-size: 1.2rem;
  padding: 1rem;
}
`

const linkStyled = makeStyles(theme => ({
  link: {
    borderTop: '5px solid transparent',
    color: '#031525',
    margin: '0 2rem',
    overflow: 'hiddeN',
    padding: '2.5px 0',
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

export { linkStyled, NavMainStyled as default }



