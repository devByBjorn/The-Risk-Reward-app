import { withStyles } from '@material-ui/core/styles'
import CheckBox from '@material-ui/core/CheckBox'

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
})(CheckBox);

export default CheckBoxStyled