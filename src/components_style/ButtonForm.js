
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const ButtonForm = withStyles({
  root: {
    background: '#f50057',
    color: '#fff',
    margin: theme.spacing(1, 1, 0, 0),
    width: '50%',
    '&:hover': {
      background: '#3f51b5'
    }
  },
})(Button);

export default ButtonForm