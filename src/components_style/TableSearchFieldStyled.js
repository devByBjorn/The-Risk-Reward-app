import { fade, makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    background: '#fff',
    borderBottom: '5px solid #d93025',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    transition: 'background 0.3s ease',
    '&:hover': {
      background: '#fafafa',
    },
  },
  searchIcon: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: theme.spacing(7),
    height: '100%',
    pointerEvents: 'none',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    fontSize: '1.6rem',
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}))