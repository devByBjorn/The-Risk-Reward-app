import { withStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'

const CheckBoxStyled = withStyles({
  root: {
    '&:hover': {
      color: '#031525'
    }
  },
  colorSecondary: {
    color: 'rgba(0, 0, 0, 0.54',

    '&:checked': {
      color: '#202124'
    }
  },
})(Checkbox);

export default CheckBoxStyled