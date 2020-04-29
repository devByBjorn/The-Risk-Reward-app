import { makeStyles } from '@material-ui/core/styles'

const formNavStyled = makeStyles((theme) => ({
  nav: {
    position: 'absolute',
    display: 'flex',
    top: 0,
    width: '100%',
    background: '#fafafa',
  },
  list: {
    display: 'flex',
    alignItems: 'strech',
    // color: '#3f51b5',
    listStyleType: 'none',
  },
  listItem: {
    position: 'relative',
    width: '25rem',
    height: '100%',

    '&:first-child': {
      borderLeft: '1px solid #f50057'
    }
  }
}))

export default formNavStyled