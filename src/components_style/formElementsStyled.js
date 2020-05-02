import { makeStyles } from '@material-ui/core/styles'

const formElementsStyled = makeStyles((theme) => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(5, 0, 0, 0),
    width: '100%',
  },
  button: {
    background: '#f50057',
    color: '#fff',
    margin: theme.spacing(1, 1, 0, 0),
    width: '50%',
    '&:hover': {
      background: '#3f51b5'
    }
  },
  formControl: {
    margin: theme.spacing(7),
  },
  formgGroup: {
    display: 'inline-block'
  },
  formLabel: {
    fontWeight: 600,
    margin: theme.spacing(0, 0, 1, 0),
    display: 'inline-block',
  },
  helperText: {
    color: '#d93025',
  },
  buttonInactive: {
    background: '#fafafa',
    color: '#e0e0e0',
    margin: theme.spacing(1, 1, 0, 0),
    width: '50%',
  },
  textArea: {
    margin: theme.spacing(2, 0, 0, 0),
    maxWidth: '100%',
    padding: theme.spacing(1),
  },
  textField: {
    margin: theme.spacing(5, 0, 0, 0),
  }
}))

export default formElementsStyled