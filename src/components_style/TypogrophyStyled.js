import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const TypographyStyled = withStyles({
  root: {
    fontSize: '1.6rem'
  },
})(Typography);

export default TypographyStyled