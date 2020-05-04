
import { makeStyles } from '@material-ui/core/styles'

const tableToolBarStyled = makeStyles(theme => ({
  root: {
    background: '#fff',
    borderBottom: '1px solid #e0e0e0',
    minHeight: '8rem',
    fontSize: '1.6rem',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: '#202124',
        backgroundColor: '#c2dbff',
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  link: {
    color: '#202124',
  },
  tableTitle: {
    position: 'absolute',
    left: '40%',
    fontFamily: 'Century Gothic, Futura, sans-serif',
    fontWeight: 600,
    padding: '0 2rem',
    '@media(max-width: 850px)': {
      display: 'none',
    },
  },
  title: {
    color: '#d93025',
    flex: '1',
    fontFamily: 'Century Gothic, Futura, sans-serif',
    fontSize: '1.6rem',
  },
}))

export default tableToolBarStyled