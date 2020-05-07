import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'

const NavMainStyled = styled.nav.attrs(props => ({
  padding: props.padding || '2rem 5rem'
}))`
position: -webkit-sticky; /* Safari */
position: sticky;
top: 0;
display: flex;
alignItems: center;
justify-content: center;
background: #fff;
border-bottom: 1px solid ${props => props.theme.colors.general.lightDarker};;
padding: ${props => props.padding};
z-index: 999;

@media(max-width: 850px) {
  padding: 1rem;
}
`

const linkStyled = makeStyles(theme => ({
  link: {
    borderTop: '5px solid transparent',
    color: '#031525',
    margin: '0 1.5rem',
    overflow: 'hidden',
    padding: '2.5px 0',
    textDecoration: 'none',
    transition: 'border .3s ease',
    whiteSpace: 'no-space',
    '&:hover': {
      borderTop: '5px solid #eee',
    }
  },
  current: {
    borderTop: '5px solid #f50057',
    fontWeight: 600,
    '&:hover': {
      borderTop: '5px solid #f50057',
    }
  },
  noShow: {
    color: 'transparent',
  },
  logout: {
    marginLeft: 'auto',
  },
  logo: {
    padding: '0',
  }
}))

export { linkStyled, NavMainStyled as default }



