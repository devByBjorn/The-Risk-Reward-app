
import { lighten, makeStyles } from '@material-ui/core/styles'

const tableToolBarStyled = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
    padding: '2rem 1rem',
    background: '#fafafa',
    borderBottom: '1px solid #e0e0e0'
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.7),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}))

export default tableToolBarStyled